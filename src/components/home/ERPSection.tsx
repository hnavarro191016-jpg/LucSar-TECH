"use client";

import { useState } from 'react';
import { Search, Bell, Settings, LayoutDashboard, ShoppingCart, Users, FileText, Truck, Briefcase, CreditCard, Factory, Box, Calendar, BarChart2 } from 'lucide-react';
import styles from './ERPSection.module.css';

export default function ERPSection() {
  const [activeModule, setActiveModule] = useState('Dashboard');

  const sidebarItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
    { icon: <ShoppingCart size={18} />, label: 'Ventas' },
    { icon: <Box size={18} />, label: 'Inventarios' },
    { icon: <Truck size={18} />, label: 'Compras' },
    { icon: <Users size={18} />, label: 'Clientes' },
    { icon: <Briefcase size={18} />, label: 'Proveedores' },
    { icon: <FileText size={18} />, label: 'Facturación' },
    { icon: <CreditCard size={18} />, label: 'Cobranza' },
    { icon: <Factory size={18} />, label: 'Producción' },
    { icon: <ShoppingCart size={18} />, label: 'Pedidos' },
    { icon: <BarChart2 size={18} />, label: 'Finanzas' },
    { icon: <Calendar size={18} />, label: 'Calendario' },
    { icon: <FileText size={18} />, label: 'Reportes' },
  ];

  return (
    <section className="section bg-light">
      <div className="container">
        <div className={styles.header}>
          <h2 className="title-section">ERP a la medida de tu empresa</h2>
          <p className="subtitle">
            Centraliza toda la operación de tu negocio en una única plataforma potente, intuitiva y accesible desde cualquier lugar.
          </p>
        </div>

        <div className={styles.erpMockupWrapper}>
          <div className={styles.erpMockup}>
            {/* Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.sidebarLogo}>
                <div className={styles.logoIcon}></div>
                <span>LuSam ERP</span>
              </div>
              <nav className={styles.sidebarNav}>
                {sidebarItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`${styles.navItem} ${activeModule === item.label ? styles.active : ''}`}
                    onClick={() => setActiveModule(item.label)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
              {/* Topbar */}
              <div className={styles.topbar}>
                <div className={styles.searchBar}>
                  <Search size={18} className={styles.searchIcon} />
                  <input type="text" placeholder="Buscar módulos, clientes, facturas..." disabled />
                </div>
                <div className={styles.topbarActions}>
                  <button className={styles.actionBtn}><Bell size={20} /></button>
                  <button className={styles.actionBtn}><Settings size={20} /></button>
                  <div className={styles.avatar}>AD</div>
                </div>
              </div>

              {/* Dynamic Content Based on Active Module */}
              {activeModule === 'Dashboard' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Resumen Financiero</h3>
                      <select disabled><option>Este Año</option></select>
                    </div>
                    <div className={styles.chartArea}>
                      <div className={styles.lineChart}>
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                          <path d="M0,25 C20,20 30,10 50,15 C70,20 80,5 100,10 L100,30 L0,30 Z" fill="rgba(37,99,235,0.1)" />
                          <path d="M0,25 C20,20 30,10 50,15 C70,20 80,5 100,10" fill="none" stroke="#2563EB" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardHalf}>
                    <div className={styles.cardHeader}>
                      <h3>Últimos Pedidos</h3>
                    </div>
                    <div className={styles.tableList}>
                      {[1,2,3,4].map(i => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol}>
                            <span className={styles.textDark}>PED-{1000+i}</span>
                          </div>
                          <div className={styles.rowCol}>
                            <span className={styles.badgeSuccess}>Completado</span>
                          </div>
                          <div className={styles.rowColRight}>
                            <span className={styles.textDark}>${(1200 * i).toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardHalf}>
                    <div className={styles.cardHeader}>
                      <h3>Inventario Crítico</h3>
                    </div>
                    <div className={styles.tableList}>
                      <div className={styles.tableRow}>
                        <div className={styles.rowCol}><span className={styles.textDark}>Componente A</span></div>
                        <div className={styles.rowColRight}><span className={styles.textWarning}>12 uds.</span></div>
                      </div>
                      <div className={styles.tableRow}>
                        <div className={styles.rowCol}><span className={styles.textDark}>Material B</span></div>
                        <div className={styles.rowColRight}><span className={styles.textDanger}>5 uds.</span></div>
                      </div>
                      <div className={styles.tableRow}>
                        <div className={styles.rowCol}><span className={styles.textDark}>Empaque C</span></div>
                        <div className={styles.rowColRight}><span className={styles.textWarning}>24 uds.</span></div>
                      </div>
                      <div className={styles.tableRow}>
                        <div className={styles.rowCol}><span className={styles.textDark}>Tinta Cyan</span></div>
                        <div className={styles.rowColRight}><span className={styles.textDanger}>2 uds.</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Ventas' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Pipeline de Ventas</h3>
                    </div>
                    <div className={styles.tableList} style={{ marginTop: '1rem' }}>
                      <div className={styles.tableRow} style={{ borderBottom: '2px solid #eee', fontWeight: 'bold' }}>
                        <div className={styles.rowCol}>Cliente</div>
                        <div className={styles.rowCol}>Estado</div>
                        <div className={styles.rowCol}>Fecha Cierre</div>
                        <div className={styles.rowColRight}>Monto</div>
                      </div>
                      {['Badilsa', 'Viksa', 'Chicle Repostería', 'Acero Franc'].map((c, i) => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol}><span className={styles.textDark}>{c}</span></div>
                          <div className={styles.rowCol}><span className={i % 2 === 0 ? styles.badgeSuccess : styles.badgeWarning}>{i % 2 === 0 ? 'Cerrado' : 'En Negociación'}</span></div>
                          <div className={styles.rowCol}><span className={styles.textGray}>2{i}/10/2026</span></div>
                          <div className={styles.rowColRight}><span className={styles.textDark}>${(15000 + i * 5000).toLocaleString()}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Inventarios' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Control de Almacén Principal</h3>
                      <button className={styles.badgeSuccess} style={{ border: 'none', cursor: 'pointer' }}>+ Nuevo Ingreso</button>
                    </div>
                    <div className={styles.tableList} style={{ marginTop: '1rem' }}>
                      <div className={styles.tableRow} style={{ borderBottom: '2px solid #eee', fontWeight: 'bold' }}>
                        <div className={styles.rowCol}>SKU</div>
                        <div className={styles.rowCol}>Producto</div>
                        <div className={styles.rowCol}>Ubicación</div>
                        <div className={styles.rowColRight}>Existencia</div>
                      </div>
                      {['Servidor Dell', 'Router Cisco', 'Cable UTP', 'Switch 24p'].map((p, i) => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol}><span className={styles.textGray}>SKU-00{i}</span></div>
                          <div className={styles.rowCol}><span className={styles.textDark}>{p}</span></div>
                          <div className={styles.rowCol}><span className={styles.textGray}>Pasillo {i+1}</span></div>
                          <div className={styles.rowColRight}><span className={styles.textDark}>{100 - i*20} uds.</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Clientes' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Directorio de Clientes (CRM)</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                      {['Badilsa', 'Viksa', 'Chicle Repostería', 'Acero Franc'].map((c, i) => (
                        <div key={i} style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
                          <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>{c}</h4>
                          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#64748b' }}>contacto@{c.toLowerCase().replace(' ', '')}.com</p>
                          <span className={styles.badgeSuccess}>Activo</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Compras' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Órdenes de Compra</h3>
                    </div>
                    <div className={styles.tableList} style={{ marginTop: '1rem' }}>
                      <div className={styles.tableRow} style={{ borderBottom: '2px solid #eee', fontWeight: 'bold' }}>
                        <div className={styles.rowCol}>Proveedor</div>
                        <div className={styles.rowCol}>Estado</div>
                        <div className={styles.rowCol}>Entrega Estimada</div>
                        <div className={styles.rowColRight}>Total</div>
                      </div>
                      {['Dell Technologies', 'Cisco Systems', 'Distribuidora Global', 'Tech Supplies'].map((p, i) => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol}><span className={styles.textDark}>{p}</span></div>
                          <div className={styles.rowCol}><span className={i === 1 ? styles.badgeWarning : styles.badgeSuccess}>{i === 1 ? 'En Tránsito' : 'Recibido'}</span></div>
                          <div className={styles.rowCol}><span className={styles.textGray}>1{i}/10/2026</span></div>
                          <div className={styles.rowColRight}><span className={styles.textDark}>${(8500 + i * 2000).toLocaleString()}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Proveedores' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Directorio de Proveedores</h3>
                    </div>
                    <div className={styles.tableList} style={{ marginTop: '1rem' }}>
                      <div className={styles.tableRow} style={{ borderBottom: '2px solid #eee', fontWeight: 'bold' }}>
                        <div className={styles.rowCol}>Empresa</div>
                        <div className={styles.rowCol}>Contacto</div>
                        <div className={styles.rowCol}>Categoría</div>
                        <div className={styles.rowColRight}>Calificación</div>
                      </div>
                      {[
                        { name: 'Aceros Monterrey', contact: 'Juan Pérez', cat: 'Materia Prima', rating: '⭐️⭐️⭐️⭐️⭐️' },
                        { name: 'Empaques del Norte', contact: 'Ana Silva', cat: 'Logística', rating: '⭐️⭐️⭐️⭐️' },
                        { name: 'Tech Supplies MX', contact: 'Luis Gómez', cat: 'Tecnología', rating: '⭐️⭐️⭐️⭐️⭐️' },
                      ].map((p, i) => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol}><span className={styles.textDark}>{p.name}</span></div>
                          <div className={styles.rowCol}><span className={styles.textGray}>{p.contact}</span></div>
                          <div className={styles.rowCol}><span className={styles.badgeWarning}>{p.cat}</span></div>
                          <div className={styles.rowColRight}><span className={styles.textDark}>{p.rating}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Facturación' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Emisión de Facturas (CFDI 4.0)</h3>
                      <button className={styles.badgeSuccess} style={{ border: 'none', cursor: 'pointer' }}>+ Nueva Factura</button>
                    </div>
                    <div className={styles.tableList} style={{ marginTop: '1rem' }}>
                      <div className={styles.tableRow} style={{ borderBottom: '2px solid #eee', fontWeight: 'bold' }}>
                        <div className={styles.rowCol}>Folio</div>
                        <div className={styles.rowCol}>Cliente</div>
                        <div className={styles.rowCol}>Total</div>
                        <div className={styles.rowColRight}>Estado</div>
                      </div>
                      {[1,2,3].map(i => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol}><span className={styles.textDark}>F-400{i}</span></div>
                          <div className={styles.rowCol}><span className={styles.textGray}>{i===1?'Viksa':i===2?'Badilsa':'Chicle Repostería'}</span></div>
                          <div className={styles.rowCol}><span className={styles.textDark}>${(5500 * i).toLocaleString()}</span></div>
                          <div className={styles.rowColRight}><span className={styles.badgeSuccess}>Timbrada</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Cobranza' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardHalf}>
                    <div className={styles.cardHeader}>
                      <h3>Cuentas por Cobrar</h3>
                    </div>
                    <div style={{ padding: '2rem', textAlign: 'center' }}>
                      <h2 style={{ fontSize: '2.5rem', color: '#dc2626', margin: '0 0 0.5rem 0' }}>$45,200</h2>
                      <p style={{ color: '#64748b' }}>Saldo Vencido a 30 días</p>
                    </div>
                  </div>
                  <div className={styles.cardHalf}>
                    <div className={styles.cardHeader}>
                      <h3>Próximos Vencimientos</h3>
                    </div>
                    <div className={styles.tableList}>
                      {[1,2].map(i => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol}><span className={styles.textDark}>Factura F-39{i}</span></div>
                          <div className={styles.rowColRight}><span className={styles.textWarning}>Vence en {i*2} días</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Producción' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Órdenes de Trabajo (Línea de Ensamblaje)</h3>
                    </div>
                    <div className={styles.tableList} style={{ marginTop: '1rem' }}>
                      {[
                        { ot: 'OT-901', prod: 'Lote Piezas Acero', status: 'En Proceso', prog: '75%' },
                        { ot: 'OT-902', prod: 'Ensamblaje Motor', status: 'En Espera', prog: '0%' },
                        { ot: 'OT-903', prod: 'Pintura Industrial', status: 'Completado', prog: '100%' },
                      ].map((o, i) => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol}><span className={styles.textDark}>{o.ot}</span></div>
                          <div className={styles.rowCol}><span className={styles.textGray}>{o.prod}</span></div>
                          <div className={styles.rowCol}>
                            <div style={{ width: '100%', background: '#e2e8f0', height: '8px', borderRadius: '4px' }}>
                              <div style={{ width: o.prog, background: '#2563eb', height: '100%', borderRadius: '4px' }}></div>
                            </div>
                          </div>
                          <div className={styles.rowColRight}><span className={styles.textDark}>{o.prog}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Pedidos' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Gestión de Pedidos B2B</h3>
                    </div>
                    <div className={styles.tableList} style={{ marginTop: '1rem' }}>
                      <div className={styles.tableRow} style={{ borderBottom: '2px solid #eee', fontWeight: 'bold' }}>
                        <div className={styles.rowCol}>Nº Pedido</div>
                        <div className={styles.rowCol}>Plataforma</div>
                        <div className={styles.rowCol}>Artículos</div>
                        <div className={styles.rowColRight}>Estado</div>
                      </div>
                      {[1,2,3].map(i => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol}><span className={styles.textDark}>WEB-500{i}</span></div>
                          <div className={styles.rowCol}><span className={styles.textGray}>Portal Mayoristas</span></div>
                          <div className={styles.rowCol}><span className={styles.textDark}>{i*15} items</span></div>
                          <div className={styles.rowColRight}><span className={styles.badgeSuccess}>Empacando</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Finanzas' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Flujo de Efectivo (Cashflow)</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                      <div style={{ padding: '1.5rem', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#166534' }}>Ingresos Mes</h4>
                        <h2 style={{ margin: 0, color: '#15803d' }}>$124,500</h2>
                      </div>
                      <div style={{ padding: '1.5rem', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#991b1b' }}>Egresos Mes</h4>
                        <h2 style={{ margin: 0, color: '#b91c1c' }}>$84,200</h2>
                      </div>
                      <div style={{ padding: '1.5rem', background: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e40af' }}>Utilidad Neta</h4>
                        <h2 style={{ margin: 0, color: '#1d4ed8' }}>$40,300</h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Calendario' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Agenda y Tareas Programadas</h3>
                      <button className={styles.badgeSuccess} style={{ border: 'none', cursor: 'pointer' }}>+ Nuevo Evento</button>
                    </div>
                    <div className={styles.tableList} style={{ marginTop: '1rem' }}>
                      {[
                        { time: '09:00 AM', event: 'Revisión de Inventarios', type: 'Interno' },
                        { time: '11:30 AM', event: 'Presentación CRM a Viksa', type: 'Reunión Cliente' },
                        { time: '04:00 PM', event: 'Mantenimiento Servidores', type: 'Soporte TI' },
                      ].map((e, i) => (
                        <div key={i} className={styles.tableRow}>
                          <div className={styles.rowCol} style={{ flex: '0 0 100px' }}><span className={styles.badgeWarning}>{e.time}</span></div>
                          <div className={styles.rowCol}><span className={styles.textDark}>{e.event}</span></div>
                          <div className={styles.rowColRight}><span className={styles.textGray}>{e.type}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'Reportes' && (
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardFull}>
                    <div className={styles.cardHeader}>
                      <h3>Centro de Reportes Automatizados</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                      {[
                        'Cierre Contable Mensual',
                        'Análisis de Rotación de Inventario',
                        'Productividad de Ventas (KPIs)',
                        'Reporte de Impuestos (SAT)'
                      ].map((r, i) => (
                        <div key={i} style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ width: '32px', height: '32px', background: '#fee2e2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', fontWeight: 'bold', fontSize: '0.75rem' }}>PDF</div>
                            <span className={styles.textDark} style={{ fontWeight: '500' }}>{r}</span>
                          </div>
                          <button className={styles.actionBtn} style={{ background: 'transparent', color: '#2563eb' }}>Descargar</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
