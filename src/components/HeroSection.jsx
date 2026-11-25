import { PROJECT_INFO } from '../data/content';
import {
  ArrowDownRightIcon,
  BookOpenIcon,
  GraduationCapIcon,
  ShieldCheckIcon,
  UsersIcon,
} from './Icons';
import StudyMatchLogo from './StudyMatchLogo';

export default function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-eyebrow">
            {PROJECT_INFO.presentingInstitution} · {PROJECT_INFO.tpTitle}
          </span>
          <h1 className="hero-title">
            {PROJECT_INFO.startupName} ·{' '}
            <span className="hero-title__r3">Invitación</span>{' '}
            <span className="hero-title__conj">y</span>{' '}
            <span className="hero-title__r4">consentimiento</span>
          </h1>
          <p className="hero-lead">{PROJECT_INFO.objective}</p>

          <div className="hero-meta">
            <div className="hero-meta__item">
              <span className="hero-meta__icon hero-meta__icon--teal">
                <GraduationCapIcon />
              </span>
              <div>
                <span className="hero-meta__label">Origen de la startup</span>
                <span className="hero-meta__value">
                  Creada por estudiantes del {PROJECT_INFO.originInstitution}
                </span>
              </div>
            </div>

            <div className="hero-meta__item">
              <span className="hero-meta__icon hero-meta__icon--violet">
                <BookOpenIcon />
              </span>
              <div>
                <span className="hero-meta__label">Área</span>
                <span className="hero-meta__value">{PROJECT_INFO.area}</span>
              </div>
            </div>

            <div className="hero-meta__item">
              <span className="hero-meta__icon hero-meta__icon--teal">
                <ShieldCheckIcon />
              </span>
              <div>
                <span className="hero-meta__label">Bloque asignado</span>
                <span className="hero-meta__value">{PROJECT_INFO.assignedBlock}</span>
              </div>
            </div>

            <div className="hero-meta__item">
              <span className="hero-meta__icon hero-meta__icon--violet">
                <UsersIcon />
              </span>
              <div>
                <span className="hero-meta__label">Propuesta presentada por</span>
                <span className="hero-meta__value">
                  {PROJECT_INFO.groupName} ({PROJECT_INFO.presentingInstitution})
                </span>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#regla-r3" className="btn btn--hero btn--hero-r3">
              <span>Ver sentencia R3</span>
              <ArrowDownRightIcon className="btn__icon" />
            </a>
            <a href="#regla-r4" className="btn btn--hero btn--hero-r4">
              <span>Ver sentencia R4</span>
              <ArrowDownRightIcon className="btn__icon" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual__glow" aria-hidden="true" />
          <svg
            className="hero-rings"
            viewBox="0 0 560 560"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroRingOuter" x1="40" y1="60" x2="520" y2="500" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="heroRingMid" x1="500" y1="80" x2="80" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.38" />
                <stop offset="55%" stopColor="#2dd4bf" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <circle
              cx="280"
              cy="280"
              r="258"
              stroke="url(#heroRingOuter)"
              strokeWidth="1.25"
              strokeDasharray="190 36 120 28"
            />
            <circle
              cx="280"
              cy="280"
              r="218"
              stroke="url(#heroRingMid)"
              strokeWidth="1.25"
            />
            <circle
              cx="280"
              cy="280"
              r="176"
              stroke="rgba(148, 163, 184, 0.14)"
              strokeWidth="1"
              strokeDasharray="6 8"
            />
          </svg>

          <aside
            className="hero-card"
            aria-label="Identidad original y necesidad de StudyMatch"
          >
            <StudyMatchLogo variant="hero" />
            <p className="hero-card__origin">
              Identidad original · Startup del {PROJECT_INFO.originInstitution}
            </p>
            <div className="hero-card__divider" aria-hidden="true" />
            <h2 className="hero-card__heading">Necesidad que atiende StudyMatch</h2>
            <p className="hero-card__text">{PROJECT_INFO.heroNeedText}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
