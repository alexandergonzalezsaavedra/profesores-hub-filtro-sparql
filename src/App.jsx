import React, { useState } from 'react'
import './App.css';
import Cargando from './assets/Cargando/Cargando';
import ServicioHub from './assets/Servicio/ServicioHub';
import Formulario from './components/Formulario/Formulario';
import Tarjetas from './components/Tarjetas/Tarjetas';

function App() {

    const [profesores, setProfesores] = useState([])
    const [filtroProfesor, setFiltroProfesor] = useState('')
    return (
        <>
            <ServicioHub
                setProfesores={setProfesores}
            />
            {
                (() => {
                    if (profesores.length <= 0) {
                        return (
                            <Cargando />
                        )
                    } else {
                        return (
                            <>
                                <Formulario
                                    setFiltroProfesor={setFiltroProfesor}
                                    profesores={profesores}
                                />
                                <Tarjetas
                                    filtroProfesor={filtroProfesor}
                                    profesores={profesores}
                                />
                            </>
                        )
                    }
                })()
            }
        </>
    );
}

export default App;