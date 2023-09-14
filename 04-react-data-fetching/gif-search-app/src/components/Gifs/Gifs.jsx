import './Gifs.css'
export function Gifs ({ gifs, error }) {
  const hasGifs = gifs.length > 0

  if (error) {
    return (<p>{error}</p>)
  }

  if (!hasGifs) {
    return <p>There are no results</p>
  }

  return (
    <ul id='gifs-grid'>
      {
        gifs.map(gif => {
          const { id, title, img } = gif
          return (
            <li key={id}>
              <img
                src={img}
                alt={title}
                width='200px'
              />
              <h3>{title}</h3>
            </li>
          )
        })
      }
    </ul>
  )
}
