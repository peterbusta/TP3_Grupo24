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
                Cada tarjeta conserva literalmente la sentencia original, expone la
                propuesta de solución, ilustra el flujo conceptual con sus caminos SÍ y
                NO e incluye un desplegable accesible con el análisis completo del Grupo 24.
              </p>
            </div>

            <div className="rules-stack">
              {RULES.map((rule, index) => (
                <div key={rule.id} className="rules-stack__item">
                  <RuleCard rule={rule} />
                  {index < RULES.length - 1 && (
                    <div className="stage-bridge" aria-hidden="true">
                      <span className="stage-bridge__line" />
                      <span className="stage-bridge__dot" />
                      <span className="stage-bridge__line" />
                    </div>
                  )}
                </div>
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
