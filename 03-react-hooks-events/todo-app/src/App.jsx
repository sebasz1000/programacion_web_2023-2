export default function App () {
  return (
    <>
      <div className='container'>
        <h1>Counter App</h1>
        <div className='card'>
          <header className='header'>
            <form>
              <input type='text' />
              <button className='add-btn'>Add</button>
            </form>
          </header>
          <main>
            <ul className='list'>
              <li className='list-item'>
                <div>
                  <input type='checkbox' />
                  <h3>Tarea 1</h3>
                </div>
                <button className='delete-btn'>DELETE</button>
              </li>

              <li className='list-item'>
                <div>
                  <input type='checkbox' />
                  <h3>Tarea 2</h3>
                </div>
                <button className='delete-btn'>DELETE</button>
              </li>

            </ul>
          </main>
        </div>
      </div>
    </>
  )
}
