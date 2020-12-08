import { Link } from 'react-router-dom'
import '../Styles/Component/menu.css'

const Menu = () => {

    return (
        <div className="menu_home">

            <ul className='ul_menu'>
                
                <li className='li_menu'>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li className='li_menu'>
                    <Link className="link" to="/dicas">Uso Sustentável</Link>
                </li>
                <li className='li_menu'>
                    <Link className="link" to="/energia">Energia Renovável</Link>
                </li>
                <li className='li_menu'>
                    <Link className="link" to="/tecnologia">Tecnologia</Link>
                </li>

            </ul>
        </div>
    )

}

export default Menu