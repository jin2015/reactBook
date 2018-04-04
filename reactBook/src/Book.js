import React, { Component } from 'react';

class Book extends Component {
    constructor(){
        super();
        this.state ={
            blah:[]
        };
    }

    componentDidMount() {
        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo")
            .then(results => results.json())
            .then(data => this.setState({blah: data['Meta Data']['1. Information']}));
        console.log(this.state.blah);
    }


    render() {
        return (
            <table>
                <th>blah</th>
                <th>blah 1</th>
                <th>blah 2</th>
                <tr>
                    <td>{this.state.blah}</td>
                    <td>dsdsdsd</td>
                    <td>dsdsdsd</td>
                </tr>
            </table>
        );
    }
}

export default Book;
