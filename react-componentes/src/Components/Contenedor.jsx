import { Aside } from "./Aside"
import { Footer } from "./Footer"
import { Post } from "./Post"
import { Principal } from "./Principal"

export const Contenedor = () => {
    return (
    <div className="container">
        <header class="header">
            Cristian
        </header> 
        <Principal/>
        <Aside/>
        <Post/>
        <Footer/>
    </div>

    )
}

