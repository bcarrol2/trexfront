import React from 'react';
import QuoteSquare from './QuoteSquare';

class ImageSquare extends React.Component {
    constructor(){
        super()

        this.state = {
            photo: []
            // I create an empty array so I can constantly set the new state
        }
    }

    // below gets a random image from rails
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
        // This refreshes the page
    }

    render(){
        let pict = this.state.photo
        // I just stored the date that came in from the fetch into a variable
        console.log(pict.image_url)
        // I wanted to see the data in the console

        return(
            // This is just what I want rendering on the page
            <div className="bigFreakinDiv">
                <h1>Need some comedic motivation?</h1>
                <button onClick={this.handleClick}>Generate Alternate Set</button>
                <div>
                    <img id="someNiceIdName" src={pict.image_url} />
                </div>
                <QuoteSquare />
            </div>    
        )
    }
}

export default ImageSquare;