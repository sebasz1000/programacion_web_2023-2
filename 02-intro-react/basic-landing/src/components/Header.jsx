import { Menu, MenuBrand } from "./"
import styles from './Header.module.css'

export function Header({img}){
 
    return(
        <header className={styles.menu}>
           <MenuBrand img={img} />
           <Menu />          
        </header>
    )
}