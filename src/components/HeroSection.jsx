import { PROJECT_INFO } from '../data/content';
import LogoPlaceholder from './LogoPlaceholder';

export default function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-eyebrow">
            {PROJECT_INFO.presentingInstitution} · {PROJECT_INFO.tpTitle}
          </span>
          <h1 className="hero-title">
            {PROJECT_INFO.startupName}: {PROJECT_INFO.assignedBlock}
          </h1>
          <p className="hero-lead">{PROJECT_INFO.objective}</p>

          <div className="hero-meta">
            <div className="hero-meta__item">
              <span className="hero-meta__label">Origen de la startup</span>
              <span className="hero-meta__value">
                Creada por estudiantes del {PROJECT_INFO.originInstitution}
              </span>
            </div>
            <div className="hero-meta__item">
              <span className="hero-meta__label">Área</span>
              <span className="hero-meta__value">{PROJECT_INFO.area}</span>
            </div>
            <div className="hero-meta__item">
              <span className="hero-meta__label">Bloque asignado</span>
              <span className="hero-meta__value">{PROJECT_INFO.assignedBlock}</span>
            </div>
            <div className="hero-meta__item">
              <span className="hero-meta__label">Propuesta presentada por</span>
              <span className="hero-meta__value">
                {PROJECT_INFO.groupName} ({PROJECT_INFO.presentingInstitution})
              </span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#regla-r3" className="btn btn--primary">
              Ver sentencia R3
            </a>
            <a href="#regla-r4" className="btn btn--ghost">
              Ver sentencia R4
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Identidad visual y necesidad">
          <LogoPlaceholder variant="featured" />
          <h2 className="hero-card__heading">Necesidad que atiende StudyMatch</h2>
          <p className="hero-card__text">{PROJECT_INFO.heroNeedPlaceholder}</p>
        </aside>
      </div>
    </section>
  );
}
