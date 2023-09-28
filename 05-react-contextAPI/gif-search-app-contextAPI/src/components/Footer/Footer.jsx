import './Footer.css'
export function Footer ({ gifs, query }) {
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
