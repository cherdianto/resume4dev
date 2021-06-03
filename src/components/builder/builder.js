import React, { Component } from 'react'
import Preview from './preview'
import PdfViewer from './pdfViewer'
import { connect } from 'react-redux'
import { saveData } from '../../redux/actions/dataActions'


class builder extends Component {
    state = {
        firstName: '',
        lastName: '',
        address: '',
        expertise: '',
        experience: '',
        techStack: '',
        bio: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        }, () => {
            console.log('OK')
        })
        this.props.saveData(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveData(this.state);
    }

    render() {

        console.log(this.props)

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 py-4">
                            <div className="col-md-10 mx-auto">
                                <form onSubmit={this.handleSubmit} >
                                    <div class="form-group mt-2">
                                        <label for="firstName">First Name</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="First Name" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="Last Name" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="address">Address</label>
                                        <input type="text" class="form-control" id="address" placeholder="Address" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="expertise">Expertise</label>
                                        <input type="text" class="form-control" id="expertise" placeholder="Expertise" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="experience">Experience</label>
                                        <input type="text" class="form-control" id="experience" placeholder="Experience" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="techStack">Tech Stack</label>
                                        <input type="text" class="form-control" id="techStack" placeholder="Tech Stack" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="bio">Bio</label>
                                        <input type="text" class="form-control" id="bio" placeholder="Bio" onChange={this.handleChange} />
                                    </div>
                                     <div className="text-center py-3">
                                        <button type="submit" class="btn btn-primary mt-4">Save Data</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 bg-secondary py-3">
                            <PdfViewer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveData: (data) => dispatch(saveData(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(builder)