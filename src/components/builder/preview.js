import React from 'react'
import { connect } from 'react-redux'
import classes from '../../styles/preview.module.css'

const preview = (props) => {
    const {firstName, lastName, address, expertise, experience, bio, techStack } = props.data;
    console.log(props.data)
    return (
        <div>
            <div className="text-center">
                last save: 1 minute ago
            </div>
            <div className="pt-3">
                <div className={classes.preview}>
                    <div className={classes.header}>
                        <p>First Name : {firstName}</p>
                        <p>Last Name : {lastName}</p>
                        <p>Address : {address}</p>
                        <p>Expertise : {expertise}</p>
                        <p>Experience: {experience}</p>
                        <p>Tech Stack: {techStack}</p>
                        <p>Bio: {bio}</p>
                    </div>
                </div>
            </div>
            <div className="text-center py-3">
                <button type="submit" class="btn btn-primary mt-4">Download PDF</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(preview)
