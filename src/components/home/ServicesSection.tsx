import { Globe, LayoutDashboard, Database, Users, Package, ShoppingCart, Settings, LineChart } from 'lucide-react';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Desarrollo Web Corporativo',
      desc: 'Portales de alto impacto, rápidos y optimizados para SEO. Proyecta una imagen internacional y atrae a los mejores clientes.',
    },
    {
      icon: <LayoutDashboard size={32} />,
      title: 'Aplicaciones Web a Medida',
      desc: 'Plataformas seguras y escalables diseñadas específicamente para resolver los cuellos de botella de tu operación diaria.',
    },
    {
      icon: <Database size={32} />,
      title: 'Implementación ERP',
      desc: 'Centraliza tu contabilidad, inventario y operaciones en un solo sistema robusto para la toma de decisiones en tiempo real.',
    },
    {
      icon: <Users size={32} />,
      title: 'Soluciones CRM',
      desc: 'Gestión inteligente de clientes y prospectos. Automatiza tu embudo de ventas y multiplica la retención y cierres.',
    },
    {
      icon: <Package size={32} />,
      title: 'Control de Inventarios',
      desc: 'Trazabilidad absoluta. Reduce mermas, optimiza stocks y sincroniza múltiples almacenes de manera automatizada.',
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'Comercio Electrónico B2B',
      desc: 'Sistemas de pedidos y cotizaciones B2B fluidos que facilitan transacciones mayoristas y mejoran la experiencia del usuario.',
    },
    {
      icon: <Settings size={32} />,
      title: 'Automatización de Procesos',
      desc: 'Sustituye tareas manuales repetitivas por flujos de trabajo automáticos (RPA) que ahorran cientos de horas al mes.',
    },
    {
      icon: <LineChart size={32} />,
      title: 'Business Intelligence',
      desc: 'Tableros de control y analítica avanzada de datos (Data Analytics) para liderar tu industria basados en información real.',
    },
  ];

  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className="title-section">Soluciones Tecnológicas a Medida</h2>
          <p className="subtitle">
            Transformamos tus retos operativos en ventajas competitivas mediante software robusto y escalable.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconBox}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
