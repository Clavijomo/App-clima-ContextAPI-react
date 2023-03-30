import {useContext} from 'react'
import ClimaContext from '../context/ClimaProvider'

const useClima = () => {
    return useContext(ClimaContext);
}

export default useClima;