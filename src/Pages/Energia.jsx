import Menu from '../Component/Menu'
import Footer from '../Component/Footer'
import '../Styles/Pages/energia.css'

const Energia = () => {
    return (
        <div className='div_principal'>
            <Menu />

            <div className='titulo-energia'>
                <h1 className='h1_energia'> Energia Renovável</h1>
            </div>
            <div className='div_tipos'>
                <h2 className='div_h2'>Principais Tipos de Energia Renovável</h2>
                <p className='p_energia'>Para sabermos quais os principais tipos de energias sustentavel existe, precisamos saber o que é energia renovável ou sustentável. Energia renovável é aquela que vem de recursos naturais que são naturalmente reabastecidos, como sol, vento, chuva, marés e energia geotérmica. É importante notar que nem todo recurso natural é renovável, por exemplo, o urânio, carvão e petróleo são retirados da natureza, porém existem em quantidade limitada. Dessa forma, o uso de recursos naturais contribui para uma redução maior da emissão de gases de efeito estufa.
</p>
                <p className='p_energia'>
                    O Brasil se destaca no mundo pela utilização cada vez maior de fontes renováveis. Atualmente, tem 83% de sua matriz elétrica originada de fontes renováveis, liderada pela hidrelétrica (63,8%), seguida de eólica (9,3%), biomassa e biogás (8,9%) e solar centralizada (1,4%). Confira a seguir alguns tipos de energias renováveis.</p>




                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Solar</h3>
                    <div className='div_conteudo'>
                        <iframe className='img_energia' src="https://www.youtube.com/embed/JTqz_xzozl0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <p className='p_energia'>Energia solar corresponde à energia proveniente da luz emitido pelo Sol. Essa fonte de energia pode ser aproveitada de forma fotovoltaica, gerando energia elétrica. Por ser considerada uma fonte de energia limpa, a energia solar é uma das fontes alternativas mais promissoras para obtenção energética. Sua captação pode ser feita por meio da tecnologia dos painéis fotovoltaicos. Basicamente, ao ser captada, a luz solar é convertida em energia. Nos painéis fotovoltaicos, a luz solar é convertida em energia elétrica.</p>
                    </div>
                </div>
                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Hidrelétrica</h3>
                    <div className='div_conteudo'>
                        <iframe className='img_energia' src="https://www.youtube.com/embed/oNVAblc9Mx4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className='p_energia'>A  energia hidrelétrica é a obtenção de energia elétrica através do aproveitamento do potencial hidráulico de um rio. Para que esse processo seja realizado é necessária a construção de usinas em rios que possuam elevado volume de água e que apresentem desníveis em seu curso. A força da água em movimento é conhecida como energia potencial, essa água passa por tubulações da usina com muita força e velocidade, realizando a movimentação das turbinas. Nesse processo, ocorre a transformação de energia potencial (energia da água) em energia mecânica (movimento das turbinas). As turbinas em movimento estão conectadas a um gerador, que é responsável pela transformação da energia mecânica em energia elétrica.</p>
                    </div>
                </div>
                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Eolica</h3>
                    <div className='div_conteudo'>
                        <iframe className='img_energia' src="https://www.youtube.com/embed/6Fc3V0-ZA7k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <p className='p_energia'>A energia eólica é a transformação da energia do vento em energia útil, é uma forma de obter energia renovável, limpa, que não produz poluentes. A forma de produção é através da energia do vento (energia cinética) é posteriomente transformada em energia elétrica por um equipamento chamado turbina eólica (ou aerogerador), os quais incluem hélices que se movimentam com a velocidade do vento. A energia eólica é renovável, estando permanentemente disponível em qualquer região no Mundo</p>
                    </div>
                </div>
                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Termoelétrica</h3>
                    <div className='div_conteudo'>
                        <iframe className='img_energia' src="https://www.youtube.com/embed/TTjEib9lU0c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className='p_energia'>As usinas termoelétricas constituem a principal forma de produção de eletricidade no mundo atualmente, representando cerca de 70% da produção mundial.  No Brasil, onde o uso é predominantemente de usinas hidroelétricas, as termoelétricas atuam para abastecer as indústrias e também como fontes de reserva em casos de crise energética. Energia termoelétrica é  produzida por uma central cujo funcionamento ocorre a partir da geração de calor resultante da queima de combustíveis sólidos, líquidos ou gasosos. Os principais combustíveis utilizados nas usinas termoelétricas são o carvão mineral, a nafta, o petróleo, o gás natural e, em alguns casos, a biomassa. O funcionamento de uma usina termoelétrica – também chamada de usina térmica – ocorre da seguinte forma: a queima do combustível propicia o aquecimento de água armazenada no reservatório, o que forma um vapor, que, por sua vez, é direcionado para as turbinas do gerador responsável pela produção de eletricidade. Em geral, as fontes de energia utilizadas pelas termoelétricas não são renováveis, sendo a maioria de origem fóssil, o que eleva a preocupação sobre a disponibilidade desses recursos a médio e longo prazo.</p>
                    </div>
                </div>
                <div className='tipo_energia'>
                    <h3 className='h3_energia'>Maremotriz</h3>
                    <div className='div_conteudo'>
                        <iframe className='img_energia' src="https://www.youtube.com/embed/7qKHXt-fX5o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className='p_energia'>É obtida por meio do aproveitamento da energia do desnível das marés. Para que essa energia seja revertida em eletricidade é necessária a construção de barragens, eclusas (permitindo a entrada e saída de água) e unidades geradoras de energia. O sistema utilizado é semelhante ao de uma usina hidrelétrica. As barragens são construídas próximas ao mar, e os diques são responsáveis pela captação de água durante a alta da maré. A água é armazenada e, em seguida, é liberada durante a baixa da maré, passando por uma turbina que gera energia elétrica.</p>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}
export default Energia