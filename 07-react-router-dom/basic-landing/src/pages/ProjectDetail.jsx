import { useParams, useNavigate, useLocation } from 'react-router-dom'

export function ProjectDetail () {
  const { state } = useLocation()
  const navigate = useNavigate()
  // const { title } = useParams()
  const { title, id, description } = state

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <a onClick={() => navigate('/projects')}>Volver a Página de Proyectos</a>
    </>
  )
}
