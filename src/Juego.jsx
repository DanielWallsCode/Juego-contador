import React, { useEffect, useState } from 'react';


export const Juego = () => {


    const [cuentaRegresiva, setCuentaRegresiva] = useState(4);
    const [inicio, setInicio] = useState('');
    const [botonPermitido, setBotonPermitido] = useState(true);
    const [botonPermitidoIniciar, setBotonPermitidoIniciar] = useState(false);
    
    const [puntajeMax, setPuntajeMax] = useState(0);
    const [tiempo, setTiempo] = useState(6);
    const [mostarTiempo, setMostarTiempo] = useState(false)
    const [contador, setContador] = useState(0);


    const cuentaAtras = () => {
        setCuentaRegresiva(cuentaRegresiva-1);
    }

    useEffect(() => {
        if(cuentaRegresiva == 3){
            setInicio('Preparados');
            setContador(0)
            setTimeout(() => {
                setCuentaRegresiva(cuentaRegresiva-1)
                setBotonPermitidoIniciar(true)
            },1000)
        }else if(cuentaRegresiva == 2){
            setTimeout(() => {
                setInicio('Listos')
                setCuentaRegresiva(cuentaRegresiva-1)
            },1000)
        }else if(cuentaRegresiva ==1){
            setTimeout(() => {
                setInicio('Ya!!!')
                setCuentaRegresiva(cuentaRegresiva-1)
                setBotonPermitido(false)
                setMostarTiempo(true)
                setTiempo(tiempo - 1);
            },1000)
        }

        
    }, [cuentaRegresiva]);

    useEffect(() => {
        if(tiempo == 5){
            setTimeout(() => {
                setTiempo(tiempo - 1);
            },1000)
        }else if(tiempo == 4){
            setTimeout(() => {
                setTiempo(tiempo - 1);
            },1000)
        }else if(tiempo == 3){
            setTimeout(() => {
                setTiempo(tiempo - 1);
            },1000)
        }else if(tiempo == 2){
            setTimeout(() => {
                setTiempo(tiempo - 1);
            },1000)
        }else if(tiempo == 1){
            setTimeout(() => {
                setTiempo(tiempo - 1);
            },1000)
        }else if(tiempo == 0){
            setBotonPermitido(true)
            setBotonPermitidoIniciar(false)
            setMostarTiempo(false)
            setInicio('')

            setTimeout(() => {
                setTiempo(6)
                setCuentaRegresiva(4)
            },1000)
        }

        if(contador > puntajeMax){
            setPuntajeMax(contador)
        }
    
    }, [tiempo])


  return (
    <div>
        <h1 className='titulo'>Juego Contador</h1>
        <h2>{inicio}</h2>
        {mostarTiempo ? <h2>Tiempo Restante: {tiempo}</h2> : ''}
        <h1>Contador: {contador}</h1>
        <h3>Puntaje Maximo: {puntajeMax}</h3>
        <button onClick={cuentaAtras} disabled={botonPermitidoIniciar}>Iniciar Juego</button>
        <button 
        onClick={() => {
            setContador(contador+1)
        }}
        disabled={botonPermitido}
        >Clickear</button>
    </div>
  )
}
