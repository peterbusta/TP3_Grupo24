import { IDENTITY_SECTION } from '../data/content';
import { LayersIcon, SparklesIcon } from './Icons';

export default function IdentitySection() {
  return (
    <section id="identidad" className="section section--surface">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{IDENTITY_SECTION.eyebrow}</span>
          <h2 className="section-title">{IDENTITY_SECTION.title}</h2>
          <p className="section-subtitle">
            {IDENTITY_SECTION.subtitlePrefix}
            <strong>{IDENTITY_SECTION.subtitleStrong}</strong>
            {IDENTITY_SECTION.subtitleSuffix}
          </p>
        </div>

        <div className="identity-editorial">
          {IDENTITY_SECTION.cards.map((card, index) => {
            const isOrigin = index === 0;
            return (
              <article
                key={card.title}
                className={`editorial-column editorial-column--${card.variant}`}
              >
                <div className="editorial-column__head">
                  <span
                    className={`editorial-icon ${
                      isOrigin ? 'editorial-icon--origin' : 'editorial-icon--proposal'
                    }`}
                  >
                    {isOrigin ? <SparklesIcon /> : <LayersIcon />}
                  </span>
                  <h3 className="info-card__title">{card.title}</h3>
                </div>

                <ul className="info-list">
                  {card.items.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
