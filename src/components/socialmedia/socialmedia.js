import React from 'react'
import './socialmedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function SocialMedia(){
    return(
        <div className='social-media'>
            <a href='https://www.instagram.com/finoconfeito.gramado/' className='icon icon--instagram' target='blank'>
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='https://contate.me/finoconfeitogramado' className='icon icon--whatsapp' target='blank'>
            <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
    )
}

export default SocialMedia