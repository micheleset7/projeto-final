import { useState } from 'react'
import('../Styles/Component/calculo.css')

const Calculo = () => {

    const [potencia, setPotencia] = useState('0')
    const [hora, setHora] = useState('0')
    const [dia, setIDias] = useState('0')
    const [qtd, setQtd] = useState('0')
    // const [btn, setBtn] = useState('')

    // // const limparBtn = () => {
    // //     const botao = setBtn(hora)
    // //     if (botao != '') {
    // //         hora = ''
    // //         //  dia='',
    // //         //  qtd=''
    // //         //  potencia=''

    // //     }
    // // }

    return (

        <div id="div_conteiner">

            <div className='div_card'>

                <h1 className='h1_calculo'>
                    Calcular o consumo
            </h1>
                <h4 className='h4_calculo'>
                    Faça o cálculo do consumo do seu aparelho elétrico!
            </h4>
                <form className='form'>

                    <label className='nome'>
                       <p className='p_nome'> Qtd de equipamentos:</p>
                         <input className='input_calculo'
                            type="number"
                            onChange={e => setQtd(e.target.value)}
                        />
                    </label>
                    <label className='nome'>
                        <p className='p_nome'>Potência em W: </p>
                        <input className='input_calculo'
                            type="number"
                            onChange={e => setPotencia(e.target.value)}
                        />
                    </label>
                    <label className='nome'>
                        <p className='p_nome'>Números de dia/mês: </p>
                        <input className='input_calculo'
                            type="number"
                            onChange={e => setIDias(e.target.value)}
                        />
                    </label>
                    <label className='nome'>
                        <p className='p_nome'>Números de hora/dia: </p>
                        <input className='input_calculo'
                            type="number"
                            onChange={e => setHora(e.target.value)}
                        />
                    </label>
                    <div className='div_resultado'>
                         <h3 className='h3_calculo'> Resultado:  <p className='p_resultado'>  {(parseInt(qtd) * parseInt(dia) * parseInt(hora) * parseInt(potencia) / 1000)} KWh/mês</p></h3></div>
                    
                </form>

            </div>
        </div>
    )
}

export default Calculo