import { PROJECT_INFO } from '../data/content';
import StudyMatchLogo from './StudyMatchLogo';

export default function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-eyebrow">
            {PROJECT_INFO.presentingInstitution} · {PROJECT_INFO.tpTitle}
          </span>
          <h1 className="hero-title">
            {PROJECT_INFO.startupName} · {PROJECT_INFO.assignedBlock}
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
            <a href="#regla-r3" className="btn btn--hero">
              Ver sentencia R3
            </a>
            <a href="#regla-r4" className="btn btn--hero">
              Ver sentencia R4
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Identidad original y necesidad de StudyMatch">
          <StudyMatchLogo variant="hero" />
          <p className="hero-card__origin">
            Identidad original · Startup del {PROJECT_INFO.originInstitution}
          </p>
          <h2 className="hero-card__heading">Necesidad que atiende StudyMatch</h2>
          <p className="hero-card__text">{PROJECT_INFO.heroNeedText}</p>
        </aside>
      </div>
    </section>
  );
}
