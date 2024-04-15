import React from 'react'
import './header.css'
import '../responsive/responsive.css'
import {Link} from 'react-router-dom';
import Logo from '../../assets/imgs/logo-ranchozero30.png';
import SocialMedia from '../socialmedia/socialmedia'


function Header() {
    return (
        <>
     <header>
     <img alt='logo' id='logo' src={Logo}/>
            <nav>
                <ul>
                    <Link className='routes' to='/'>
                    <li>Início</li>
                    </Link>

                    <Link to ='/contato'>
                    <li>Contato</li>
                    </Link>

                    <Link to ='/fotos'>
                    <li>Fotos</li>
                    </Link>

                </ul>
            </nav>
            
            <SocialMedia />
     </header>
        </>
    )
}

export default Header