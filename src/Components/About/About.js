import React from 'react';
import './About.css';
import FoodImg from '../../images/food.png';
import ingredientsImage from '../../images/2.png';


function About() {
    return (
        <>
            <section className='pride' id='about us'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-6">
                            <img src={FoodImg} title='' alt='' className='img-fluid'/>
                        </div>
                        <div className='col-md-6'>
                            <h3>We pride ourselves on making real food from the best ingredients.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button className="btn-lg">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ingredients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3>We make everything by hand with the best possible ingredients.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button className='btn-lg'>Learn More</button>
                        </div>
                        <div className='col-md-6'>
                            <img src={ingredientsImage}  alt='' title='' className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='stomach'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h3 className='text-center'>When a man's stomach is full it makes no<br />difference whether he is rich or poor.</h3>
                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br />
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <div className='text-center'><a href='#' style={{color:" #43121d"}}>Watch Our Story</a></div> 
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default About;
