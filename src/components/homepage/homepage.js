import React, { Component } from 'react'
import { Container } from 'react-bootstrap'


export default class homepage extends Component {
    render() {
        return (
            <Container fluid>
                <section id="tutorial" class="tutorial">
                    <div class="container">
                        <div class="col-lg-8 text-center mx-auto py-5">
                            <h2 class="py-3">Make a resume has never been this easy</h2>
                            <img src="https://dummyimage.com/800x400/000/fff&text=video+player" />
                            <a href="/" class="btn btn-primary my-4 py-2">Build Your Resume</a>
                        </div>
                    </div>
                </section>

                <section id="description" class="description bg-light py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 order-2 order-lg-1 mt-3 mt-lg-0">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p class="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                                </p>
                                <ul>
                                <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                            <div class="col-lg-4 order-1 order-lg-2 text-center">
                                <img src="https://dummyimage.com/400x370/000/fff&text=sample+resume" alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" class="services py-5">
                    <div class="container">
                        <div class="section-title text-center">
                            <h2 className="my-3 py-4">Feature</h2>
                        </div>

                        <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-basketball-ball"></i></div>
                            <h4 class="title"><a href="/">Lorem Ipsum</a></h4>
                            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-book"></i></div>
                            <h4 class="title"><a href="/">Dolor Sitema</a></h4>
                            <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-5 mt-lg-0 ">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-file-alt"></i></div>
                            <h4 class="title"><a href="/">Sed ut perspiciatis</a></h4>
                            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-5">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-tachometer-alt"></i></div>
                            <h4 class="title"><a href="/">Magni Dolores</a></h4>
                            <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-5">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-globe-americas"></i></div>
                            <h4 class="title"><a href="/">Nemo Enim</a></h4>
                            <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-5">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-clock"></i></div>
                            <h4 class="title"><a href="/">Eiusmod Tempor</a></h4>
                            <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </Container>
        )
    }
}
