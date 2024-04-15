import React from 'react'
import './card.css'

function exibirModal() {
    document.getElementById("modal").style.visibility = "visible";
}

function fecharModal () {
    document.getElementById("modal").style.visibility = "hidden";
}



function Card() {
     // Adicionar um ouvinte de evento após o componente ser montado
     React.useEffect(() => {
        const imagemPorco = document.getElementById("imagem-porco");
        imagemPorco.addEventListener('click', exibirModal);

        // Remover o ouvinte de evento quando o componente for desmontado
        return () => {
            imagemPorco.removeEventListener('click', exibirModal);
        };
    }, []);

    return (
        <>
            <div className="porco-container">
                <img className="card-porco" src="./imgs/card-porco.png" id="imagem-porco" alt='card-porco'></img>
            </div>

            <div className="modal" id="modal" onClick={fecharModal}>
                <div className="modal-content" id="modal-content">
                    Olá aqui está o conteúdo.
                    <span className="close" onClick={fecharModal}>Fechar</span>
                </div>
            </div>
        </>
    );
}

export default Card