import React, { Component } from 'react';
// stylesheet
import { Badge } from 'react-bootstrap';

class Jam extends Component{
    state = {  
        date: new Date(),  
    }  
    componentDidMount() {  
        setInterval(  
            () => this.setState({ date: new Date()}),  
            1000  
        );  
    }  
    render(){
        return(
            <Badge bg="dark">
                <span>
                    {this.state.date.toLocaleTimeString()}
                </span>
            </Badge>
        )
    }
}





export default Jam;