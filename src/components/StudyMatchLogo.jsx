export default function StudyMatchLogo({ variant = 'header' }) {
  const isHero = variant === 'hero';

  return (
    <div
      className={`brand-logo ${isHero ? 'brand-logo--hero' : 'brand-logo--header'}`}
    >
      <img
        src="/assets/logo-studymatch.png"
        alt="Logo original de StudyMatch (startup creada por estudiantes del IFTS 16)"
        className="brand-logo__img"
      />
      {!isHero && (
        <div className="brand-logo__meta">
          <span className="brand-logo__origin">IFTS 16 · Bloque S13-B</span>
          <span className="brand-logo__group">Propuesta Grupo 24 · IFTS 29</span>
        </div>
      )}
    </div>
  );
}
