import React, { Component } from 'react'


export default class homepage extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 py-4">
                            <div className="col-md-10 mx-auto">
                                <form>
                                    <div class="form-group mt-2">
                                        <label for="exampleInputPassword1">First Name</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="First Name" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="exampleInputPassword1">Last Name</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Last Name" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="exampleInputPassword1">Address</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="exampleInputPassword1">Expertise</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Expertise" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="exampleInputPassword1">Experience</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Experience" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="exampleInputPassword1">Tech Stack</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Tech Stack" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="exampleInputPassword1">Bio</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Bio" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 bg-secondary py-3">
                            <div className="text-center">
                                last save: 1 minute ago
                            </div>
                            <div className="text-center pt-3">
                                <img src="https://dummyimage.com/600x600/fff/000&text=sample+preview" alt="" />
                            </div>
                            <div className="text-center py-3">
                                <button type="submit" class="btn btn-primary mt-4">Download PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
