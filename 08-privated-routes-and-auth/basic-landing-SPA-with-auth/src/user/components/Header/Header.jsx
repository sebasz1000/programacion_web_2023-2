import { Menu, MenuBrand } from '..'
import styles from './Header.module.css'
import { headerNavLinks } from '../../const/headerNavLinks'
export function Header () {
  const imgUrl = 'https://www.icesi.edu.co/biblioteca/wp-content/uploads/2022/02/logo_icesi.png'

  return (
    <header className={styles.menu}>
      <MenuBrand img={imgUrl} />
      <Menu menu={headerNavLinks} color='red' />
    </header>
  )
}
