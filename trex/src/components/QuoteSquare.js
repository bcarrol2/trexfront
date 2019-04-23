import React from 'react';

class QuoteSquare extends React.Component {

    constructor(){
        super()

        this.state = {
            quotes: []
            // I create an empty array so I can constantly set the new state
        }
    }

    // Really I could of put this function in componentDidMount... but I thought this was cool
    clickThisFunctionToGetANewRandomQuoteFromTheRailsServerICreated = () => {
        const quote = fetch('http://localhost:3000/quote')
        .then(res => res.json())
        .then(response => {
            this.setState({quotes: response})
        })
    }

    // This function calls on the function above
    componentDidMount(){
        this.clickThisFunctionToGetANewRandomQuoteFromTheRailsServerICreated()
    }

    render(){
        let blahblahblah = this.state.quotes;
        // just storing the data(new state) in a variable to call this instead of typing out this.state.whatever

        return(
            <div>
                <div id="anotherOneOfThese">
                    <h1>{blahblahblah.text}</h1>
                </div> 
            </div>
        )
    }
}

export default QuoteSquare;