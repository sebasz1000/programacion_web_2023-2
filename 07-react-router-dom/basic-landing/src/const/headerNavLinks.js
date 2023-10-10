export const headerNavLinks = [
  {
    id: 1,
    text: 'Sobre Nosotros',
    options: null,
    path: '/aboutus'
  },
  {
    id: 2,
    text: 'Servicios',
    path: '',
    options: [
      {
        id: crypto.randomUUID(),
        text: 'Consultoria Web'
      },
      {
        id: crypto.randomUUID(),
        text: 'Auditoria'
      },
      {
        id: crypto.randomUUID(),
        text: 'Diseño de Branding'
      }
    ]
  },
  {
    id: 3,
    text: 'Contactenos',
    path: '/contactus',
    options: null
  }
]
