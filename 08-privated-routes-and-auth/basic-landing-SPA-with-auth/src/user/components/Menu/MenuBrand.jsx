import { Link } from 'react-router-dom'
export function MenuBrand ({ img }) {
  return (
    <div>
      <Link to='/'>
        <img
          src={img}
          width='200px'
          height='auto'
        />
      </Link>
    </div>
  )
}
