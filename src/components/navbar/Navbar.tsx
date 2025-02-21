import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    
    function logout() {
        handleLogout();
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info');
        navigate("/");
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className='w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 text-white h-15'>

                <div className="container flex justify-between">
                    <Link to='/home' className="hover:text-blue-950 text-lg font-bold">Blog Pessoal</Link>

                    <div className='flex gap-5 items-center text-lg font-bold'>
                        <Link to='/postagens' className='relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1 hover:text-blue-950'>Postagens</Link>
                        <Link to='/temas' className='relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1 hover:text-blue-950'>Temas</Link>
                        <Link to='/cadastrartema' className='relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1 hover:text-blue-950'>Cadastrar tema</Link>
                        <Link to='/perfil' className='relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1 hover:text-blue-950'>Perfil</Link>
                        <Link to='' onClick={logout} className='relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1 hover:text-blue-950'>Sair</Link>
                    </div>
                </div>
            </div>

        )

    }

    return (
        <>
            { component }
        </>
    )
    
}

export default Navbar

