import React from 'react';

class QuoteSquare extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/image')
        .then(res => res.json())
        .then(response => {
            console.log(response)
        })
    }

    render(){
        return(
            <div id="quote_sum">
                <h1>A stockbroker urged me to buy a stock that would triple its value every year. I told him, ‘At my age, I don’t even buy green bananas.'</h1>
            </div>
        )
    }
}

export default QuoteSquare;