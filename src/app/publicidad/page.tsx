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
            <Image src="/logo.png?v=2" alt="LuSam TECH" width={180} height={180} className={styles.logoImg} priority unoptimized />
          </div>
          <div className={styles.badge}>SOFTWARE PARA EMPRESAS</div>
        </div>

        <div className={styles.heroSection}>
          <h1 className={styles.mainTitle}>
            ¿Tu negocio todavía hace procesos en <span className={styles.highlight}>Excel, WhatsApp o papel</span>?
          </h1>
          <p className={styles.mainSubtitle}>
            En muchos casos se pierde tiempo y dinero por no automatizar tareas.
          </p>
        </div>

        <div className={styles.contentSection}>
          <p className={styles.introText}>En LuSam TECH ayudamos a digitalizar procesos mediante:</p>
          <ul className={styles.servicesList}>
            <li><CheckCircle2 size={28} className={styles.checkIcon} /> Desarrollo de software a la medida</li>
            <li><CheckCircle2 size={28} className={styles.checkIcon} /> Automatización de procesos</li>
            <li><CheckCircle2 size={28} className={styles.checkIcon} /> Integraciones entre sistemas</li>
            <li><CheckCircle2 size={28} className={styles.checkIcon} /> Dashboards y reportes</li>
            <li><CheckCircle2 size={28} className={styles.checkIcon} /> Sitios web y soluciones tecnológicas</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <div className={styles.ctaBox}>
            <p className={styles.ctaText}>
              Si quieres conocer cómo podrías ahorrar tiempo y reducir errores, escríbenos.
              <br /><strong>La primera asesoría es sin compromiso.</strong>
            </p>
            <div className={styles.whatsappBig}>
              <Phone size={48} className={styles.waIcon} />
              <span>81 1663 7766</span>
            </div>
            <div className={styles.otherInfo}>
              <span className={styles.infoItem}><Mail size={18} /> info.lucsartech@gmail.com</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
