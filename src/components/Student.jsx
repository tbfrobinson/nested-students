import { Component } from 'react';
import Scores from './Scores'

export default class Student extends Component {

    render() {
        console.log(this.props)
        return(
            <>
            <h2>{this.props.name}</h2>
            <p>{this.props.bio}</p>

            <Scores 
                scores={this.props.scores}
            />
            </> 
        )
    }
}