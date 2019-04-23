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

    render(){
        let these = this.state.quotes;

        return(
            <div>
                <div id="quote_sum">
                    <h1>{these.text}</h1>
                </div> 
            </div>
        )
    }
}

export default QuoteSquare;