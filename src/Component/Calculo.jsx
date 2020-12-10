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
                <div className='div_input'>

                    <div className='div_nome'>
                        <p className='p_nome'>Qtd de equipamentos </p> <input className='input_calculo'
                            type="number"
                            onChange={e => setQtd(e.target.value)}
                        />
                    </div>
                    <div className='div_nome'>
                        <p className='p_nome'>Potência em W </p><input className='input_calculo'
                            type="number"
                            onChange={e => setPotencia(e.target.value)}
                        />
                    </div>
                    <div className='div_nome'>
                        <p className='p_nome'>Números de dias </p> <input className='input_calculo'
                            type="number"
                            onChange={e => setIDias(e.target.value)}
                        />
                    </div>
                    <div className='div_nome'>

                        <p className='p_nome'>Números de horas</p> <input className='input_calculo'
                            type="number"
                            onChange={e => setHora(e.target.value)}
                        />
                    </div>
                    <h3 className='h3_calculo'> Resultado:  <p className='p_resultado'>  {(parseInt(qtd) * parseInt(dia) * parseInt(hora) * parseInt(potencia) / 1000)} /Kwh</p></h3>
                </div>

            </div>
        </div>
    )
}

export default Calculo