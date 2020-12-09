import '../Styles/Component/footer.css'
import { MdCopyright } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (

        <footer className='footer-'>
            <p className='p_footer'><MdCopyright /> Copyright 2020 by Michele Coelho | Reprograma</p>
            <ul className='ul_footer'>
                <a target='_blank' href="https://www.linkedin.com/in/michele-coelho-5017aa79/"><li className='li_footer'><AiFillLinkedin /></li></a>
                <a target='_blank' href="https://www.instagram.com/michellecoelho7/"><li className='li_footer'><AiFillInstagram /></li></a>
                <a target='_blank' href="https://github.com/micheleset7"><li className='li_footer'><VscGithub /></li></a>
            </ul>
        </footer>
    )

}
export default Footer