import React from 'react'
import './topo.css'
import Banner from '../../assets/imgs/externa-dia.JPG'


function Topo() {
    return (
        <div className='banner-container'>
            <img className='banner' alt='banner-rancho' src={Banner}></img>
        </div>
    )
}

export default Topo;