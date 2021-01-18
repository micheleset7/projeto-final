import Menu from '../Component/Menu'
import Footer from '../Component/Footer'
import '../Styles/Pages/tecnologia.css'

const Tecnologia = () => {
    return (
        <div className="div_inicio">
            <Menu />

            <header className='cabecalho'>

                <h1 className='h1_cabecalho'>TI Sustentável</h1>
            </header>
            <main className='conteudo'>

                <section className='conteudo_tech'>

                    <h2 className='h2_tech'>A Sustentabilidade e a Tecnologia</h2>
                    <p className='p_tech'>Bem, a tecnologia sempre teve um papel dúbio, quando relacionada a sustentabilidade.
                    Isso porque, ao mesmo tempo em que seu avanço moderniza e melhora a qualidade de vida da sociedade, ela também contribui de maneira significativa com os problemas ambientais.
                    Um dos fatores mais vistos pelas empresas e sociedade é o aumento no consumo de energia elétrica; quanto mais recursos de computação são utilizados mais energia é gasta, e logo, mais produção de energia é necessária e os meios de produção de energia elétrica mais utilizados agridem muito o meio ambiente. Outro fator importante é que não basta somente usar recursos de TI é necessários fazer um gerenciamento do uso desses recursos. Além disso, acima do gerenciamento dos recursos está a produção destes recursos. Em sua maioria, a produção de recursos de TI não é nada saudável para o ser humano e o meio ambiente, pois os recursos (insumos) para fabricação causam muito agressão ao meio assim como os componentes dos produtos em si. Os recursos de TI além de trazerem benefícios acarretam algumas desvantagens.</p>
                    <p className='p_tech'>Além de trazerem benefícios acarretam algumas desvantagens.
                    Por isso, para reverter esse quadro, o setor de tecnologia estabeleceu uma série de práticas, intituladas da TI Verde. Seu objetivo é reduzir os malefícios da TI no meio ambiente.
                    E através da TI Verde o setor de tecnologia da informação tem demonstrado preocupação com o seu impacto no meio ambiente.
                    O termo “TI Verde”, muito discutido e presente em constantes campanhas publicitárias e mídias atuais, é uma junção dos conceitos de TI com sustentabilidade econômica e ecológica.</p>
                    <p className='p_tech'>Mas o que é a TI verde?
                    É o conjunto de práticas para tornar mais sustentável e menos prejudicial o uso de tecnologia, desta forma, ela propõe modos de compatibilizar o uso de recursos naturais de forma adequada às políticas sustentáveis existentes dentro das organizações. Como exemplos práticos de sua aplicação temos o uso de recursos tecnológicos que consumam menos energia, o uso de matéria prima e substâncias menos tóxicas em seus processos produtivos e o descarte responsável de seus produtos através da reciclagem e da reutilização de materiais. A TI Verde engloba, entre outros, o cumprimento da legislação ambiental e os diagnósticos dos aspectos e impactos ambientais de atividades relacionadas à área da Tecnologia da Informação, seguindo e desenvolvendo procedimentos e planos de ação com objetivos de eliminação ou diminuição da agressão ambiental.</p>
                    <p className='p_tech'></p>

                </section>
               
                    <div className='img'></div>
                    <div className='iframe_tech'>
                    <iframe  width="560" height="315" src="https://www.youtube.com/embed/00K4pnobsxs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='allowfullscreen'></iframe>
                    </div>

            </main>
            <Footer />
        </div>
    )
}
export default Tecnologia