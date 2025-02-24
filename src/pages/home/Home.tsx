import ListaPostagens from "../../components/postagem/listapostagem/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-blue-500 to-green-500">
                <div className="container grid grid-cols-1 md:grid-cols-2 text-white items-center px-4 py-8 gap-8">
                    {/* Texto de boas-vindas */}
                    <div className="flex flex-col items-center text-center md:text-left gap-4 ">
                        <h2 className="text-4xl md:text-5xl font-bold font-dancing">Seja Bem Vinde!</h2>
                        <p className="text-lg md:text-xl text-center">
                            Expresse aqui seus pensamentos e opiniões
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <div className="rounded border-white border-2 py-2 px-4 text-white hover:text-blue-950 hover:border-blue-950">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className="flex justify-center">
                        <img
                            className="w-3/4 md:w-2/3 lg:w-1/2 max-w-[300px] md:max-w-none"
                            src="https://ik.imagekit.io/q5tv5x3k8/blog%20pessoal/coding%20tech.svg?updatedAt=1740404198790"
                            alt="Imagem da Página Home"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;
