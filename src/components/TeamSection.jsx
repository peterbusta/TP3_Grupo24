import { TEAM_MEMBERS } from '../data/content';

export default function TeamSection() {
  return (
    <section id="equipo" className="section section--surface">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Equipo · IFTS 29</span>
          <h2 className="section-title">Integrantes del Grupo 24 y sus aportes</h2>
          <p className="section-subtitle">
            Espacio destinado a registrar los aportes individuales de cada integrante en
            las próximas etapas del trabajo práctico.
          </p>
        </div>

        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.name} className="member-card">
              <div className="member-card__initial" aria-hidden="true">
                {member.name.charAt(0)}
              </div>
              <h3 className="member-card__name">{member.name}</h3>
              <p className="member-card__role">{member.group}</p>
              <p className="member-card__contribution">{member.contribution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
