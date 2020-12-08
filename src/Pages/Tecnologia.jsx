import Menu from '../Component/Menu'
import Footer from '../Component/Footer'
import '../Styles/Pages/tecnologia.css'

const Tecnologia = () => {
    return (
        <div>
            <Menu/>
            
            <div className='div_tech'>
                <h1>Tecnologia e a Energia</h1>
            </div>
            <div className='div_banner_tech'>
                
                <div className='conteudo_tech'>
                    <h2 className='h2_tech'>As vantagens da tecnoliogia na eletricidade</h2>
                    <p className='p_tech'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dicta consequuntur numquam, laborum mollitia sapiente blanditiis quasi sed adipisci! Rem doloremque natus laboriosam aliquid tempore perspiciatis totam, unde delectus aspernatur.</p>
                    <p className='p_tech'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio fugiat porro perspiciatis, veniam dolor eaque deleniti eos, voluptatibus aliquam libero saepe sed aliquid labore, id quos! Delectus totam et nisi!</p>
                    <p className='p_tech'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil dicta aspernatur quidem suscipit vel officia molestiae maiores voluptatum fugit voluptate quasi aliquid incidunt ea, repellendus excepturi magnam vero adipisci.</p>
                </div>
                <img className='img_tech' src="" alt="" />
            </div>
            {/* <footer className='footer'>
                <p>Copyright 2020 by Michele Coelho | Reprograma</p>
                <ul className='ul_footer'>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                    <li>GitHub</li>
                </ul>
            </footer> */}
            <Footer/>

        </div>
    )
}
export default Tecnologia