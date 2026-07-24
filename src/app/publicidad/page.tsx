import Image from 'next/image';
import { Mail, Phone, Globe, CheckCircle2, ChevronRight, Zap, Code2, Database } from 'lucide-react';
import styles from './publicidad.module.css';

export default function PublicidadPage() {
  return (
    <div className={styles.pageContainer}>
      <p className={styles.instruction}>
        Toma una captura de pantalla de este diseño cuadrado (1080x1080). Ideal para publicar en Facebook, Instagram o enviar por WhatsApp.
      </p>
      
      {/* Flyer Container (Square 1080x1080) */}
      <div className={styles.flyerWrapper}>
        
        {/* Background Gradients & Elements */}
        <div className={styles.bgGlow1}></div>
        <div className={styles.bgGlow2}></div>
        <div className={styles.bgGlow3}></div>
        
        <div className={styles.topSection}>
          <div className={styles.logoBox}>
            <Image src="/logo.png" alt="LuSam TECH" width={180} height={180} className={styles.logoImg} />
          </div>
          <div className={styles.badge}>SOFTWARE PARA EMPRESAS</div>
        </div>

        <div className={styles.heroSection}>
          <h1 className={styles.mainTitle}>
            Transforma tu empresa con <span className={styles.highlight}>Tecnología a la Medida</span>
          </h1>
          <p className={styles.mainSubtitle}>
            Automatizamos tus procesos, optimizamos recursos y aceleramos tu crecimiento con sistemas de alta calidad.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <Zap className={styles.serviceIcon} size={32} />
            <h3 className={styles.serviceTitle}>Sistemas ERP y CRM</h3>
            <p className={styles.serviceDesc}>Gestión total de inventarios, ventas, finanzas y clientes en tiempo real.</p>
          </div>
          <div className={styles.serviceCard}>
            <Code2 className={styles.serviceIcon} size={32} />
            <h3 className={styles.serviceTitle}>Desarrollo Web</h3>
            <p className={styles.serviceDesc}>Plataformas corporativas, e-commerce y aplicaciones web escalables.</p>
          </div>
          <div className={styles.serviceCard}>
            <Database className={styles.serviceIcon} size={32} />
            <h3 className={styles.serviceTitle}>Automatización y Datos</h3>
            <p className={styles.serviceDesc}>Integraciones, reportes automatizados y herramientas para toma de decisiones.</p>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h4 className={styles.benefitsTitle}>¿Por qué elegirnos?</h4>
          <ul className={styles.benefitsList}>
            <li><CheckCircle2 size={24} className={styles.checkIcon} /> Proyectos adaptados 100% a tu operación</li>
            <li><CheckCircle2 size={24} className={styles.checkIcon} /> Soporte continuo y asesoría tecnológica</li>
            <li><CheckCircle2 size={24} className={styles.checkIcon} /> Incremento inmediato en la productividad</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <div className={styles.ctaBox}>
            <h2>Agenda una Asesoría Gratuita</h2>
            <div className={styles.whatsappBig}>
              <Phone size={48} className={styles.waIcon} />
              <span>81 1663 7766</span>
            </div>
            <div className={styles.otherInfo}>
              <span className={styles.infoItem}><Mail size={18} /> info.lusamtech@gmail.com</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
