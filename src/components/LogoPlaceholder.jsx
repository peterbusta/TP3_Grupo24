export default function LogoPlaceholder({ variant = 'compact' }) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={`logo-placeholder ${
        isFeatured ? 'logo-placeholder--featured' : 'logo-placeholder--compact'
      }`}
      role="img"
      aria-label="Espacio reservado para el logo original de StudyMatch"
    >
      <span className="logo-placeholder__tag">Logo original pendiente</span>
      <div>
        <p className="logo-placeholder__title">StudyMatch (IFTS 16)</p>
        {isFeatured && (
          <p className="logo-placeholder__note">
            Espacio reservado para incorporar el archivo del logo original completo y
            legible provisto por el equipo (en <code>public/assets/</code>). No se
            reemplaza ni inventa una marca alternativa.
          </p>
        )}
      </div>
    </div>
  );
}
