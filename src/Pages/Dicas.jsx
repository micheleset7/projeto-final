import '../Styles/Pages/dicas.css'
import Menu from '../Component/Menu'
import Calculo from '../Component/Calculo'
import Footer from '../Component/Footer'

const Dicas = () => {
    return (
        <div>
            <Menu />
            <div className='titulo'>
                <h1 className='h1_dicas'>Uso Sustentável</h1>
            </div>
            <div>
                <div className='div_dicas'>
                    <h2 className='h2_dicas'>Dicas de Econômia</h2>
                    <p className='p_dicas'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse enim fuga explicabo amet dolor vitae. Corporis, ut! Impedit architecto eos quia facere vel et totam eum eveniet. Perspiciatis, assumenda?</p>
                    <h4>Ar-condicionado ou ventilador?</h4>
                    <p className='p_dicas'>
                        Embora seja importante para o bem estar em muitos estados brasileiros, o ar-condicionado é o grande responsável pelo alto uso da energia elétrica nas residências e escritórios durante o verão. De acordo com o Centro Brasileiro de Informação de Eficiência Energética – Procel Info, o consumo médio de um ar-condicionado é, pelo menos, 10 vezes maior do que o de um ventilador de mesa ou de teto. Portanto, se a intenção é economizar no consumo de energia, prefira o ventilador sempre que possível.

                        Nas cidades em que a madrugada e o início da manhã são mais frescos, aproveite para desligar o ar-condicionado nesses horários e abrir as janelas. Se o mosquito for um problema, avalie bloquear a entrada deles com recursos como a tela mosquiteira. Alguns outros cuidados com relação à climatização:

                        Instale o ar-condicionado em local com boa circulação de ar.
                        Com o ar-condicionado ligado, feche portas e janelas para evitar a entrada do ar quente.
                        Limpe sempre os filtros, pois a sujeira força o aparelho a trabalhar mais.
Vai sair do ambiente? Desligue todos os aparelhos elétricos, incluindo o ar-condicionado.</p>

                    <h4 className='h4_dicas'>Banhos curtos e refrescantes</h4>
                    <p className='p_dicas'>
                        Para reduzir o consumo, o ideal é tomar banhos curtos, de 10 minutos no máximo, pois o chuveiro elétrico é um dos aparelhos que mais demanda energia. E quanto mais frio, melhor – para espantar o calor e o aumento do consumo. O chuveiro na posição Verão, por exemplo, usa 30% menos energia que na posição Inverno. Veja outras dicas:

                        Limpe os buracos por onde a água sai, para aumentar a vazão.
                        A resistência queimou? Troque! Fazer remendos, além de ser perigoso, desperdiça energia.
Desligue a torneira enquanto se ensaboa. Assim você economiza energia elétrica e água.</p>

                    <h4 className='h4_dicas'>Pense antes de abrir a geladeira</h4>
                    <p className='p_dicas'>
                        Sabe aquele hábito de abrir a geladeira para pegar um ar fresco e depois pensar no que vai pegar lá dentro? Para economizar, corte-o já! Cada vez que se abre a geladeira, o ar frio escapa e o motor trabalha mais para esfriá-la de novo. Abra a geladeira somente quando necessário e retire de uma só vez todos os alimentos que for usar. Veja outras dicas:

                        Mantenha em boas condições a borracha de vedação da porta da geladeira. Faça o teste do papel: prenda uma folha na porta. Se ela sair com facilidade, ao ser puxada, é sinal de que a borracha precisa ser trocada.
                        Não guarde alimentos quentes na geladeira.
                        Não forre as prateleiras da geladeira nem ponha prateleiras de vidro, de plástico ou de outros materiais. Isso consome mais energia elétrica.
                        Instale a geladeira em local bem ventilado, longe de paredes, de raios solares e de fontes de calor, como fogões e estufas.
                        Nunca utilize a parte traseira da geladeira para secar panos ou roupas.
Degele e limpe a geladeira conforme as indicações do manual, pois o gelo acumulado faz o motor trabalhar mais.</p>

                    <h4 className='h4_dicas'>Vai viajar? Desligue a chave geral</h4>

                    <p className='p_dicas'>
                        Em caso de férias ou de viagens prolongadas, o ideal é esvaziar a geladeira e desligar o fornecimento de energia elétrica na chave geral. Assim, você não gasta nem com as luzes dos aparelhos em standy by, como televisão, rádio e forno de micro-ondas. Veja outras dicas:

                        Aposente as extensões e benjamins! Ligar vários aparelhos elétricos na mesma tomada é perigoso e desperdiça energia.
                        Evite usar aparelhos elétricos no horário de pico de consumo, ou seja, no início da noite, de segunda a sexta-feira. Durante o verão, o início da tarde é outro momento de pico devido ao calor e ao uso do ar-condicionado.
                        Durante o dia, prefira iluminar sua casa apenas com luz natural. Fazendo isso, você usa menos energia elétrica e economiza na conta.
                        Ao usar a lavadora de roupas, aproveite para lavar o máximo de peças possível e coloque somente a quantidade de sabão recomendada no manual, para não enxaguar mais vezes.
Ao usar o ferro, tente passar o máximo de roupas possível e utilize a temperatura indicada para cada tipo de tecido. Ele consome muita energia elétrica cada vez que é ligado.</p>
                </div>
                <img src="" alt="" />
                <Calculo />
            </div>
            <Footer />

        </div>
    )
}
export default Dicas