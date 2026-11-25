import { TEAM_MEMBERS, TEAM_SECTION } from '../data/content';

export default function TeamSection() {
  return (
    <section id="equipo" className="section section--surface">
      <div className="container">
        <div className="team-panel">
          <div className="team-panel__glow" aria-hidden="true" />

          <div className="team-header">
            <div className="team-brand-frame">
              <img
                src={`${import.meta.env.BASE_URL}assets/${TEAM_SECTION.logoFile}`}
                alt={TEAM_SECTION.logoAlt}
                className="team-brand-frame__img"
                loading="lazy"
              />
            </div>

            <span className="team-eyebrow">{TEAM_SECTION.eyebrow}</span>
            <h2 className="team-title">{TEAM_SECTION.title}</h2>
            <p className="team-subtitle">{TEAM_SECTION.subtitle}</p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.name}
                className={`member-card member-card--${member.accent}`}
              >
                <div className="member-card__avatar-ring">
                  <div className="member-card__avatar-inner">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/${member.avatar}`}
                      alt={member.alt}
                      className="member-card__avatar"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="member-card__name">{member.name}</h3>
                <span className="member-card__divider" aria-hidden="true" />
                <p className="member-card__quote">{member.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
