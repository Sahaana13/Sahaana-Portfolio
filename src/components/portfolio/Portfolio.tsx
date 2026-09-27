import { lazy, Suspense, useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowDown, ArrowRight, Code2, Database, Download, ExternalLink, FileText, Github, GraduationCap, Mail, Menu, Send, Sparkles, Terminal, X } from "lucide-react";
import { Button } from "./PortfolioButton";
import { articles, codingProfiles, navItems, profile, projects, skills, socialLinks } from "@/data/portfolio";

const DeveloperScene = lazy(() => import("./DeveloperScene").then((module) => ({ default: module.DeveloperScene })));
const ParticleBackground = lazy(() => import("./ParticleBackground").then((module) => ({ default: module.ParticleBackground })));

const fade = { hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } };
const iconMap = [Code2, Terminal, Database, Sparkles];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.section id={id} className="section-shell scroll-mt-24" initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={fade} transition={{ duration: 0.7 }}>
      <div className="section-heading"><span>{eyebrow}</span><h2>{title}</h2></div>
      {children}
    </motion.section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-35% 0px -55%" });
    navItems.forEach((item) => { const node = document.getElementById(item.toLowerCase()); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="navbar-shell">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Go to home"><span>{profile.initials}</span><i /></a>
        <div className="desktop-nav">
          {navItems.map((item) => <a key={item} className={active === item.toLowerCase() ? "active" : ""} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </div>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>{open && <motion.div className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}<ArrowRight size={16} /></a>)}</motion.div>}</AnimatePresence>
    </header>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <motion.article className="project-card interactive-card" layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ y: -8, rotateX: 1.5, rotateY: index % 2 ? -1.5 : 1.5 }}>
      <div className="project-visual"><span>{project.image}</span><div><Code2 /><p>{project.category}</p></div></div>
      <div className="project-content"><p className="kicker">Featured build</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="card-actions"><a href={project.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={16} /></a></div></div>
    </motion.article>
  );
}

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};
    ["name", "subject", "message"].forEach((key) => { if (!String(data.get(key) ?? "").trim()) nextErrors[key] = "This field is required"; });
    const email = String(data.get("email") ?? "");
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors["email"] = "Enter a valid email";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("sending");
    window.setTimeout(() => {
      const subject = encodeURIComponent(String(data.get("subject")));
      const body = encodeURIComponent(`From: ${data.get("name")} (${email})\n\n${data.get("message")}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 500);
  };
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {["name", "email", "subject"].map((field) => <label key={field}><span>{field}</span><input name={field} type={field === "email" ? "email" : "text"} placeholder={`Your ${field}`} aria-invalid={Boolean(errors[field])} />{errors[field] && <small>{errors[field]}</small>}</label>)}
      <label><span>message</span><textarea name="message" rows={5} placeholder="Tell me about the idea..." aria-invalid={Boolean(errors["message"])} />{errors["message"] && <small>{errors["message"]}</small>}</label>
      <Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Preparing message..." : status === "sent" ? "Email app opened" : "Send message"}<Send size={17} /></Button>
    </form>
  );
}

export function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), reduced ? 0 : 900); return () => window.clearTimeout(timer); }, [reduced]);
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))], []);
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="site-shell">
      <AnimatePresence>{loading && <motion.div className="loading-screen" exit={{ opacity: 0 }}><div className="loader-mark">{profile.initials}</div><p>Loading portfolio</p><span /></motion.div>}</AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-overlay" />
      <Suspense fallback={null}><ParticleBackground /></Suspense>
      <Navbar />
      <main>
        <section id="home" className="hero">
          <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <div className="status"><i /> Open to opportunities</div><p className="eyebrow">Hello, I’m</p><h1>{profile.name}</h1><h2>{profile.title}</h2><p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions"><Button asChild><a href="#projects">View projects <ArrowDown size={17} /></a></Button><Button asChild variant="secondary"><a href={profile.resume} download>Resume <Download size={17} /></a></Button><Button asChild variant="ghost"><a href="#contact">Contact me</a></Button></div>
            <div className="hero-meta"><span>Based in {profile.location}</span><span>Available for internships & roles</span></div>
          </motion.div>
          <div className="scene-shell" aria-label="Interactive 3D developer workspace"><Suspense fallback={<div className="scene-fallback">Initializing 3D workspace…</div>}><DeveloperScene /></Suspense><div className="scene-label"><span>Interactive workspace</span><i>Move your cursor</i></div></div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about"><span>Scroll to explore</span><ArrowDown size={16} /></a>
        </section>

        <Section id="about" eyebrow="01 / About" title="Curious by nature. Deliberate by design.">
          <div className="about-grid"><div className="about-copy"><p>{profile.about}</p><p>{profile.focus}</p><div className="timeline"><div><GraduationCap /><span><b>Education</b>Computer Science Engineering</span></div><div><Terminal /><span><b>Direction</b>Software & frontend development</span></div></div></div><div className="stats-grid">{profile.stats.map((stat, index) => <motion.div className="stat-card interactive-card" key={stat.label} whileHover={{ y: -5 }}><span>0{index + 1}</span><strong>{stat.value}</strong><p>{stat.label}</p></motion.div>)}</div></div>
        </Section>

        <Section id="skills" eyebrow="02 / Skills" title="A growing technical toolkit.">
          <div className="skills-grid">{skills.map((group, groupIndex) => { const Icon = iconMap[groupIndex % iconMap.length] ?? Code2; return <article className="skill-group interactive-card" key={group.category}><div className="group-title"><Icon /><h3>{group.category}</h3></div>{group.items.map(([name, description, level]) => <motion.div className="skill-row" key={`${group.category}-${name}`} whileHover={{ x: 5 }}><div><b>{name}</b><p>{description}</p></div><span>{level}</span></motion.div>)}</article>; })}</div>
        </Section>

        <Section id="projects" eyebrow="03 / Projects" title="Selected work, built with intent.">
          <div className="filters" role="group" aria-label="Filter projects">{categories.map((category) => <Button key={category} variant={filter === category ? "primary" : "ghost"} onClick={() => setFilter(category)}>{category}</Button>)}</div>
          <motion.div className="projects-grid" layout><AnimatePresence mode="popLayout">{visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</AnimatePresence></motion.div>
        </Section>

        <Section id="articles" eyebrow="04 / Articles" title="Notes from the learning curve.">
          <div className="articles-grid">{articles.map((article, index) => <motion.a href={article.url} target="_blank" rel="noreferrer" className="article-card interactive-card" key={article.title} whileHover={{ y: -7 }}><span>0{index + 1}</span><div className="article-meta"><i>{article.category}</i><i>{article.readingTime}</i></div><h3>{article.title}</h3><p>{article.description}</p><footer><time>{article.date}</time><ArrowRight /></footer></motion.a>)}</div><Button asChild variant="secondary"><a href="[ALL ARTICLES URL]" target="_blank" rel="noreferrer">View all articles <ArrowRight size={17} /></a></Button>
        </Section>

        <Section id="coding" eyebrow="05 / Coding" title="Practice, progress, repeat.">
          <div className="profiles-grid">{codingProfiles.map((item) => <motion.a href={item.url} target="_blank" rel="noreferrer" className="profile-card interactive-card" key={item.platform} whileHover={{ y: -6 }}><div><Code2 /><ExternalLink size={16} /></div><h3>{item.platform}</h3><b>{item.username}</b><p>{item.description}</p></motion.a>)}</div>
        </Section>

        <Section id="resume" eyebrow="06 / Resume" title="Want to know more about my experience?">
          <div className="resume-band"><div><p>A concise view of my education, technical strengths, projects, and development journey.</p><div className="hero-actions"><Button asChild><a href={profile.resume} download>Download resume <Download size={17} /></a></Button><Button asChild variant="secondary"><a href={profile.resume} target="_blank" rel="noreferrer">View resume <ExternalLink size={17} /></a></Button></div></div><div className="resume-preview"><div><FileText /><span>RESUME / PDF</span></div><strong>{profile.name}</strong><p>Computer Science Engineering Student</p><i /></div></div>
        </Section>

        <Section id="contact" eyebrow="07 / Contact" title="Let’s build something together.">
          <div className="contact-grid"><div className="contact-copy"><p>Have a project, internship, or interesting problem in mind? Send a message and your email app will open with everything prepared.</p><a href={`mailto:${profile.email}`}><Mail /> <span><small>Email</small>{profile.email}</span></a><div className="social-row">{socialLinks.map((link) => <a key={link.label} href={link.url} target={link.url.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" title={link.label}>{link.label}</a>)}</div></div><ContactForm /></div>
        </Section>
      </main>
      <footer className="footer"><div><a href="#home" className="brand"><span>{profile.initials}</span><i /></a><p>{profile.name}<br />Computer Science Engineering Student | Developer</p></div><nav aria-label="Footer navigation">{["Home", "About", "Skills", "Projects", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav><div className="footer-end"><p>© 2026 {profile.name}. All rights reserved.</p><a href="#home" className="back-top" aria-label="Back to top"><ArrowDown /></a></div></footer>
    </div>
  );
}