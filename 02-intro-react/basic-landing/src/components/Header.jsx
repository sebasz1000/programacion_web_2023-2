import { Menu, MenuBrand } from './'
import styles from './Header.module.css'

export function Header ({ img }) {
  const data = [
    {
      id: 1,
      text: 'Sobre Nosotros',
      options: [
        {
          id: crypto.randomUUID(),
          text: 'Misión/Visión'
        },
        {
          id: crypto.randomUUID(),
          text: 'Valores'
        },
        {
          id: crypto.randomUUID(),
          text: 'Organización'
        }
      ]
    },
    {
      id: 2,
      text: 'Servicios',
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
      options: null
    }
  ]
  return (
    <header className={styles.menu}>

      <MenuBrand img={img} />
      <Menu menu={data} color='red' />
    </header>
  )
}
