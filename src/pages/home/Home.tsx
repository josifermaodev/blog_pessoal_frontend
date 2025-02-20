import ListaPostagens from "../../components/postagem/listapostagem/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-blue-500 to-green-500">
                <div className="container grid grid-cols-2 text-white md:max-lg:grid-cols-1">
                    <div className="flex flex-col items-center justify-center gap-4 py-4">
                        <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                        <p className="text-xl">
                            Expresse aqui seus pensamentos e
                            opiniões
                        </p>
                        <div className="flex justify-around gap-4">
                            <div className="rounded border-white border-solid border-2 py-2 px-4 text-white hover:text-blue-950 hover:border-blue-950">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>
    
                    <div className="flex justify-center">
                        <img
                            className="w-2/3 md:max-lg:w-2/4"
                            src="https://ik.imagekit.io/q5tv5x3k8/blog%20pessoal/blog-post-animate.svg?updatedAt=1739543770537"
                            alt="Imagem da Página Home"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}
 
export default Home