import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'
import { PencilLine, TrashSimple } from '@phosphor-icons/react'

interface  CardTemasProps{
    tema: Tema
}

function CardTemas ({ tema }: CardTemasProps){
    return (
        <div className='flex flex-col rounded-2xl overflow-hidden justify-between '>
            <header className='py-2 px-6 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-gradient-to-r from-blue-100 to-green-100 h-full'>{tema.descricao}</p>
            
            <div className="flex ">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-green-500 
                    hover:bg-green-600 
                    flex items-center justify-center py-2'>
                    <button><PencilLine size={20} /></button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} 
                    className='text-slate-100 bg-blue-500 
                    hover:bg-blue-700 w-full flex items-center justify-center'>
                    <button><TrashSimple size={20} /></button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas