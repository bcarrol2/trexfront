import React from 'react';

class QuoteSquare extends React.Component {

    constructor(){
        super()

        this.state = {
            quotes: []
        }
    }

    clickThisFunctionToGetANewRandomQuoteFromTheRailsServerICreated = () => {
        const quote = fetch('http://localhost:3000/quote')
        .then(res => res.json())
        .then(response => {
            this.setState({quotes: response})
        })
    }

    componentDidMount(){
        this.clickThisFunctionToGetANewRandomQuoteFromTheRailsServerICreated()
    }

    handleClick(e){
        // e.preventDefault();
        window.location.reload();
    }   

    render(){
        let these = this.state.quotes;

        return(
            <div>
                <div id="quote_sum">
                    <h1>{these.text}</h1>
                </div> 
                <div>
                    <button onClick={this.handleClick}>Generate random quote</button>
                </div>
            </div>
        )
    }
}

export default QuoteSquare;