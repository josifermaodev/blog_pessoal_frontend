import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import { PencilLine, TrashSimple } from '@phosphor-icons/react'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagens({ postagem }: CardPostagensProps) {
    return (
        <div className='drop-shadow-lg flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 items-center gap-4">
                    <img
                        src={postagem.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 bg-gradient-to-r from-blue-100 to-green-100'>
                    <h4 className='text-lg font-semibold uppercase text-blue-950  relative  after:block after:h-0.5 after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:absolute after:left-0 after:bottom-0 '>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-white bg-green-500 
                    hover:bg-green-600 flex items-center justify-center py-2'>
                    <button><PencilLine size={20} /></button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} 
                    className='text-white bg-blue-500 
                    hover:bg-blue-700 w-full flex items-center justify-center'>
                    <button><TrashSimple size={20}/></button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagens