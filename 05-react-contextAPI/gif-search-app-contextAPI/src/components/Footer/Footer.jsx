import './Footer.css'
import { useApp } from '../../hooks/useApp'
export function Footer () {
  const {
    query,
    gifs
  } = useApp()

  if (query === '') {
    return null
  }

  return (
    <footer>
      <p>{`${gifs.length} results for `}
        <i>{`"${query}"`}</i>
      </p>
    </footer>
  )
}
