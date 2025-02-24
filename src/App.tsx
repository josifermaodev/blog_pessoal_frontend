import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/temas/listatemas/ListaTemas"
import FormTema from "./components/temas/formtema/FormTema"
import DeletarTema from "./components/temas/deletartema/DeletarTema"
import ListaPostagens from "./components/postagem/listapostagem/ListaPostagens"
import FormPostagem from "./components/postagem/formpostagem/FormPostagem"
import DeletarPostagem from "./components/postagem/deletarpostagem/DeletarPostagem"
import Perfil from "./pages/perfil/Perfil"
import { ToastContainer } from "react-toastify"


import 'react-toastify/dist/ReactToastify.css';
import AtualizarCadastro from "./pages/cadastro/AtualizarCadastro"



function App() {
  

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrar" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/editarperfil" element={<AtualizarCadastro />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
