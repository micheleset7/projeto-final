import Menu from '../Component/Menu'
import Footer from '../Component/Footer'
import '../Styles/Pages/tecnologia.css'

const Tecnologia = () => {
    return (
        <div>
            <Menu/>
            
            <div className='div_tech'>
                <h1 className='h1_tech'>Tecnologia Sustentável</h1>
            </div>
            <div className='div_banner_tech'>
                
                <div className='conteudo_tech'>
                    <h2 className='h2_tech'>As vantagens da tecnoliogia na eletricidade</h2>
                    <p className='p_tech'> Todavia a Tecnologia de Informação trouxe novas necessidades que precisam ser levadas a termo, já que os recursos de computação em sua maioria agridem ao homem e ao meio ambiente. Um dos fatores mais vistos pelas empresas e sociedade é o aumento no consumo de energia elétrica; quanto mais recursos de computação são utilizados mais energia é gasta, e logo, mais produção de energia é necessária e os meios de produção de energia elétrica mais utilizados agridem muito o meio ambiente. Outro fator importante é que não basta somente usar recursos de TI é necessários fazer um gerenciamento do uso desses recursos. Além disso, acima do gerenciamento dos recursos está a produção destes recursos. Em sua maioria, a produção de recursos de TI não é nada saudável para o ser humano e o meio ambiente, pois os recursos (insumos) para fabricação causam muito agressão ao meio assim como os componentes dos produtos em si. Logo os recursos de TI além de trazerem benefícios acarretam algumas desvantagens.</p>
                    <p className='p_tech'>“TI Verde” não se limita apenas à fabricação de equipamentos ecologicamente corretos. Iniciativas como placas de energia solar para converter energia solar em eletricidade e levar energia elétrica para os vilarejos mais distantes sem custo para o consumidor; planos de racionalização de energia, incluindo substituição da iluminação de mercúrio por lâmpadas de sódio que são mais eficientes, substituição de monitores convencionais pelos de LCD, substituição de computadores mais modernos e com menor consumo, redução da utilização e redimensionamento de condicionadores de ar, consolidação de impressoras e de Data Centers, também são algumas medidas sustentáveis. Com esse panorama, fica evidenciado que a sustentabilidade já faz parte dos planos de muitos empresários, pois a “TI Verde” tem conquistado avanços importantes por parte dos empreendedores e da sociedade em geral, que passa a ver a empresa a qual utiliza os mais variados produtos, como uma entidade preocupada com as questões ambientais e que faz a sua parte por um mundo melhor.</p>
                    <p className='p_tech'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil dicta aspernatur quidem suscipit vel officia molestiae maiores voluptatum fugit voluptate quasi aliquid incidunt ea, repellendus excepturi magnam vero adipisci.</p>
                </div>
                <img className='img_tech' src="" alt="" />
            </div>
            <Footer/>
        </div>
    )
}
export default Tecnologia