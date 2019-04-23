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

    handleClick = () => {
        window.location.reload();
    }

    render(){
        let pict = this.state.photo
        console.log(pict.image_url)

        return(
            <div className="square">
                <h1>Need some comedic motivation?</h1>
                <button onClick={this.handleClick}>Generate Alternate Set</button>
                <div>
                    <img id="imgsum" src={pict.image_url} />
                </div>
                <QuoteSquare />
            </div>
        )
    }
}

export default ImageSquare;