import React from 'react'
import '../Styles/Pages/home.css'
import Menu from '../Component/Menu'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'

const Home = () => {
    return (
         <div id='conteiner_home'>
       
             <Menu />
            
            <header className='banner_home'>
                <h1 className='h1_home' >Informe Sustentável</h1>
            </header>

            <section className='apresentação_home'>

                <h2 className='h2_home'>Consumo Consciente de Energia Elétrica</h2>

                <div className='div_informe'>

                        <div className='div_p_infor'>
                            <p className='p_home'>A Sustentabilidade vem se tornando meta, expressa formalmente em termos globais. São exemplos os Objetivos do Milênio e Objetivos de Desenvolvimento Sustentável, apontando para conquistas tecnológicas e mudanças comportamentais. O consumo consciente de energia elétrica é essencial para um desenvolvimento sustentável. É preciso, sempre que possível, reduzir o seu consumo. </p>
                            <p className='p_home'>A energia elétrica é de suma importância para o desenvolvimento econômico, social e a melhoria da qualidade de vida da população. Seu uso além de reduzir o consumo e as contas a serem pagas pelos consumidores, torna menos necessária a ampliação do sistema energético e, consequentemente, não se aumentam os impactos ambientais nem o dispêndio de recursos financeiros. Esse é apenas um dos diversos fatores ambientais e sociais pelos quais devemos adotar o consumo consciente  e acabar com o desperdício. Adote algumas mudanças. Assim, você utiliza a energia elétrica de forma mais segura e econômica, sem abrir mão do seu conforto.  Utilize com eficiência a energia elétrica, o desperdício sai caro para você e para o meio ambiente. Consumindo energia de forma consciente, você ajuda na preservação das nossas reservas naturais também.</p>
                        </div>

                        <div className='div_iframe'>
                            <iframe className='iframe' src="https://www.youtube.com/embed/ZocGUFfbrYM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='allowfullscreen2'></iframe>
                        </div>
                </div>
            </section>
            <section className='informe'>
                <div className='div_pag'>
                    <Link className='link_home' to='/dicas'><h3 className='h3_home'>Uso Sustentável</h3>
                        <img className='card_img' src="https://cdn.pixabay.com/photo/2018/01/05/07/16/person-3062271__340.jpg" alt="" />
                        <p className='p_home'>Utilize com eficiência a energia elétrica em sua casa e no seu trabalho. Ao usar este recurso de forma consciente, você está contribuindo para o planeta e para o seu bolso. Confira as dicas de uso sustentável clicando aqui. </p></Link>
                </div>

                <div className='div_pag'>
                    <Link className='link_home' to='/energia'><h3 className='h3_home'>Energia Renovável</h3>
                        <img className='card_img' src="https://sustentavel.com.br/wp-content/uploads/2019/10/Energia-sustent%C3%A1vel-2.jpg" alt="energia" />
                        <p className='p_home'>Energia obtida de fontes que regeneram-se espontaneamente ou através da intervenção adequada do homem. Saiba mais sobre os tipos de energia renovável clicando aqui.</p></Link>
                </div>

                <div className='div_pag'>
                    <Link className='link_home' to='/tecnologia'><h3 className='h3_home'>TI Sustentável</h3>
                        <img className='card_img' src="https://sites.google.com/site/tiverdeifsp/_/rsrc/1468862752515/home/News_693.jpg" alt="tecnologia" />
                        <p className='p_home'> Uma tendência mundial voltada para a redução do impacto dos recursos tecnológicos no meio ambiente. Saiba mais sobre essa tendência clicando aqui.</p> </Link>
                </div>
            </section>
          
            <Footer />
       </div>

    )
}
export default Home