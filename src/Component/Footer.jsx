import '../Styles/Component/footer.css'
import { MdCopyright } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer=()=>{
    return(
        
            <footer className='footer-'>
                <p className='p_footer'><MdCopyright/> Copyright 2020 by Michele Coelho | Reprograma</p>
                <ul className='ul_footer'>
                    <li className='li_footer'><AiFillLinkedin/></li>
                    <li className='li_footer'><AiFillInstagram/></li>
                    <li className='li_footer'><VscGithub/></li>
                </ul>
            </footer>       
    )
    
}
export default Footer