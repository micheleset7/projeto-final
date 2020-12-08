import React from 'react'
import '../Styles/Pages/home.css'
import Menu from '../Component/Menu'
import {Link} from 'react-router-dom'
import Footer from '../Component/Footer'

const Home = () => {
    return (
        <div id='conteiner_home'>

            <Menu />

            <div className='banner_home'>
                <h1 className='h1_home' >Informe Sustentável</h1>
            </div>
            <div className='apresentação'>
                <div className='div_saudação'>
                    <h2 className='h2_home'>Consumo Consciente de Energia Elétrica</h2>
                    <p className='p_home'>A Sustentabilidade vem se tornando meta consensual, expressa formalmente em termos globais. São exemplos os Objetivos do Milênio e Objetivos de Desenvolvimento Sustentável, apontando para conquistas tecnológicas e mudanças comportamentais. A ANEEL, seja como protagonista, parceira ou coadjuvante (considerado o conjunto de entes e agentes do setor eletro energético, da administração pública e da sociedade brasileira), tem viabilizado a preservação da condição ímpar do Brasil, que possui a matriz de energia elétrica mais sustentável dentre as principais economias do planeta, bem como aos expressivos resultados no combate ao desperdício de energia.</p>
                    <p className='p_home'>Utilize com eficiência a energia elétrica em sua casa e no seu trabalho. O desperdício sai caro para você e para o meio ambiente. Consumindo energia de forma consciente, você economiza na conta de luz e ainda ajuda na preservação das nossas reservas naturais.

Adote algumas mudanças, como substituir seus equipamentos ineficientes por outros mais novos e eficientes, sempre dando preferência aos que possuem o selo do Procel. Assim, você utiliza a energia elétrica de forma mais segura e econômica, sem abrir mão do seu conforto. Ficou em dúvida se o seu equipamento não é eficiente? O Simulador irá te ajudar!</p>
                </div>

                <img src="./" alt="" />
            </div>
            <div className='informe'>
                <div className='div_pag'>                    
                    <Link to='/dicas'><h3>Uso Sustentável</h3>
                    <img className='card_img' src="https://cdn.pixabay.com/photo/2018/01/05/07/16/person-3062271__340.jpg" alt="" />
                    <p className='p_home'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quas cupiditate maxime in eius ipsa veniam expedita, repudiandae corporis molestias facilis aut ex, delectus ducimus praesentium molestiae. Consequuntur, obcaecati eum?</p></Link>
                </div>
                
                <div className='div_pag'>                    
                    <Link to='/energia'><h3>Energia Renovável</h3>
                    <img className='card_img' src="https://cdn.pixabay.com/photo/2014/11/15/21/51/power-lines-532720_960_720.jpg" alt="energia" />
                    <p className='p_home'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita animi quidem accusamus officiis, quis totam tempore facere aperiam, tempora at, alias quia? Ullam natus beatae pariatur sapiente corrupti repudiandae?</p></Link>
                </div>

                <div className='div_pag'>      
                    <Link to='/tecnologia'><h3>Tecnologia</h3>
                    <img className='card_img' src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg" alt="tecnologia" />
                    <p className='p_home'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sunt quidem quas laudantium vero ex, magnam veniam aliquam, laborum voluptatum ab quod in est eaque accusantium necessitatibus impedit, quos explicabo.</p> </Link>
                </div>
            </div>
            <Footer/>           
        </div>
    )
}
export default Home