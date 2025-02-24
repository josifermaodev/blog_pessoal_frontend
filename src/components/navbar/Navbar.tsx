import { ReactNode, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { Menu, X } from "lucide-react"; // Ícones do Lucide para o menu

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [menuAberto, setMenuAberto] = useState(false);

    function logout() {
        handleLogout();
        ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
        navigate("/");
    }

    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <div className="w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 text-white h-15">
                <div className="container flex justify-between items-center p-4">
                    {/* Logo */}
                    <Link to="/home" className="font-bold hover:text-blue-950 font-dancing text-3xl">
                        Blog Pessoal
                    </Link>

                    {/* Botão do menu-hambúrguer (somente visível em telas pequenas) */}
                    <button 
                        onClick={() => setMenuAberto(!menuAberto)} 
                        className="md:hidden text-white focus:outline-none"
                        aria-label="Abrir menu"
                    >
                        {menuAberto ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Menu de navegação */}
                    <div
                        className={`absolute md:static top-16 right-0 ${
                            menuAberto ? "bg-gradient-to-r from-blue-500 to-green-500" : "bg-blue-500 md:bg-transparent"
                        } w-full md:w-auto flex flex-col md:flex-row md:gap-5 items-center text-lg font-bold transition-all duration-300 ${
                            menuAberto ? "flex" : "hidden md:flex"
                        }`}
                    >
                        <Link
                            to="/postagens"
                            className="py-2 px-4 md:p-0 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-950"
                        >
                            Postagens
                        </Link>
                        <Link
                            to="/temas"
                            className="py-2 px-4 md:p-0 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-950"
                        >
                            Temas
                        </Link>
                        <Link
                            to="/cadastrartema"
                            className="py-2 px-4 md:p-0 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-950"
                        >
                            Cadastrar tema
                        </Link>
                        <Link
                            to="/perfil"
                            className="py-2 px-4 md:p-0 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-950"
                        >
                            Perfil
                        </Link>
                        <Link
                            to=""
                            onClick={logout}
                            className="py-2 px-4 md:p-0 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-950 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-950"
                        >
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return <>{component}</>;
}

export default Navbar;


