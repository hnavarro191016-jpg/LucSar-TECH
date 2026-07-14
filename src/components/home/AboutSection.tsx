import { CheckCircle2, Target, Eye } from 'lucide-react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const valores = [
    { title: 'Innovación', desc: 'Desarrollamos soluciones utilizando tecnologías modernas y mejores prácticas para generar un impacto real en los negocios.' },
    { title: 'Compromiso', desc: 'Cada proyecto es atendido con responsabilidad, cercanía y enfoque en los objetivos del cliente.' },
    { title: 'Calidad', desc: 'Construimos software robusto, seguro, escalable y preparado para evolucionar con el crecimiento de cada empresa.' },
    { title: 'Transparencia', desc: 'Fomentamos relaciones basadas en la comunicación clara, la honestidad y la confianza.' },
    { title: 'Orientación al Cliente', desc: 'Comprendemos las necesidades de cada organización para ofrecer soluciones que aporten valor y resultados medibles.' },
  ];

  return (
    <section id="nosotros" className="section">
      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.textContent}>
            <div className={styles.header}>
              <h2 className="title-section">Nosotros</h2>
              <p className="subtitle">
                En <strong>LucSar TECH</strong> creemos que la tecnología debe ser una herramienta para impulsar el crecimiento de las empresas, no una complicación más en su operación.
              </p>
            </div>
            <p className={styles.paragraph}>
              Nos especializamos en el diseño y desarrollo de soluciones de software empresarial que automatizan procesos, optimizan recursos y facilitan la toma de decisiones mediante información confiable y en tiempo real.
            </p>
            <p className={styles.paragraph}>
              Cada proyecto es desarrollado de forma personalizada, entendiendo primero el funcionamiento y las necesidades de cada organización para construir soluciones escalables, seguras y alineadas con sus objetivos de negocio.
            </p>
            <p className={styles.paragraph}>
              Nuestro compromiso no termina con la entrega de un sistema. Acompañamos a nuestros clientes mediante soporte, mejoras continuas y asesoría tecnológica para garantizar que cada solución evolucione junto con su empresa.
            </p>
            <p className={styles.paragraph}>
              Trabajamos con tecnologías modernas, metodologías ágiles y un enfoque orientado a resultados, ayudando a organizaciones de diferentes sectores a acelerar su transformación digital.
            </p>
          </div>

          <div className={styles.missionVision}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}><Target size={28} /></div>
              <div>
                <h3 className={styles.mvTitle}>Nuestra Misión</h3>
                <p className={styles.mvDesc}>
                  Impulsar el crecimiento de las empresas mediante soluciones tecnológicas innovadoras que simplifiquen procesos, automaticen operaciones y proporcionen información estratégica para una mejor toma de decisiones. Nuestro compromiso es desarrollar software de alta calidad que genere valor real y acompañar a nuestros clientes en cada etapa de su transformación digital.
                </p>
              </div>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}><Eye size={28} /></div>
              <div>
                <h3 className={styles.mvTitle}>Nuestra Visión</h3>
                <p className={styles.mvDesc}>
                  Ser una empresa referente en México en el desarrollo de software empresarial, reconocida por la innovación, la excelencia técnica y la confianza de nuestros clientes. Buscamos convertirnos en el aliado tecnológico estratégico de las organizaciones que desean crecer mediante la automatización, la inteligencia artificial y el desarrollo de soluciones a la medida.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.valoresSection}>
          <h3 className={styles.valoresTitle}>Nuestros Valores</h3>
          <div className={styles.valoresGrid}>
            {valores.map((val, idx) => (
              <div key={idx} className={styles.valorCard}>
                <CheckCircle2 className={styles.valorIcon} size={20} />
                <div>
                  <h4 className={styles.valorName}>{val.title}</h4>
                  <p className={styles.valorText}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
