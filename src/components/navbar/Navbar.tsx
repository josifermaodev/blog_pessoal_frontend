import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {

    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext);
    
    function logout() {
        handleLogout();
        alert("Usuario deslogado com sucesso");
        navigate("/");
    }

    return (
        <>
            <div className=" flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 text-white h-15">
                <div className="container flex justify-between">
                    <div>
                        <Link to='/home' className="hover:text-blue-950 text-lg font-bold">
                            Blog Pessoal
                        </Link>
                    </div>
                    <div>
                        <nav>
                            <ul className="flex gap-5 items-center text-lg font-bold">
                                <li className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1"><a className="hover:text-blue-950" href="#">Postagens</a></li>
                                <li className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1"><a className="hover:text-blue-950" href="#">Temas</a></li>
                                <li className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1"><a className="hover:text-blue-950" href="#">Cadastrar tema</a></li>
                                <li className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1"><a className="hover:text-blue-950" href="#">Perfil</a></li>
                                <li className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full pb-1">
                                    <Link to="" onClick={logout} className="hover:text-blue-950">Sair</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Navbar