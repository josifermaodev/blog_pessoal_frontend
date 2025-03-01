import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"


function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className="flex justify-center w-full bg-gradient-to-r from-blue-500 to-green-500 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-lg font-bold">Blog Pessoal Josiane | Copyright: {data}</p>
                    <p className="text-lg">Acesse minhas redes sociais</p>
                    <div className="flex gap-4 pt-1">
                        <a className="hover:text-blue-950" href="https://www.linkedin.com/in/josiane-fermao/" target="_blank"><LinkedinLogo size={48} weight='regular' /></a>
                        <a className="hover:text-blue-950" href="https://github.com/josifermaodev" target="_blank"><GithubLogo size={48} weight='regular' /></a>
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

export default Footer
