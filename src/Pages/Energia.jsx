import Menu from '../Component/Menu'
import Footer from '../Component/Footer'
import '../Styles/Pages/energia.css'

const Energia = () => {
    return (
        <div className='div_principal'>
            <Menu />

            <div className='titulo-energia'>
                <h1> Energia Sustentável</h1>
            </div>
            <div className='div_tipos'>
                <h2 className='div_h2'>Principais Tipos de Energia Sustentável</h2>
                <p className='p_energia'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores animi, aspernatur consectetur fugit modi veniam eos perspiciatis, a repellat quidem excepturi amet nihil deserunt quaerat porro labore vero. Magni!</p>
                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Solar</h3>
                    <div className='div_conteudo'>
                        <img className='img_energia' src="https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_960_720.jpg" alt="solar" />
                        <p className='p_energia'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsa quasi voluptate at quisquam dolorum nesciunt beatae similique cumque dolor corrupti nulla atque eveniet tempore voluptates sed, nobis, autem hic.</p>
                    </div>
                </div>
                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Hidrelétrica</h3>
                    <div className='div_conteudo'>
                        <img className='img_energia' src="https://cdn.pixabay.com/photo/2018/05/30/23/29/electricity-3442835_960_720.jpg" alt="hidreletrica" />
                        <p className='p_energia'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolores laudantium labore vero culpa aliquam eligendi omnis, minus suscipit porro consectetur inventore nulla voluptatum, voluptates molestias libero totam cupiditate excepturi?</p>
                    </div>
                </div>
                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Eolica</h3>
                    <div className='div_conteudo'>
                        <img className='img_energia' src="https://cdn.pixabay.com/photo/2019/10/15/06/03/pinwheel-4550711_960_720.jpg" alt="eolica" />
                        <p className='p_energia'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus, optio sapiente dolore ratione quae quas accusantium ipsum quibusdam sit, voluptas minima cumque omnis itaque veniam qui esse magnam? Pariatur?</p>
                    </div>
                </div>
                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Termoelétrica</h3>
                    <div className='div_conteudo'>
                        <img className='img_energia' src="https://cdn.pixabay.com/photo/2019/07/19/23/16/power-plant-4349830_960_720.jpg" alt="termoeletrica" />
                        <p className='p_energia'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem consequuntur enim incidunt ea, obcaecati alias atque hic, temporibus, praesentium odit repellendus reprehenderit accusantium. A ipsum accusantium enim nulla mollitia alias?</p>
                    </div>
                </div>
                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Maremotriz</h3>
                    <div className='div_conteudo'>
                        <img className='img_energia' src="https://paineira.usp.br/bios/wp-content/uploads/2018/05/Usina-Pec%C3%A9m.jpg" alt="maremotriz" />
                        <p className='p_energia'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum tempore dolores cupiditate inventore modi autem quae eaque, obcaecati quos? Libero id modi dignissimos. Vero voluptate explicabo molestiae porro doloribus!</p>
                    </div>
                </div>

            </div>
            {/* <footer className='footer'>
                <p>Copyright 2020 by Michele Coelho | Reprograma</p>
                <ul className='ul_footer'>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                    <li>GitHub</li>
                </ul>
            </footer> */}
            <Footer />

        </div>
    )
}
export default Energia