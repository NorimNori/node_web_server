import { envs } from './config/evn.js'
import { startServer } from './server/server.js'

//Se define primero la funcion y luego se hace la autoconvocacion .

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUCBLIC_PATH 
    })
}

// Funcion agnostica(anonima:no tiene nombre) autocovocada(es ejecutada con los parentesis finales)
(async() => {
    main()
})()
