import styles from './MethodologySection.module.css';

export default function MethodologySection() {
  const steps = [
    { num: '01', title: 'Descubrimiento', desc: 'Entendemos a fondo tu negocio y objetivos.' },
    { num: '02', title: 'Análisis', desc: 'Definimos requerimientos y alcances precisos.' },
    { num: '03', title: 'Arquitectura', desc: 'Diseñamos la estructura técnica escalable.' },
    { num: '04', title: 'Diseño UX/UI', desc: 'Creamos interfaces intuitivas y modernas.' },
    { num: '05', title: 'Desarrollo', desc: 'Escribimos código limpio y eficiente.' },
    { num: '06', title: 'QA', desc: 'Pruebas exhaustivas para asegurar calidad.' },
    { num: '07', title: 'Implementación', desc: 'Despliegue seguro a producción.' },
    { num: '08', title: 'Capacitación', desc: 'Entrenamiento para tu equipo.' },
    { num: '09', title: 'Soporte Continuo', desc: 'Monitoreo y mantenimiento permanente.' },
  ];

  return (
    <section className="section bg-light">
      <div className="container">
        <div className={styles.header}>
          <h2 className="title-section">Metodología Comprobada</h2>
          <p className="subtitle">
            Un proceso estructurado que garantiza resultados previsibles, entregas puntuales y software de la más alta calidad.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line}></div>
          <div className={styles.stepsGrid}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.stepItem}>
                <div className={styles.stepNumber}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
