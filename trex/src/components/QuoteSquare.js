import React from 'react';


class QuoteSquare extends React.Component {

    constructor(){
        super()

        this.state = {
            quotes: []
        }
        console.log(this.state.quotes)
    }

    componentDidMount(){
        const quote = fetch('http://localhost:3000/quote')
        // console.log(quote)
        .then(res => res.json())
        .then(response => {
        //     console.log(response)
            this.setState({ quotes: response})
        })
        // console.log(quote)
    }
    
    render(){
        let these = this.state.quotes;
        // console.log(these.text)

        return(
            <div id="quote_sum">
                <h1>{these.text}</h1>
            </div>
        )
    }
}

export default QuoteSquare;