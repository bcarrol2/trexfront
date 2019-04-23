import React from 'react';
import QuoteSquare from './QuoteSquare';

class ImageSquare extends React.Component {
    constructor(){
        super()

        this.state = {
            photo: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/image')
        .then(res => res.json())
        .then(response => {
            console.log(response)
            this.setState({
                photo: response
            })
        })
    }

    render(){
        let pict = this.state.photo

        return(
            <div className="square">
                <h1>Need some motivation?</h1>
                <button>Generate New Picture</button>
                <div>
                    <img id="imgsum" src={pict.image_url} />
                </div>
                <QuoteSquare />
            </div>
        )
    }
}

export default ImageSquare;