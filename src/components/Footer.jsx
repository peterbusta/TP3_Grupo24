import { PROJECT_INFO } from '../data/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          <strong>{PROJECT_INFO.startupName}</strong> — Startup creada por estudiantes del{' '}
          {PROJECT_INFO.originInstitution}.
        </p>
        <p>
          Propuesta {PROJECT_INFO.assignedBlock} · {PROJECT_INFO.groupName} (
          {PROJECT_INFO.presentingInstitution}) · {PROJECT_INFO.tpTitle}
        </p>
      </div>
    </footer>
  );
}
