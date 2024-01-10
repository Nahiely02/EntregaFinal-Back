import {useState} from "react";
import { Vortex } from 'react-loader-spinner';



const useLoading = () =>{
    const [loading, setLoading] =useState(true)

    const mostrarLoading = () => setLoading(true)

    const ocultarLoading = () => setLoading(false)

    const loadingScreen = 
    <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
            }}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
    
    

    return {loading, mostrarLoading, ocultarLoading, loadingScreen  }

}

export default useLoading;