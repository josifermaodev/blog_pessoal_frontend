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
                className='w-full h-72 object-cover border-b-8 border-white' 
                src="https://ik.imagekit.io/q5tv5x3k8/blog%20pessoal/technology-human-touch-background-modern-remake-creation-adam.jpg?updatedAt=1740143315020" alt="Capa do Perfil" />

            <img 
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' 
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div 
                className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-gradient-to-r from-blue-500 to-green-500 text-white text-2xl items-center justify-center"
            >
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>

        </div>
    )
}

export default Perfil