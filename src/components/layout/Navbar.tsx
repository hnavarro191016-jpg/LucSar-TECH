'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logoWrapper}>
          <Image src="/logo.png" alt="LucSar TECH Logo" width={90} height={90} className={styles.logoImage} priority />
        </Link>

        <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link href="#inicio" onClick={toggleMenu}>Inicio</Link>
          <Link href="#servicios" onClick={toggleMenu}>Servicios</Link>
          <Link href="#soluciones" onClick={toggleMenu}>Soluciones</Link>
          <Link href="#tecnologias" onClick={toggleMenu}>Tecnologías</Link>
          <Link href="#nosotros" onClick={toggleMenu}>Nosotros</Link>
          <Link href="#casos" onClick={toggleMenu}>Casos de éxito</Link>
          <Link href="#contacto" onClick={toggleMenu}>Contacto</Link>
          <Link href="/presentation" className={styles.presentationLink} onClick={toggleMenu}>
            Presentación
          </Link>
          
          <a href="https://wa.me/528115187738?text=Hola%20LucSar%20TECH,%20me%20interesa%20agendar%20una%20reuni%C3%B3n" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.ctaButton}`}>
            Agenda una reunión
          </a>
        </nav>

        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
