import React from "react";
import backgroundimage from '.././assets/assets/img/im1.jpeg'
import img1 from '.././assets/assets/img/thumbnails/1.png'
import img2 from '.././assets/assets/img/thumbnails/2.png'
import img3 from '.././assets/assets/img/thumbnails/3.png'
import img4 from '.././assets/assets/img/thumbnails/4.png'
import img5 from '.././assets/assets/img/thumbnails/5.png'
import img6 from '.././assets/assets/img/thumbnails/6.png'
function HOME() {
    const styles = {
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };
    return (
        <div>
            <div style={styles}>
            </div>
            <section id="about" className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col offset-lg-8 text-center mx-auto">
                            <h2 className="text-white section-heading">We've got what you need!</h2>
                            <hr className="light my-4" />
                            <p className="text-faded mb-4">the most popular pitch next to you by one click</p><a className="btn btn-light btn-xl" role="button" href="#services">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">At Your Service</h2>
                            <hr className="my-4" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 text-center">
                            <div className="mx-auto service-box mt-5"><i className="fa fa-diamond fa-4x text-primary mb-3 sr-icons" data-aos="zoom-in" data-aos-duration="200" data-aos-once="true"></i>
                                <h3 className="mb-3">Find a team</h3>
                                <p className="text-muted mb-0">You can find a team to play with or against.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center">
                            <div className="mx-auto service-box mt-5"><i className="fa fa-paper-plane fa-4x text-primary mb-3 sr-icons" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="200" data-aos-once="true"></i>
                                <h3 className="mb-3">Find a player</h3>
                                <p className="text-muted mb-0">Your missing a player ? It's okey there is alot of player that ready to kick the ball!</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center">
                            <div className="mx-auto service-box mt-5"><i className="fa fa-newspaper-o fa-4x text-primary mb-3 sr-icons" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="400" data-aos-once="true"></i>
                                <h3 className="mb-3">RSV a picth</h3>
                                <p className="text-muted mb-0">You can RSV a pitch in your area depending on your preferences.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center">
                            <div className="mx-auto service-box mt-5"><i className="fa fa-heart fa-4x text-primary mb-3 sr-icons" data-aos="fade" data-aos-duration="200" data-aos-delay="600" data-aos-once="true"></i>
                                <h3 className="mb-3">Made with Love</h3>
                                <p className="text-muted mb-0">We want to promote the beautiful game!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="p-0">
                <div className="container-fluid p-0">
                    <div className="row g-0 popup-gallery">
                        <div className="col-sm-6 col-lg-4"><a className="portfolio-box" href="assets/img/fullsize/1.jpg"><img className="img-fluid" src={img1}/>
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded"><span>Category</span></div>
                                    <div className="project-name"><span>Project Name</span></div>
                                </div>
                            </div>
                        </a></div>
                        <div className="col-sm-6 col-lg-4"><a className="portfolio-box" href="assets/img/fullsize/2.jpg"><img className="img-fluid" src={img2}/>
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded"><span>Category</span></div>
                                    <div className="project-name"><span>Project Name</span></div>
                                </div>
                            </div>
                        </a></div>
                        <div className="col-sm-6 col-lg-4"><a className="portfolio-box" href="assets/img/fullsize/3.jpg"><img className="img-fluid" src={img3}/>
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded"><span>Category</span></div>
                                    <div className="project-name"><span>Project Name</span></div>
                                </div>
                            </div>
                        </a></div>
                        <div className="col-sm-6 col-lg-4"><a className="portfolio-box" href="assets/img/fullsize/4.jpg"><img className="img-fluid" src={img4} />
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded"><span>Category</span></div>
                                    <div className="project-name"><span>Project Name</span></div>
                                </div>
                            </div>
                        </a></div>
                        <div className="col-sm-6 col-lg-4"><a className="portfolio-box" href="assets/img/fullsize/5.jpg"><img className="img-fluid" src={img5} />
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded"><span>Category</span></div>
                                    <div className="project-name"><span>Project Name</span></div>
                                </div>
                            </div>
                        </a></div>
                        <div className="col-sm-6 col-lg-4"><a className="portfolio-box" href="assets/img/fullsize/6.jpg"><img className="img-fluid" src={img6} />
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded"><span>Category</span></div>
                                    <div className="project-name"><span>Project Name</span></div>
                                </div>
                            </div>
                        </a></div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 text-center mx-auto">
                            <h2 className="section-heading">Let's Get In Touch!</h2>
                            <hr className="my-4" />
                            <p className="mb-5">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center ms-auto"><i className="fa fa-phone fa-3x mb-3 sr-contact" data-aos="zoom-in" data-aos-duration="300" data-aos-once="true"></i>
                            <p>123-456-6789</p>
                        </div>
                        <div className="col-lg-4 text-center me-auto"><i className="fa fa-envelope-o fa-3x mb-3 sr-contact" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="300" data-aos-once="true"></i>
                            <p><a href="mailto:your-email@your-domain.com">nix@nix.com</a></p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default HOME;