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
                    <p className='p_dicas'>Reduzir o consumo de energia elétrica não contribui apenas para a preservação do meio ambiente, mas também para a redução de gastos e o controle das despesas em casa. É importante compreender que é papel de todos ajudar no combate ao desperdício de energia elétrica.  Quando mudamos algumas atitudes cotidianas em relação ao uso consciente, o consumo de energia reduz consideravelmente e ajudamos na preservação do meio ambiente, aumentando o tempo de vida dos recursos não-renováveis. Uma dica no geral é que quando for comprar qualquer tipo de eletrodomésticos, escolha sempre os que possuem o Selo Procel, ele indica aos consumidores que estes aparelhos consomem menos energia. A seguir veja algumas dicas de como economizar energia elétrica de forma sustentável, algumas atitudes já são bem conhecidas, mas é sempre bom reforçar.</p>

                    <h4 className='h4_dicas'>Lâmpadas</h4>
                    <p className='p_dicas'>Na iluminação artificial, as lâmpadas, o indicado é sempre optar pelas lâmpadas de led ou fluorescentes, além de uma iluminação muito mais eficaz, estes modelos geram um gasto muito menor quando comparadas as lâmpadas incandescentes. Evite deixe as luzes acessas sem necessidade, sendo assim, apague as luzes sempre que sair do local.</p>

                    <h4 className='h4_dicas'>Ar-condicionado ou ventilador?</h4>
                    <p className='p_dicas'>
                        Importante para o bem estar em muitos estados brasileiros, o ar-condicionado é o grande responsável pelo alto uso da energia elétrica nas residências e escritórios durante o verão. O consumo médio de um ar-condicionado é, pelo menos, 10 vezes maior do que o de um ventilador de mesa ou de teto. Se a intenção é economizar no consumo de energia, prefira o ventilador sempre que possível. Agora se optar pelo ar condicionado, então, sempre desligue o aparelho quando o ambiente não estiver ocupado. Quando estiver ligado, é primordial manter todas as janelas e portas fechadas para evitar a troca de temperatura. Limpe sempre os filtros, pois a sujeira força o aparelho a trabalhar mais. Nunca obstrua a saída de ar do aparelho e proteja a sua parte externa da incidência do sol. É importante observar as grades de ventilação, elas nunca devem estar bloqueadas.
                    </p>

                    <h4 className='h4_dicas'>Chuveiro elétrico</h4>
                    <p className='p_dicas'>
                        Para reduzir o consumo, o ideal é tomar banhos curtos, de 10 minutos no máximo, pois o chuveiro elétrico é um dos aparelhos que mais demanda energia. Ter atenção na  instalação correta do aparelho, não serve apenas para prevenir acidentes, que é muito importante, mas também para favorecer o gasto ideal. Sempre que possível, tome banhos com o chuveiro na posição verão ou até mesmo completamente desligado.  Jamais reaproveite uma resistência queimada, porque além de aumentar o consumo de energia, esta situação pode colocar em risco a segurança de quem usa este equipamento.</p>

                    <h4 className='h4_dicas'>Geladeira</h4>
                    <p className='p_dicas'>
                        O hábito de abrir a geladeira e pensar no que vai pegar lá dentro, gera grande desperdício de energia. Para economizar, corte-o ! Cada vez que se abre a geladeira, o ar frio escapa e o motor trabalha mais para esfriá-la de novo. Abra a geladeira somente quando necessário e retire de uma só vez todos os alimentos que for usar. Mantenha em boas condições a borracha de vedação da porta da geladeira. Faça o teste do papel: prenda uma folha na porta. Se ela sair com facilidade, ao ser puxada, é sinal de que a borracha precisa ser trocada. Não guarde alimentos quentes na geladeira. Não forre as prateleiras da geladeira, instale a geladeira em local bem ventilado, longe de paredes, de raios solares e de fontes de calor, como fogões e estufas. Nunca utilize a parte traseira da geladeira para secar panos ou roupas. Deslige e limpe a geladeira conforme as indicações do manual, pois o gelo acumulado faz o motor trabalhar mais.</p>

                    <h4 className='h4_dicas'>Máquina de lavar</h4>

                    <p className='p_dicas'>
                        Separe o dia para lavar roupa e utilize o máximo de roupas indicado pelo fabricante de uma só vez. As pessoas que lavam roupas em pequenas porções e várias vezes por semana certamente tem um gasto muito maior. Outra dica é limpar periodicamente o filtro da máquina e sempre que possível, aproveitar os dias ensolarados para secar as roupas naturalmente, as secadoras de roupa aumentam muito o consumo de energia</p>
                    <h4 className='h4_dicas'>Ferro de passar roupa</h4>

                    <p className='p_dicas'>Separe um dia para passar roupa, porque ligar o ferro de passar várias vezes por semana também servirá para aumentar o consumo elétrico. Caso seja necessário interromper o trabalho, mesmo que por pouco tempo, o mais indicado é desligá-lo completamente. Uma boa é proveite a temperatura elevada do ferro mesmo após desligar para passar as roupas mais leves, como por exemplo as lingeries.</p>

                </div>
        
                <Calculo />
                
                
            </div>
            <Footer />
        </div>
    )
}
export default Dicas