import { NAV_ITEMS } from '../data/content';
import LogoPlaceholder from './LogoPlaceholder';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" aria-label="Volver al inicio de StudyMatch">
          <LogoPlaceholder variant="compact" />
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
