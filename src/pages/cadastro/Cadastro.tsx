import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { RotatingLines } from 'react-loader-spinner';

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate('/login');
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuario);
        alert('Usuário Cadastrado com sucesso!');
      } catch (error) {
        alert('Erro ao cadastrar o Usuário!');
      }
    } else {
      alert(
        'Dados do usuário estão inconsistentes! Verifique as informações e tente novamente.'
      );
      setUsuario({ ...usuario, senha: '' });
      setConfirmarSenha('');
    }

    setIsLoading(false);
  }

  console.log(JSON.stringify(usuario));
  console.log(confirmarSenha);
  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold"
      >
        <div className="fundoCadastro hidden lg:block"></div>
        <form
          className="flex justify-center items-center flex-col w-2/3 gap-3"
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded-full p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded-full p-2"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto:</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded-full p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded-full p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded-full p-2"
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button
              type="reset"
              className="
              rounded-full
            text-white
              border-solid
              border-5
              border-slate-500
              hover:-translate-y-1
              hover:scale-110
              transition
              delay-150
              duration-300
              ease-in-out
            bg-black 
            hover:bg-red-500
              w-1/2 
              py-2
              flex 
              justify-center
              cursor-pointer"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="
              rounded-full
            text-white
              border-solid
              border-5
              border-slate-500
              hover:-translate-y-1
              hover:scale-110
              transition
              delay-150
              duration-300
              ease-in-out
             bg-black 
             hover:bg-green-400
              w-1/2 
              py-2
              flex 
              justify-center
              cursor-pointer"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;