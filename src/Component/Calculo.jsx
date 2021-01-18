import { useState } from 'react'
import('../Styles/Component/calculo.css')

const Calculo = () => {

    const [potencia, setPotencia] = useState('0')
    const [hora, setHora] = useState('0')
    const [dia, setIDias] = useState('0')
    const [qtd, setQtd] = useState('0')

    return (

        <div id="div_conteiner">

            <div className='div_card'>


                <h1 className='h1_calculo'>Calcular o consumo</h1>
                <h2 className='h2_calculo'>Faça o cálculo do consumo do seu aparelho elétrico!</h2>

                <form className='form'>

                    <label className='nome'>Qtd de equipamentos: </label>
                    <input className='input_calculo' type="number" onChange={e => setQtd(e.target.value)} />

                    <label className='nome'>Potência em W:</label>
                    <input className='input_calculo' type="number" onChange={e => setPotencia(e.target.value)} />

                    <label className='nome'>Números de dia/mês:  </label>
                    <input className='input_calculo' type="number" onChange={e => setIDias(e.target.value)} />

                    <label className='nome'>Números de hora/dia:</label>
                    <input className='input_calculo' type="number" onChange={e => setHora(e.target.value)} />

                </form>
                <div className='div_resultado'>
                    <h3 className='h3_calculo'> Resultado:</h3>
                   <div className='div_paragrafo_resultado'>
                   <p className='p_resultado'>  {(parseInt(qtd) * parseInt(dia) * parseInt(hora) * parseInt(potencia) / 1000)} KWh/mês</p>
                   </div>
                </div>


            </div>
        </div>
    )
}

export default Calculo