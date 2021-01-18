import { useState, useEffect } from 'react'
import '../Styles/Pages/energia.css'
import Menu from '../Component/Menu'
import Footer from '../Component/Footer'
import Dados from '../Dados/Dados'


const TipoEnergia = () => {
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        return setRepo(Dados)
    }, [])

    return (
        <div className='div_principal'>
            <Menu />

            <div className='titulo-energia'>
                <h1 className='h1_energia'> Energia Renovável</h1>
            </div>

            <div className='div_tipos'>

                <h2 className='h2'>Principais Tipos de Energia Renovável</h2>
                <p className='paragrafo'>Para sabermos quais os principais tipos de energias sustentavel existe, precisamos saber o que é energia renovável ou sustentável. Energia renovável é aquela que vem de recursos naturais que são naturalmente reabastecidos, como sol, vento, chuva, marés e energia geotérmica. É importante notar que nem todo recurso natural é renovável, por exemplo, o urânio, carvão e petróleo são retirados da natureza, porém existem em quantidade limitada. Dessa forma, o uso de recursos naturais contribui para uma redução maior da emissão de gases de efeito estufa.</p>
                <p className='paragrafo'>
                    O Brasil se destaca no mundo pela utilização cada vez maior de fontes renováveis. Atualmente, tem 83% de sua matriz elétrica originada de fontes renováveis, liderada pela hidrelétrica (63,8%), seguida de eólica (9,3%), biomassa e biogás (8,9%) e solar centralizada (1,4%). Confira a seguir alguns tipos de energias renováveis.</p>

                <div className="div">

                    {repo.map(item => {
                        return <li className='li_energia' key={item.id}>
                            <h3 className='h3_energia'> {item.nome}</h3>
                           <div className='conteudo_energia'>
                            <p className='p_energia'>{item.descricao}</p>
                            <div className='div_conteudo'>{item.video}</div>
                            </div>
                        </li>

                    })}

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default TipoEnergia

