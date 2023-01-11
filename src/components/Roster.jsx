import { Component } from 'react';
import Student from './Student'

export default class Roster extends Component {

    render() {
        const studentArray = []

        this.props.students.forEach((student, idx) => {
            studentArray.push(
                <Student 
                    key = {idx}
                    name = {student.name}
                    bio = {student.bio}
                    scores = {student.scores}
                />
            )
        })


        return(
            <>
            {studentArray}
            </>
        )
    }
}