import { Link, useNavigate, Navigate } from 'react-router-dom'
const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nunc vestibulum ipsum maximus cursus. Etiam in diam ligula. Aenean nisl sapien, eleifend in neque vel, feugiat consectetur diam. Curabitur nec sem eu mauris vulputate lacinia. Sed bibendum orci eu malesuada volutpat. '
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nunc vestibulum ipsum maximus cursus. Etiam in diam ligula. Aenean nisl sapien, eleifend in neque vel, feugiat consectetur diam. Curabitur nec sem eu mauris vulputate lacinia. Sed bibendum orci eu malesuada volutpat. '
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nunc vestibulum ipsum maximus cursus. Etiam in diam ligula. Aenean nisl sapien, eleifend in neque vel, feugiat consectetur diam. Curabitur nec sem eu mauris vulputate lacinia. Sed bibendum orci eu malesuada volutpat. '
  }
]
export function ProjectsPage () {
  const navigate = useNavigate()
  const goToPreviusPage = () => navigate(-1)
  return (
    <>
      <h1>Projects Page</h1>
      <ul>
        {
            projects.map((project) => {
              const { id, title } = project
              return (
                <li key={id}>
                  <Link to={`/projects/project/${title}`} state={project}>
                    {title}
                  </Link>
                </li>
              )
            })
        }
      </ul>
      <button
        to='/projects'
        onClick={goToPreviusPage}
      >Volver a Página Previa
      </button>
      {/* <Navigate to='/' /> */}
    </>
  )
}
