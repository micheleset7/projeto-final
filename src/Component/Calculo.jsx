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

                <h1 className='h1_calculo'>
                    Calcular o consumo
            </h1>
                <h4 className='h4_calculo'>
                    Faça o cálculo do consumo do seu aparelho elétrico!
            </h4>
                <div className='div_input'>
                    <input className='input_calculo'
                        type="number"
                        placeholder="Qtd equipamentos"
                        onChange={e => setQtd(e.target.value)}
                    />
                    <input className='input_calculo'
                        type="number"
                        placeholder="Potência em (W)"
                        onChange={e => setPotencia(e.target.value)}
                    />
                    <input className='input_calculo'
                        type="number"
                        placeholder="Nº de dias"
                        onChange={e => setIDias(e.target.value)}
                    />
                    <input className='input_calculo'
                        type="number"
                        placeholder="Nº de horas"
                        onChange={e => setHora(e.target.value)}
                    />
                    <h3 className='h3_calculo'> Resultado:  <p className='p_resultado'>  {(parseInt(qtd) * parseInt(dia) * parseInt(hora) * parseInt(potencia) / 1000)} /Kwh</p></h3>
                </div>

            </div>
            {/* <img className='img_calculo' src="../Img/undraw_Calculator_0evy.svg"  alt="icones"/> */}
        </div>
    )
}

export default Calculo