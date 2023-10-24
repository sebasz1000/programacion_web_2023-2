export const headerNavLinks = [
  {
    id: 1,
    text: 'Sobre Nosotros',
    options: null,
    path: '/aboutus',
    disablePath: false
  },
  {
    id: 2,
    text: 'Proyectos',
    options: null,
    path: '/projects',
    disablePath: false
  },
  {
    id: 3,
    text: 'Servicios',
    path: '/services',
    disablePath: true,
    options: [
      {
        id: crypto.randomUUID(),
        text: 'Consultoria Web',
        path: '/services/web-consulting'
      },
      {
        id: crypto.randomUUID(),
        text: 'Auditoria',
        path: '/services/audit'
      },
      {
        id: crypto.randomUUID(),
        text: 'Diseño de Branding',
        path: '/services/branding-design'
      }
    ]
  },
  {
    id: 4,
    text: 'Contactenos',
    path: '/contactus',
    options: null,
    disablePath: false
  },
  {
    id: 5,
    text: 'Secret Page',
    path: '/secret-page',
    options: null,
    disablePath: false
  }
]
