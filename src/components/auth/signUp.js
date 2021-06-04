import React, { Component } from 'react'
import { faFacebook, faTwitter, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../redux/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const { authError, user } = this.props;

        if(user) return <Redirect to="/" />

        return (
            <div className="py-5">
                <div id="login-row" className="row justify-content-center no-gutters">
                    <div id="login-column" className="col-md-4">  
                        <div id="login-box" className="col-md-12">
                            <form onSubmit={this.handleSubmit}>
                                <h1 className="mb-3">Sign Up</h1>
                                <div class="row mb-4">
                                    <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="firstName">First name</label>
                                        <input type="text" id="firstName" class="form-control" onChange={this.handleChange} />
                                    </div>
                                    </div>
                                    <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="lastName">Last name</label>
                                        <input type="text" id="lastName" class="form-control" onChange={this.handleChange} />
                                    </div>
                                    </div>
                                </div>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="email">Email address</label>
                                    <input type="email" id="email" class="form-control" onChange={this.handleChange} />
                                </div>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="password">Password</label>
                                    <input type="password" id="password" class="form-control" onChange={this.handleChange} />
                                </div>

                                <button type="submit" class="btn btn-primary btn-block w-100 mb-4">Sign up</button>

                                <div class="text-center">
                                    <p>or sign in with:</p>
                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faFacebook} />
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faGoogle} />
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faGithub} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)