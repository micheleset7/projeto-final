import { Link } from 'react-router-dom'
import '../Styles/Component/menu.css'

const Menu = () => {

    return (
        <div className="menu">
            <ul className='ul_menu'>

                <li className='li_menu'>
                    <Link className="link" to="/"><strong>Home</strong></Link>
                </li>
                <li className='li_menu'>
                    <Link className="link" to="/dicas"><strong>Uso Sustentável</strong></Link>
                </li>
                <li className='li_menu'>
                    <Link className="link" to="/energia"><strong>Energia Renovável</strong></Link>
                </li>
                <li className='li_menu'>
                    <Link className="link" to="/tecnologia"><strong>TI Sustentável</strong></Link>
                </li>

            </ul>
        </div>
    )

}

export default Menu