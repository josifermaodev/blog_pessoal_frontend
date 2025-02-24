import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta("Você precisa estar logado!", "erro")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto m-4 rounded-2xl overflow-hidden'>

            <img 
                className='w-full h-85 object-cover border-b-8 border-white' 
                src="https://ik.imagekit.io/q5tv5x3k8/blog%20pessoal/technology-human-touch-background-modern-remake-creation-adam.jpg?updatedAt=1740143315020" alt="Capa do Perfil" />

            <img 
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' 
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div 
                className="relative mt-[-6rem] h-80 flex flex-col 
                    bg-gradient-to-r from-blue-500 to-green-500 text-white text-2xl items-center justify-center"
            >
                <div className='flex flex-col gap-2 text-center items-center mt-8'>
                    <p>Nome: {usuario.nome} </p>
                    <p>Email: {usuario.usuario}</p>
                    <button 
                        className='rounded border-white border-2 py-2 px-4 text-white hover:text-blue-950 hover:border-blue-950'
                        onClick={() => navigate("/editarperfil")}>
                        Editar Perfil
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Perfil