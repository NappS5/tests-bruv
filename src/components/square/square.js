import React from 'react';
import '../square/square.css'
import PlacaLinha from '../../assets/imgs/placa-linha.JPG';
import ExternaDia from '../../assets/imgs/externa-dia.JPG';
import Sofa from '../../assets/imgs/sofa-externa.JPG';

function Square () {
    return (
        <div className='square-container'>
            <div className='squares'>
            <div className='square'>
                    <a href='./pagina1.html'>
                        <img alt='placa linha' src={PlacaLinha}></img>
                    </a>
                </div>
                <div className='square'>
                    <a href='./pagina2.html'>
                    <img alt='externa dia' src={ExternaDia}></img>
                    </a>
                </div>
                <div className='square'>
                    <a href='./pagina3.html'>
                    <img alt='Localização' src={Sofa}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Square;