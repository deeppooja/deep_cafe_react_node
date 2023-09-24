import React from 'react'

export default function About() {
  return (
    <div>
        <section>
        <div className='image-background'>
            <div className='container h-100'>
                <div className='row h-100 align-items-center'>
                    <div className='col-12 text-center'>
                        <h1 className='display-2'>About Us</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="aboutdiv">
        <div className="untree_co-section bg-1">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                        <h2>Why <strong className="text-primary">Choose Us</strong></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 aos-init aos-animate" data-aos="fade-up"
                        data-aos-delay="0">
                        <div className="service">
                            <span className="caption mb-2">01</span>
                            <h3 className="mb-3">Delicious Food</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="col-md-3 aos-init aos-animate" data-aos="fade-up"
                        data-aos-delay="100">
                        <div className="service">
                            <span className="caption mb-2">02</span>
                            <h3 className="mb-3">Expert Chefs</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="col-md-3 aos-init aos-animate" data-aos="fade-up"
                        data-aos-delay="200">
                        <div className="service">
                            <span className="caption mb-2">03</span>
                            <h3 className="mb-3">Friendly People</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="col-md-3 aos-init aos-animate" data-aos="fade-up"
                        data-aos-delay="300">
                        <div className="service">
                            <span className="caption mb-2">04</span>
                            <h3 className="mb-3">Parties</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="chefdiv">
        <div className="container">
            <div className="row mb-4 justify-content-center">
                <div className="col-md-7 text-center mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">

                    <h2>Our <strong className="text-primary">Professional Chef</strong></h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                </div>
            </div>
            <div className="row">
                <div className=" col-md-4 aos-init aos-animate" data-aos="fade-up"
                    data-aos-delay="0">
                    <div className="team">
                        <img src="images/chef1.avif" alt="Image" className="img-fluid"/>
                        <div className="team-contents">
                            <h3 className="d-block">Pooja Kumari</h3>
                            <span className="position">Master Chef</span>
                            <ul className="list-unstyled social">
                                <li><a href="#"><span><i className="bi bi-facebook"></i></span></a></li>
                                <li><a href="#"><span><i className="bi bi-twitter"></i></span></a></li>
                                <li><a href="#"><span><i className="bi bi-instagram"></i></span></a></li>
                                <li><a href="#"><span><i className="bi bi-whatsapp"></i></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4 aos-init aos-animate" data-aos="fade-up"
                    data-aos-delay="100">
                    <div className="team">
                        <img src="images/chef2.avif" alt="Image" className="img-fluid"/>
                        <div className="team-contents">
                            <h3 className="d-block">Prity Kumari</h3>
                            <span className="position">Cook</span>
                            <ul className="list-unstyled social">
                                <li><a href="#"><span><i className="bi bi-facebook"></i></span></a></li>
                                <li><a href="#"><span><i className="bi bi-twitter"></i></span></a></li>
                                <li><a href="#"><span><i className="bi bi-instagram"></i></span></a></li>
                                <li><a href="#"><span><i className="bi bi-whatsapp"></i></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4 aos-init aos-animate" data-aos="fade-up"
                    data-aos-delay="200">
                    <div className="team">
                        <img src="images/chef3.avif" alt="Image" className="img-fluid"/>
                        <div className="team-contents">
                            <h3 className="d-block">Deepak Kumar</h3>
                            <span className="position">Chef</span>
                            <ul className="list-unstyled social">
                                <li><a href="#"><span><i className="bi bi-facebook"></i></span></a></li>
                                <li><a href="#"><span><i className="bi bi-twitter"></i> </span></a></li>
                                <li><a href="#"><span><i className="bi bi-instagram"></i></span></a></li>
                                <li><a href="#"><span><i className="bi bi-whatsapp"></i></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
