import Image from 'next/image';
import { Mail, Phone, Globe } from 'lucide-react';
import styles from './banner.module.css';

export default function BannerPage() {
  return (
    <div className={styles.pageContainer}>
      <p className={styles.instruction}>
        Toma una captura de pantalla de este recuadro. Tiene las medidas exactas para la portada de Facebook (820x312).
      </p>
      
      {/* Banner Container */}
      <div className={styles.bannerWrapper}>
        
        {/* Abstract Background Design */}
        <div className={styles.bgGlow1}></div>
        <div className={styles.bgGlow2}></div>
        
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <div className={styles.logoCircle}>
              <Image src="/logo.png" alt="LuSam TECH Logo" width={180} height={180} className={styles.logoImg} />
            </div>
          </div>
          
          {/* Info */}
          <div className={styles.textSection}>
            <h1 className={styles.title}>Desarrollo de Software Empresarial</h1>
            <h2 className={styles.subtitle}>Automatización, ERP y Soluciones a Medida</h2>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Globe size={16} /> www.lusamtech.com
              </div>
              <div className={styles.contactItem}>
                <Mail size={16} /> info.lusamtech@gmail.com
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} /> WhatsApp: 81 1663 7766
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
