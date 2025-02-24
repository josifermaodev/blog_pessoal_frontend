
import { useState, useContext, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Usuario from '../../models/Usuario';
import { buscar, atualizar } from '../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlerta } from '../../utils/ToastAlerta';

function AtualizarCadastro() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usuarioAtualizado, setUsuarioAtualizado] = useState<Usuario>({} as Usuario);

  useEffect(() => {
    if (token === '') {
      ToastAlerta("Você precisa estar logado!", "erro");
      navigate('/');
    } else {
      buscar(`/usuarios/${usuario.id}`, setUsuarioAtualizado, {
        headers: { Authorization: token },
      }).catch(error => {
        if (error.toString().includes('403')) {
          handleLogout();
        }
      });
    }
  }, [token, usuario.id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioAtualizado({
      ...usuarioAtualizado,
      [e.target.name]: e.target.value,
    });
  }

  async function atualizarUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await atualizar('/usuarios/atualizar', usuarioAtualizado, setUsuarioAtualizado, {
        headers: { Authorization: token },
      });
      ToastAlerta("Cadastro atualizado com sucesso!", "sucesso");
      navigate('/perfil');
    } catch (error: unknown) {
        const mensagemErro = error instanceof Error ? error.message : String(error);
      
        if (mensagemErro.includes('403')) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar cadastro!", "erro");
        }
      }
    setIsLoading(false);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      <div className="fundoCadastro hidden lg:block rounded-r-[100px]"></div>
      <form className="flex flex-col w-2/3 gap-3" onSubmit={atualizarUsuario}>
        <h2 className="text-slate-900 text-5xl">Atualizar Cadastro</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="border-2 border-slate-700 rounded-full p-2"
            value={usuarioAtualizado.nome}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            className="border-2 border-slate-700 rounded-full p-2"
            value={usuarioAtualizado.usuario}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha:</label>
          <input
            type="text"
            id="senha"
            name="senha"
            className="border-2 border-slate-700 rounded-full p-2"
            value={usuarioAtualizado.senha}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="foto">Foto:</label>
          <input
            type="text"
            id="foto"
            name="foto"
            className="border-2 border-slate-700 rounded-full p-2"
            value={usuarioAtualizado.foto}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex justify-around w-full gap-8">
          <button
            type="button"
            className="rounded-full text-white bg-black hover:bg-red-500 w-1/2 py-2 flex justify-center cursor-pointer"
            onClick={() => navigate('/perfil')}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-full text-white bg-black hover:bg-green-400 w-1/2 py-2 flex justify-center cursor-pointer"
          >
            {isLoading ? (
              <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
            ) : (
              <span>Atualizar</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AtualizarCadastro;

