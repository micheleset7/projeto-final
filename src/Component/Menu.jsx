import { Link } from 'react-router-dom'
import '../Styles/Component/menu.css'

const Menu = () => {

    return (
        <nav className="menu">

            <ul className='ul_menu'>

                <li className='li_menu'>
                    <Link className="link_menu" to="/">Home</Link>
                </li>
                <li className='li_menu'>
                    <Link className="link_menu" to="/dicas">Uso Sustentável</Link>
                </li>
                {/* <li className='li_menu'>
                    <Link className="link_menu" to="/energia">Energia Renovável</Link>
                </li> */}
                <li className='li_menu'>
                    <Link className="link_menu" to="/tipo">Energia Renovável</Link>
                </li>
                <li className='li_menu'>
                    <Link className="link_menu" to="/tecnologia">TI Sustentável</Link>
                </li>

            </ul>
        </nav>
    )

}

export default Menu