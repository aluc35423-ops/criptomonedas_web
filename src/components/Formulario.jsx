import "../css/Formulario.css";
import { useState } from "react";

const Formulario = () => {
    // estado para mostrar o no el mensjae "Formulario creado"
    const [mensaje, setMensaje] = useState(false);

    // enviar formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        setMensaje(true); // hace visible el mensjae
    };

    return (
        <div>
            <form
                className="formulario"
                onSubmit={handleSubmit}>

                    {/* Selección de moneda */}
                <div className="campo">
                    <label htmlFor="" className="label">Moneda</label>
                    <select className="select">
                        <option value="">-- Seleccione --</option>
                        <option value="USD">Dólar USD</option>
                        <option value="MXN">Peso Mexicano MXN</option>
                        <option value="EUR">Euro EUR</option>
                        <option value="GBP">Libra Esterlina GBP</option>
                    </select>
                </div>

                {/* Seleccion criptomoneda */}
                <div className="campo">
                    <label htmlFor="" className="label">Criptomoneda</label>
                    <select className="select">
                        <option value="">Seleccione</option>
                    </select>
                </div>

                <button
                    className="btn-cotizar"
                    type="submit"
                >Cotizar</button>
            </form>
            {mensaje && <p>Formulario creado</p>}
        </div>
    );
}

export default Formulario;