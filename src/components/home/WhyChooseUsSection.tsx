import { Code2, TrendingUp, Shield, Cpu, Link, LifeBuoy, Server, BrainCircuit } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUsSection() {
  const features = [
    { icon: <Code2 size={24} />, title: 'Software Totalmente Personalizado', desc: 'Desarrollo a la medida exacta de tus requerimientos operativos.' },
    { icon: <TrendingUp size={24} />, title: 'Escalable', desc: 'Arquitectura diseñada para crecer junto con tu negocio sin fricción.' },
    { icon: <Shield size={24} />, title: 'Seguro', desc: 'Implementación de altos estándares de ciberseguridad y protección de datos.' },
    { icon: <Cpu size={24} />, title: 'Moderno', desc: 'Utilizamos las últimas tecnologías para garantizar longevidad y eficiencia.' },
    { icon: <Link size={24} />, title: 'Integrable', desc: 'Conexión perfecta con tus sistemas actuales y APIs de terceros.' },
    { icon: <LifeBuoy size={24} />, title: 'Soporte Continuo', desc: 'Acompañamiento permanente para el óptimo funcionamiento del sistema.' },
    { icon: <Server size={24} />, title: 'Arquitectura Profesional', desc: 'Bases sólidas que aseguran un rendimiento superior bajo alta demanda.' },
    { icon: <BrainCircuit size={24} />, title: 'Inteligencia Artificial', desc: 'Automatización y análisis predictivo integrado en tus procesos.' },
  ];

  return (
    <section id="ventajas" className="section bg-light">
      <div className="container">
        <div className={styles.header}>
          <h2 className="title-section">¿Por qué elegir LucSar TECH?</h2>
          <p className="subtitle">
            No solo escribimos código, construimos soluciones estratégicas que posicionan a tu empresa a la vanguardia de tu industria.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconBox}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
