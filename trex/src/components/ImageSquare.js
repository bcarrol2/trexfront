import React from 'react';
import QuoteSquare from './QuoteSquare';

class ImageSquare extends React.Component {
    render(){
        return(
            <div className="square">
                <h1>Hello world</h1>
                <button>Generate New Picture</button>
                <div>
                    <img id="imgsum" src="../timage1.jpg" />
                </div>
                <QuoteSquare />
            </div>
        )
    }
}

export default ImageSquare;