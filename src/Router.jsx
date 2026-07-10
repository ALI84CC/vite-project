import { Routes,Route} from 'react-router-dom'

import {Error404, Inicial, SobreNos } from './pages'
import { LayoutPadrao } from './Layouts'


const Router = () =>{
    return(
        <Routes>
           <Route path="/" element={<LayoutPadrao />} >
            <Route path="/" element={<Inicial />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="*" element={<Error404 />} />
           </Route> 
        </Routes>
    )
}

export {Router}