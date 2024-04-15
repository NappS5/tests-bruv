import React from 'react';
import './styles.css';
import '../../responsive/responsive.css'
import Header from '../../header/header';
import Midlane from '../../midlane/midlane';
import Topo from '../../topo/topo';
import Square from '../../square/square';

function Home(){
    return(
        <>
            <Header />
            <Topo />
            {/* <Carousel /> */}
            <Midlane />
            <Square />
            {/* <Card /> */}
        </>
    )
}

export default Home