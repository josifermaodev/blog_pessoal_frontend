import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Postagem from "../../../models/Postagem"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import Modal from "../../modal/Modal"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarPostagem() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const [isOpen, setIsOpen] = useState<boolean>(true); // Controla a abertura do modal

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!", "erro")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta("Postagem apagada com sucesso!", "sucesso")

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar a postagem.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        setIsOpen(false);
        navigate("/postagens")
    }
    
    return (
        <Modal isOpen={isOpen} onClose={retornar}>
            <div className='container'>
                <h1 className='text-4xl text-center my-4'>Deletar Postagem</h1>

                <p className='text-center font-semibold mb-4'>
                    Você tem certeza de que deseja apagar a postagem a seguir?
                </p>

                <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-gradient-to-r from-blue-100 to-green-100'>
                    <header 
                        className='flex w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 items-center uppercase'>
                        Postagem
                    </header>
                    <div className="p-4">
                        <p className='text-xl h-full'>{postagem.titulo}</p>
                        <p>{postagem.texto}</p>
                    </div>
                    <div className="flex">
                        <button 
                            className='w-full text-white bg-green-500 
                    hover:bg-green-600 flex items-center justify-center py-2'
                            onClick={retornar}>
                            Não
                        </button>
                        <button 
                            className='text-white bg-blue-500 
                    hover:bg-blue-700 w-full flex items-center justify-center'
                            onClick={deletarPostagem}>
                            
                            {isLoading ?
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                /> :
                                <span>Sim</span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default DeletarPostagem