
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './Paginas/Cadastro/Cadastro'
import Login from './Paginas/Login/Login'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
