function ArrowDown({ variant = 'neutral' }) {
  const colorMap = {
    neutral: '#1f5086',
    yes: '#0e6b7c',
    no: '#b45309',
  };
  const stroke = colorMap[variant] || colorMap.neutral;
  const isDashed = variant === 'no';

  return (
    <div className="flow-arrow-down" aria-hidden="true">
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
        <line
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          stroke={stroke}
          strokeWidth="2.5"
          strokeDasharray={isDashed ? '5 4' : undefined}
        />
        <polygon points="6,21 18,21 12,31" fill={stroke} />
      </svg>
    </div>
  );
}

export default function FlowDiagram({ code, diagram }) {
  return (
    <section
      className="flow-diagram"
      aria-label={`Diagrama conceptual de la sentencia ${code}`}
    >
      <div className="flow-diagram__header">
        <h4 className="flow-diagram__title">{diagram.title}</h4>
        <div className="flow-legend" aria-label="Referencias visuales del diagrama">
          <span className="flow-legend__item">
            <span className="flow-legend__swatch flow-legend__swatch--rule" />
            Regla original ({code})
          </span>
          <span className="flow-legend__item">
            <span className="flow-legend__swatch flow-legend__swatch--design" />
            Decisión de diseño · Grupo 24
          </span>
          <span className="flow-legend__item">
            <span className="flow-legend__swatch flow-legend__swatch--human" />
            Intervención humana
          </span>
        </div>
      </div>

      <div className="flow-canvas">
        {/* Inicio */}
        <div className="flow-trunk">
          <div className="flow-node flow-node--start">
            <span className="flow-node__tag">Inicio</span>
            <p className="flow-node__text">{diagram.start}</p>
          </div>

          <ArrowDown variant="neutral" />

          {/* Datos de entrada */}
          <div className="flow-node flow-node--input">
            <span className="flow-node__tag">Datos de entrada</span>
            <ul className="flow-node__list">
              {diagram.inputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <ArrowDown variant="neutral" />

          {/* Evaluación / Decisión */}
          <div className="flow-node flow-node--decision">
            <div className="flow-decision__head">
              <svg
                className="flow-decision__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <polygon
                  points="10,1 19,10 10,19 1,10"
                  fill="#e7f4fb"
                  stroke="#0f2b4c"
                  strokeWidth="2"
                />
              </svg>
              <span className="flow-node__tag">Evaluación / Decisión</span>
            </div>
            <p className="flow-node__question">{diagram.decision}</p>
          </div>
        </div>

        {/* Conector bifurcado SVG con etiquetas SÍ / NO (desktop) */}
        <div className="flow-split-connector" aria-hidden="true">
          <svg
            className="flow-split-svg"
            viewBox="0 0 800 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Tronco central desde decisión */}
            <line x1="400" y1="0" x2="400" y2="26" stroke="#1f5086" strokeWidth="2.5" />

            {/* Rama izquierda SÍ (Regla original, trazo sólido) */}
            <path
              d="M400 26 L196 26 L196 64"
              stroke="#0e6b7c"
              strokeWidth="2.5"
              fill="none"
            />
            <polygon points="189,61 203,61 196,74" fill="#0e6b7c" />

            {/* Rama derecha NO (Decisión Grupo 24, trazo discontinuo) */}
            <path
              d="M400 26 L604 26 L604 64"
              stroke="#b45309"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              fill="none"
            />
            <polygon points="597,61 611,61 604,74" fill="#b45309" />

            {/* Etiquetas SÍ / NO integradas en las ramas */}
            <rect x="272" y="13" width="52" height="26" rx="13" fill="#0e6b7c" />
            <text
              x="298"
              y="30"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="13"
              fontWeight="700"
              fontFamily="Segoe UI, system-ui, sans-serif"
            >
              SÍ
            </text>

            <rect x="476" y="13" width="52" height="26" rx="13" fill="#b45309" />
            <text
              x="502"
              y="30"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="13"
              fontWeight="700"
              fontFamily="Segoe UI, system-ui, sans-serif"
            >
              NO
            </text>
          </svg>
        </div>

        {/* Ramas SÍ y NO */}
        <div className="flow-branches">
          {/* Camino SÍ: Regla original */}
          <div className="flow-branch flow-branch--yes">
            <div className="flow-branch__badges">
              <span className="flow-pill flow-pill--yes">
                Camino {diagram.yesBranch.label}
              </span>
              <span className="flow-source flow-source--rule">
                {diagram.yesBranch.sourceTag}
              </span>
            </div>

            <div className="flow-action flow-action--yes">
              <span className="flow-action__kicker">Acción del sistema</span>
              <h5 className="flow-action__title">{diagram.yesBranch.actionTitle}</h5>
              <p className="flow-action__text">{diagram.yesBranch.actionText}</p>
            </div>

            <ArrowDown variant="yes" />

            <div className="flow-end flow-end--yes">{diagram.yesBranch.endText}</div>
          </div>

          {/* Camino NO: Caso límite / Decisión Grupo 24 */}
          <div className="flow-branch flow-branch--no">
            <div className="flow-branch__badges">
              <span className="flow-pill flow-pill--no">
                Camino {diagram.noBranch.label} · Caso límite
              </span>
              <span className="flow-source flow-source--design">
                {diagram.noBranch.sourceTag}
              </span>
              {diagram.noBranch.humanIntervention && (
                <span className="flow-source flow-source--human">
                  Intervención humana
                </span>
              )}
            </div>

            <div className="flow-action flow-action--no">
              <span className="flow-action__kicker">Excepción y control humano</span>
              <h5 className="flow-action__title">{diagram.noBranch.actionTitle}</h5>
              <p className="flow-action__text">{diagram.noBranch.actionText}</p>
            </div>

            <ArrowDown variant="no" />

            <div className="flow-end flow-end--no">{diagram.noBranch.endText}</div>
          </div>
        </div>
      </div>

      <p className="flow-diagram__footnote">
        Flujo conceptual de referencia académica: no simula ni ejecuta automatizaciones reales.
      </p>
    </section>
  );
}
