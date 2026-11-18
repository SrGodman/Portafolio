import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const skills = ['Java', 'JavaScript', 'React', 'PostgreSQL', 'SQL', 'Git', 'Python', 'C#', 'C++']

const projects = [
  {
    number: '01',
    name: 'Banco Chepito',
    kind: 'PRIMER PROYECTO · JAVA',
    description: 'Mi primer proyecto de programación y el lugar donde aprendí a trabajar con Java. Es una aplicación bancaria de escritorio con registro e inicio de sesión, transferencias entre usuarios, historial de movimientos y carga de saldo a tarjetas. Usa Swing, Maven y SQLite.',
    tags: ['Java', 'Swing', 'SQLite', 'JDBC', 'Maven'],
    href: 'https://github.com/SrGodman/Proyecto-Progra',
    mark: '01',
  },
  {
    number: '02',
    name: 'Sistema de Multas de Tránsito',
    kind: 'APLICACIÓN DE ESCRITORIO · JAVA',
    description: 'Sistema de escritorio para registrar multas, administrar infracciones y consultar reportes. Usa Java Swing, JDBC y PostgreSQL; genera las tablas y carga el catálogo inicial al conectarse por primera vez.',
    tags: ['Java', 'Swing', 'JDBC', 'PostgreSQL', 'Ant'],
    href: 'https://github.com/SrGodman/Proyeto-de-multas-de-transito',
    mark: '02',
  },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  return (
    <>
      <header className="topbar">
        <a className="wordmark" href="#inicio" aria-label="Inicio">ES<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="availability" href="#contacto"><i /> Disponible para oportunidades</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span>INGENIERÍA</span><b>·</b><span>DESARROLLO DE SOFTWARE</span></p>
            <h1>Convierto<br />ideas en <em>software</em><span className="period">.</span></h1>
            <p className="hero-intro">Hola, soy <strong>Erick André Hernández Ortiz</strong>. Ingeniero desarrollador de software enfocado en crear productos digitales útiles, claros y bien construidos.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#proyectos">Ver proyectos <Arrow /></a>
              <a className="text-link" href="#contacto">Hablemos <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="core"><span className="core-bracket">{'{ }'}</span><span className="core-caption">IDEA → PRODUCTO</span></div>
            <span className="float-label label-one">&lt;build /&gt;</span>
            <span className="float-label label-two">const future = true;</span>
            <span className="hero-index">PORTAFOLIO<br />2025 — 2026</span>
          </div>
          <a className="scroll-cue" href="#sobre-mi"><span /> DESLIZA PARA EXPLORAR</a>
        </section>

        <section className="about section-wrap" id="sobre-mi">
          <div className="section-heading"><p className="eyebrow">01 / SOBRE MÍ</p><span className="rule" /></div>
          <div className="about-grid">
            <h2>Curiosidad técnica.<br /><em>Impacto real.</em></h2>
            <div className="about-copy">
              <p>Me gusta entender cómo funcionan las cosas y encontrar formas simples de resolver problemas complejos.
                 Combino criterio de ingeniería con atención a la experiencia de las personas.</p>
              <p>Actualmente estoy profundizando en desarrollo web y construyendo proyectos que conectan buenas ideas con tecnología práctica.</p>
              {/* <a className="text-link" href="mailto:erickandrehernandezortiz@gmail.com">Conoce más de mí <Arrow diagonal /></a> */}
            </div>
          </div>
          <div className="skills-row"><span className="skills-label">HERRAMIENTAS QUE USO</span><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        </section>

        <section className="projects section-wrap" id="proyectos">
          <div className="section-heading"><p className="eyebrow">02 / TRABAJO SELECCIONADO</p><span className="rule" /></div>
          <div className="projects-title"><h2>Proyectos con<br /><em>intención.</em></h2><p>Una selección de cosas que he diseñado,
             construido y aprendido en el camino.</p></div>
          <div className="project-list">{projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-info"><p className="eyebrow">{project.kind}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <div className={`project-visual visual-${project.mark}`} aria-hidden="true"><span>{project.mark}</span><i /><i /><i /></div>
              {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Ver ${project.name} en GitHub`}><Arrow diagonal /></a>}
            </article>
          ))}</div>
        </section>

        <section className="contact section-wrap" id="contacto">
          <div className="section-heading"><p className="eyebrow">03 / CONTACTO</p><span className="rule" /></div>
          <div className="contact-content"><p className="eyebrow">¿TIENES UN PROYECTO EN MENTE?</p><h2>Hagamos algo<br />
          <em>que importe.</em></h2><a className="button button-accent" href="mailto:tu.correo@ejemplo.com">Escríbeme <Arrow diagonal /></a></div>
          <footer><a className="wordmark" href="#inicio">ES<span>.</span></a><span>Diseñado y construido con intención.</span>
          <div className="socials"><a href="https://github.com/SrGodman" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
          <a href="https://www.linkedin.com/in/erick-andr%C3%A9-hern%C3%A1ndez-ortiz-06a3b0419/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div>
          <span className="copyright">© 2026</span></footer>
        </section>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
