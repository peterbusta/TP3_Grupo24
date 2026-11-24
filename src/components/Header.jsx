import { NAV_ITEMS } from '../data/content';
import StudyMatchLogo from './StudyMatchLogo';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#inicio"
          className="header-brand-link"
          aria-label="Volver al inicio de StudyMatch"
        >
          <StudyMatchLogo variant="header" />
        </a>

        <nav aria-label="Navegación principal">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
