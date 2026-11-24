import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IdentitySection from './components/IdentitySection';
import RuleCard from './components/RuleCard';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import { PROJECT_INFO, RULES } from './data/content';

export default function App() {
  return (
    <>
      <div className="stage-banner" role="note">
        <div className="container stage-banner__inner">
          <span>
            <span className="stage-badge">Etapa 1 · Estructura base</span> Maquetación
            inicial con contenido de prueba claramente identificado y espacios reservados
            para logo y diagramas.
          </span>
          <span>{PROJECT_INFO.assignedBlock}</span>
        </div>
      </div>

      <Header />

      <main>
        <HeroSection />
        <IdentitySection />

        <section className="section" aria-labelledby="soluciones-title">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">{PROJECT_INFO.assignedBlock}</span>
              <h2 id="soluciones-title" className="section-title">
                Dos sentencias, dos soluciones: R3 y R4
              </h2>
              <p className="section-subtitle">
                Cada tarjeta conserva literalmente la sentencia original, presenta su
                propuesta de solución, reserva el espacio para su diagrama conceptual
                independiente e incluye un desplegable accesible por clic y teclado.
              </p>
            </div>

            <div className="rules-stack">
              {RULES.map((rule) => (
                <RuleCard key={rule.id} rule={rule} />
              ))}
            </div>
          </div>
        </section>

        <TeamSection />
      </main>

      <Footer />
    </>
  );
}
