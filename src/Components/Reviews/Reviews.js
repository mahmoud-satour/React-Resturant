import React from 'react';
import './Reviews.css';
import {Carousel} from 'react-bootstrap';
import image1 from '../../images/5.jpg';
import image2 from '../../images/6.jpg';
import image3 from '../../images/7.jpg';

function Reviews() {
    return (
        <section className='reviews' id="reviews">
            <div className='container'>
                <h1 className='text-center'>Testimonials</h1>
                    <Carousel   usel style={{backgroundColor:"white"}}>
                        <Carousel.Item className='text-center'>
                            <img
                            className="d-block imagesStyle"
                            src={image1}
                            alt="First slide"
                            />
                            <p className='textStyle'>"Far far away, behind the word mountains, far from the countries<br /> Vokalia and Consonantia, there live the blind texts. Separated they<br /> live."</p>
                            <h5 className='info'>Simab Dave - Web Designer</h5>
                            </Carousel.Item>
                            <Carousel.Item className='text-center'>
                            <img
                            className="d-block imagesStyle"
                            src={image2}
                            alt="Second slide"
                            />
                            <p className='textStyle'>"Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts. Separated they <br />live far from the countries Vokalia."</p>
                            <h5 className='info'>Johnthan Doe - UX Designer</h5>
                            </Carousel.Item>
                            <Carousel.Item className='text-center'>
                            <img
                            className="d-block imagesStyle"
                            src={image3}
                            alt="Third slide"
                            />
                            <p className='textStyle'>"Far far away, behind the word mountains, far from the countries<br /> Vokalia and Consonantia, there live the blind texts. "</p>
                            <h5 className='info'>Maccy Doe - Front End</h5>
                        </Carousel.Item>
                </Carousel>
            </div>
        </section>
    )
}

export default Reviews;
