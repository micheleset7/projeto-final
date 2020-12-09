import React from 'react'
import '../Styles/Pages/home.css'
import Menu from '../Component/Menu'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'

const Home = () => {
    return (
          <div id='conteiner_home'>
                <Menu/>

            <div className='banner_home'>
                <h1 className='h1_home' >Informe Sustentável</h1>
            </div>
            <div className='apresentação'>
                <div className='div_saudação'>
                    <h2 className='h2_home'>Consumo Consciente de Energia Elétrica</h2>
                    <p className='p_home'>A Sustentabilidade vem se tornando meta consensual, expressa formalmente em termos globais. São exemplos os Objetivos do Milênio e Objetivos de Desenvolvimento Sustentável, apontando para conquistas tecnológicas e mudanças comportamentais.O consumo consciente de energia elétrica é essencial para um desenvolvimento sustentável. É preciso, sempre que possível, reduzir o consumo de energia elétrica. ... Esse é apenas um dos diversos fatores ambientais e sociais pelos quais devemos adotar o consumo consciente de energia elétrica e acabar com o desperdício., bem como aos expressivos resultados no combate ao desperdício de energia.</p>
                    <p className='p_home'>Utilize com eficiência a energia elétrica em sua casa e no seu trabalho. O desperdício sai caro para você e para o meio ambiente. Consumindo energia de forma consciente, você economiza na conta de luz e ainda ajuda na preservação das nossas reservas naturais. Adote algumas mudanças. Assim, você utiliza a energia elétrica de forma mais segura e econômica, sem abrir mão do seu conforto.</p>
                </div>

                {/* <img src="./" alt="" /> */}
            </div>
            <div className='informe'>
                <div className='div_pag'>
                    <Link className='link_home' to='/dicas'><h3 className='h3_home'>Uso Sustentável</h3>
                        <img className='card_img' src="https://cdn.pixabay.com/photo/2018/01/05/07/16/person-3062271__340.jpg" alt="" />
                        <p className='p_home'>Utilize com eficiência a energia elétrica em sua casa e no seu trabalho. Ao usar este recurso de forma consciente, você está contribuindo para o planeta e para o seu bolso. Confira as dicas de uso sustentável aqui. </p></Link>
                </div>

                <div className='div_pag'>
                    <Link className='link_home' to='/energia'><h3 className='h3_home'>Energia Renovável</h3>
                        <img className='card_img' src="https://sustentavel.com.br/wp-content/uploads/2019/10/Energia-sustent%C3%A1vel-2.jpg" alt="energia" />
                        <p className='p_home'>Energia obtida de fontes que regeneram-se espontaneamente ou através da intervenção adequada do homem.Saiba mais sobre os tipos de energia renovável aqui.</p></Link>
                </div>

                <div className='div_pag'>
                    <Link className='link_home' to='/tecnologia'><h3 className='h3_home'>TI Verde</h3>
                        <img className='card_img' src="https://sites.google.com/site/tiverdeifsp/_/rsrc/1468862752515/home/News_693.jpg" alt="tecnologia" />
                        <p className='p_home'> Uma tendência mundial voltada para a redução do impacto dos recursos tecnológicos no meio ambiente. Saiba mais sobre essa tendência aqui.</p> </Link>
                </div>
            </div>
            <Footer />
        </div>
       
    )
}
export default Home