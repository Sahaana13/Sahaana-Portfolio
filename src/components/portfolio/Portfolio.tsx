import { lazy, Suspense, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, type Variants } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUp, BarChart3, Cloud, Code2, Database, Download, ExternalLink, FileText, GitBranch, Github, GraduationCap, Layout, Linkedin, Mail, Menu, ShieldCheck, Terminal, Workflow, X } from "lucide-react";
import { Button } from "./PortfolioButton";
import { CustomCursor } from "./CustomCursor";
import { aboutCards, careerFocus, isProvided, navItems, profile } from "@/data/portfolio";
import { salesforceSkills, skillGroups } from "@/data/skills";
import { projectCategories, projects } from "@/data/projects";
import { codingProfiles } from "@/data/codingProfiles";
import { socialLinks } from "@/data/socialLinks";

import hotelImg from "@/assets/project-hotel-banquets-crm.jpg";
import portfolioImg from "@/assets/project-portfolio-website.jpg";
const projectImages: Record<string, { src: string; alt: string }> = {
  "Hotel Banquets CRM": { src: hotelImg, alt: "Dark CRM dashboard with banquet booking calendar, event cards and revenue charts" },
  "Personal Portfolio Website": { src: portfolioImg, alt: "Responsive portfolio website shown on laptop, tablet and phone screens" },
};

const DeveloperScene = lazy(() => import("./DeveloperScene").then((m) => ({ default: m.DeveloperScene })));
const ParticleBackground = lazy(() => import("./ParticleBackground").then((m) => ({ default: m.ParticleBackground })));

const reveals: Record<string, Variants> = {
  about: { hidden: { opacity: 0, x: -40, filter: "blur(10px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)" } },
  projects: { hidden: { opacity: 0, rotateX: 12, y: 40 }, visible: { opacity: 1, rotateX: 0, y: 0 } },
  resume: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  contact: { hidden: { opacity: 0, clipPath: "inset(10% 10% 10% 10% round 24px)" }, visible: { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 0px)" } },
  default: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } },
};
const item: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const aboutIcons = [GraduationCap, Terminal, Cloud, Layout];
const sfIcons = [Cloud, Workflow, BarChart3, ShieldCheck];
const catIcons: Record<string, typeof Code2> = { Programming: Code2, Frontend: Layout, Database, "Version Control": GitBranch, Additional: BarChart3 };
const socialIcon = (label: string) => (label === "LinkedIn" ? Linkedin : label === "GitHub" ? Github : label === "Email" ? Mail : Code2);

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.section id={id} className="section-shell scroll-mt-24" style={{ perspective: 1200 }} initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={(reveals[id] ?? reveals["default"])!} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <div className="section-heading"><span>{eyebrow}</span><h2>{title}</h2></div>
      {children}
    </motion.section>
  );
}

function TiltCard({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const move = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    ref.current.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    ref.current.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return <motion.div variants={item} className={`tilt-card ${className}`}><div ref={ref} className="tilt-inner" onMouseMove={move} onMouseLeave={leave}>{children}</div></motion.div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-35% 0px -55%" });
    navItems.forEach((n) => { const node = document.getElementById(n.id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="navbar-shell">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Go to home"><span>{profile.initials}</span><i /></a>
        <div className="desktop-nav">
          {navItems.map((n) => <a key={n.id} className={active === n.id ? "active" : ""} href={`#${n.id}`}>{n.label}{active === n.id && <motion.i layoutId="nav-underline" className="nav-underline" />}</a>)}
        </div>
        <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>{open && <motion.div className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{navItems.map((n, i) => <motion.a initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }} key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}<ArrowRight size={16} /></motion.a>)}</motion.div>}</AnimatePresence>
    </header>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const hasGit = isProvided(project.github);
  const hasDemo = isProvided(project.demo);
  return (
    <motion.article className="project-card interactive-card" layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} whileHover={{ y: -8 }}>
      <div className="project-visual">{projectImages[project.title] ? <img src={projectImages[project.title]!.src} alt={projectImages[project.title]!.alt} width={1280} height={768} loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> : <span>{project.image}</span>}<div>{project.category === "Salesforce" ? <Cloud /> : <Code2 />}<p>{project.category}</p></div></div>
      <div className="project-content"><p className="kicker">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="card-actions">
          {hasGit ? <a href={project.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a> : <span className="muted-link">GitHub link coming soon</span>}
          {hasDemo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={16} /></a> : <span className="muted-link">Demo coming soon</span>}
        </div>
      </div>
    </motion.article>
  );
}

function ContactLinks() {
  const items = [
    { label: "Email", url: isProvided(profile.email) ? `mailto:${profile.email}` : "", text: isProvided(profile.email) ? profile.email : "[YOUR EMAIL]", Icon: Mail },
    { label: "LinkedIn", url: socialLinks.find((l) => l.label === "LinkedIn")?.url ?? "", text: "Connect on LinkedIn", Icon: Linkedin },
    { label: "GitHub", url: socialLinks.find((l) => l.label === "GitHub")?.url ?? "", text: "View my GitHub", Icon: Github },
  ];
  return (
    <div className="profiles-grid">
      {items.map(({ label, url, text, Icon }) => (
        <a key={label} href={url || undefined} target={url.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" className="profile-card interactive-card" aria-label={label}>
          <div><Icon /><ExternalLink size={16} /></div><h3>{label}</h3><b>{text}</b>
        </a>
      ))}
    </div>
  );
}

export function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("All");
  const [resumeOpen, setResumeOpen] = useState(false);
  useEffect(() => { if (!resumeOpen) return; const k = (e: KeyboardEvent) => { if (e.key === "Escape") setResumeOpen(false); }; window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, [resumeOpen]);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useEffect(() => { const t = window.setTimeout(() => setLoading(false), reduced ? 0 : 1000); return () => window.clearTimeout(t); }, [reduced]);
  const visibleProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="site-shell">
      <AnimatePresence>{loading && <motion.div className="loading-screen" exit={{ opacity: 0 }}><div className="loader-mark">{profile.initials}</div><strong className="loader-name">{profile.name}</strong><p>Loading portfolio...</p><span /></motion.div>}</AnimatePresence>
      <CustomCursor />
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="ambient ambient-three" /><div className="grid-overlay" />
      <Suspense fallback={null}><ParticleBackground /></Suspense>
      <Navbar />
      <main>
        <section id="home" className="hero">
          <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.3, duration: 0.9 }}>
            <div className="status"><i /> Open to Opportunities</div><p className="eyebrow">Hello, I’m</p><h1>{profile.name}</h1><h2>{profile.title}</h2>
            <p className="hero-roles"><span>Java Full Stack Developer</span><b>|</b><span>Salesforce Developer</span></p>
            <p className="hero-intro">{profile.tagline}</p>
            <div className="hero-actions"><Button asChild><a href="#projects">View Projects <ArrowDown size={17} /></a></Button><Button asChild variant="secondary"><a href={profile.resume} download>Download Resume <Download size={17} /></a></Button><Button asChild variant="ghost"><a href="#contact">Contact Me</a></Button></div>
          </motion.div>
          <div className="scene-shell" aria-label="Interactive 3D scene showing Java Full Stack and Salesforce technologies"><Suspense fallback={<div className="scene-fallback">Initializing 3D workspace…</div>}><DeveloperScene /></Suspense><div className="scene-label"><span>Java · Salesforce</span><i>Move your cursor</i></div></div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about"><span>Scroll to explore</span><ArrowDown size={16} /></a>
        </section>

        <section className="focus-band" aria-label="Primary career focus">
          {careerFocus.map((c, i) => (
            <motion.article key={c.title} className={`focus-card focus-${c.tone}`} initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}>
              <div className="focus-icon">{i === 0 ? <Terminal /> : <Cloud />}</div>
              <p className="kicker">Career focus 0{i + 1}</p><h3>{c.title}</h3><p>{c.summary}</p>
              <div className="tags">{c.items.map((t) => <span key={t}>{t}</span>)}</div>
            </motion.article>
          ))}
        </section>

        <Section id="about" eyebrow="01 / About" title="Two paths. One builder mindset.">
          <div className="about-grid"><div className="about-copy"><p>{profile.about}</p><p>{profile.focus}</p></div>
            <div className="stats-grid">{aboutCards.map((c, i) => { const Icon = aboutIcons[i] ?? Code2; return <motion.div className="stat-card about-card interactive-card" key={c.title} whileHover={{ y: -5 }}><Icon /><strong>{c.title}</strong><p>{c.text}</p></motion.div>; })}</div>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 / Skills" title="Two tracks, one toolkit.">
          <div className="skill-tracks">
            {skillGroups.map((g) => (
              <div key={g.track} className="skill-track track-cyan"><h3 className="track-title"><Terminal /> {g.track}</h3>
                <div className="skills-grid">{g.categories.map((cat) => { const Icon = catIcons[cat.name] ?? Code2; return <TiltCard key={cat.name} className="skill-group interactive-card"><div className="group-title"><Icon /><h4>{cat.name}</h4></div><div className="tags">{cat.items.map((s) => <span key={s}>{s}</span>)}</div></TiltCard>; })}</div>
              </div>
            ))}
            <div className="skill-track track-violet"><h3 className="track-title"><Cloud /> Salesforce Development</h3>
              <div className="skills-grid">{salesforceSkills.map((s, i) => { const Icon = sfIcons[i] ?? Cloud; return <TiltCard key={s.name} className="skill-group interactive-card"><div className="group-title"><Icon /><h4>{s.name}</h4></div><p className="skill-desc">{s.description}</p></TiltCard>; })}</div>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="03 / Projects" title="Selected work, built with intent.">
          <div className="filters" role="group" aria-label="Filter projects">{projectCategories.map((c) => <Button key={c} variant={filter === c ? "primary" : "ghost"} onClick={() => setFilter(c)} aria-pressed={filter === c}>{c}</Button>)}</div>
          <motion.div className="projects-grid" layout><AnimatePresence mode="popLayout">{visibleProjects.map((p) => <ProjectCard key={p.title} project={p} />)}</AnimatePresence></motion.div>
          {visibleProjects.length === 0 && <p className="empty-note">Projects in this category are coming soon.</p>}
        </Section>

        <Section id="coding" eyebrow="04 / Coding Profiles" title="Practice, progress, repeat.">
          {codingProfiles.length ? <div className="profiles-grid">{codingProfiles.map((p, i) => <motion.a animate={reduced ? {} : { y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }} href={p.url} target="_blank" rel="noreferrer" className="profile-card interactive-card" key={p.platform}><div><Code2 /><ExternalLink size={16} /></div><h3>{p.platform}</h3><b>{p.username}</b><p>Visit Profile →</p></motion.a>)}</div>
            : <p className="empty-note">Coding profiles will appear here once they’re added.</p>}
        </Section>

        <Section id="resume" eyebrow="05 / Resume" title="Explore My Resume">
          <div className="resume-band"><div><p>Learn more about my education, technical skills, projects, and development journey.</p><div className="hero-actions"><Button onClick={() => setResumeOpen(true)}>View Resume <ExternalLink size={17} /></Button><Button asChild variant="secondary"><a href={profile.resume} download>Download Resume <Download size={17} /></a></Button></div></div>{resumeOpen && (<div role="dialog" aria-modal="true" aria-label="Resume viewer" onClick={() => setResumeOpen(false)} style={{position:"fixed",inset:0,zIndex:100,background:"color-mix(in oklab, var(--background) 85%, transparent)",backdropFilter:"blur(8px)",display:"flex",flexDirection:"column",padding:"1rem",gap:"0.75rem"}}><div style={{display:"flex",justifyContent:"flex-end",gap:"0.5rem"}} onClick={(e) => e.stopPropagation()}><Button asChild variant="secondary"><a href={profile.resume} target="_blank" rel="noreferrer">Open in new tab <ExternalLink size={16} /></a></Button><Button onClick={() => setResumeOpen(false)} autoFocus>Close</Button></div><iframe title="Sahaana M resume" src={profile.resume} onClick={(e) => e.stopPropagation()} style={{flex:1,width:"100%",maxWidth:"960px",margin:"0 auto",border:0,borderRadius:"12px",background:"white"}} /></div>)}<div className="resume-preview"><div><FileText /><span>RESUME / PDF</span></div><strong>{profile.name}</strong><p>Java Full Stack · Salesforce</p><i /></div></div>
        </Section>

        <Section id="contact" eyebrow="06 / Contact" title="Let’s Build Something Together">
          <div className="contact-grid"><div className="contact-copy"><p>Have an internship, role, or project in mind? Reach out through any of these channels.</p>
          </div><ContactLinks /></div>
        </Section>
      </main>
      <footer className="footer"><div><a href="#home" className="brand" aria-label="Back to home"><span>{profile.initials}</span><i /></a><p>{profile.name}<br />Java Full Stack Developer | Salesforce Developer</p></div>
        <nav aria-label="Footer navigation">{navItems.slice(0, 5).map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}</nav>
        <div className="footer-end">{socialLinks.length > 0 && <div className="social-row">{socialLinks.map((l) => { const Icon = socialIcon(l.label); return <a key={l.label} href={l.url} target={l.url.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" aria-label={l.label} data-tip={l.label}><Icon size={16} /></a>; })}</div>}<p>© 2026 {profile.name}. All rights reserved.</p><a href="#home" className="back-top" aria-label="Back to top"><ArrowUp /></a></div>
      </footer>
    </div>
  );
}
