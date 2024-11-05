import './App.css'

function App() {

  const welcome = <h1>Bem vindo ao curso</h1>
  const gostando = false
  const numero = 2
  const cursos = ['HTML', 'CSS', 'JS']

  // Continuamos daqui amanha

  return (
    // React Fragment - CTRL + ;
    <>
      {/* Código HTML */}
      <div>
        <h1>Aula 01</h1>
        {welcome}
        <h2>Introdução ao React</h2>
        { gostando ? 'Estou curtindo' : <h3>NAO CURTI</h3> }

        <p className={numero % 2 ? 'impar' : 'par'}>{numero}</p>

        {gostando &&
          <div>
            <h3>Estou curtindo muito</h3>        
          </div>
        }

        {cursos.map((curso) => {
          return <p>{curso}</p>
        })}

        {/* Exemplo resumido */}
        {/* {cursos.map(c => <p>{c}</p>)} */}



      </div>
      

    </>
  )
}


export default App
