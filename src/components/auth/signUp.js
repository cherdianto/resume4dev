import React, { Component } from 'react'
import { faFacebook, faTwitter, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class homepage extends Component {
    render() {
        return (
            <div className="py-5">
                <div id="login-row" className="row justify-content-center no-gutters">
                    <div id="login-column" className="col-md-5">  
                        <div id="login-box" className="col-md-12">
                            <form>
                                <h1 className="mb-3">Sign Up</h1>
                                <div class="row mb-4">
                                    <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="form3Example1">First name</label>
                                        <input type="text" id="form3Example1" class="form-control" />
                                    </div>
                                    </div>
                                    <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="form3Example2">Last name</label>
                                        <input type="text" id="form3Example2" class="form-control" />
                                    </div>
                                    </div>
                                </div>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form2Example1">Email address</label>
                                    <input type="email" id="form2Example1" class="form-control" />
                                </div>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form2Example2">Password</label>
                                    <input type="password" id="form2Example2" class="form-control" />
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
