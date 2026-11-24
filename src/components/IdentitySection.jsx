import { PROJECT_INFO } from '../data/content';

export default function IdentitySection() {
  return (
    <section id="identidad" className="section section--surface">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Identidad y reconocimiento</span>
          <h2 className="section-title">
            Origen de {PROJECT_INFO.startupName} y presentación del {PROJECT_INFO.groupName}
          </h2>
          <p className="section-subtitle">
            Esta landing respeta la identidad original del proyecto creado en el{' '}
            {PROJECT_INFO.originInstitution} y presenta el análisis funcional del bloque{' '}
            {PROJECT_INFO.assignedBlock} elaborado para el {PROJECT_INFO.presentingInstitution}.
          </p>
        </div>

        <div className="identity-grid">
          <article className="info-card info-card--accent">
            <h3 className="info-card__title">Identidad original de la startup</h3>
            <ul className="info-list">
              <li>
                <strong>Startup:</strong> {PROJECT_INFO.startupName}
              </li>
              <li>
                <strong>Reconocimiento de origen:</strong> Creada por estudiantes del{' '}
                {PROJECT_INFO.originInstitution}.
              </li>
              <li>
                <strong>Área:</strong> {PROJECT_INFO.area}.
              </li>
              <li>
                <strong>Objetivo:</strong> {PROJECT_INFO.objective}
              </li>
            </ul>
          </article>

          <article className="info-card info-card--sky">
            <h3 className="info-card__title">Reconocimiento del equipo presentador</h3>
            <ul className="info-list">
              <li>
                <strong>Equipo:</strong> {PROJECT_INFO.groupName} ({PROJECT_INFO.presentingInstitution})
              </li>
              <li>
                <strong>Trabajo práctico:</strong> {PROJECT_INFO.tpTitle}
              </li>
              <li>
                <strong>Bloque asignado:</strong> {PROJECT_INFO.assignedBlock}
              </li>
              <li>
                <strong>Integrantes:</strong> Brian, Ludmila, Pedro y Flavia.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
