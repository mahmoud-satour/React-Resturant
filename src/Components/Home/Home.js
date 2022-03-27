import React from 'react';
import "./Home.css";

function Home() {
    return (
        <>
            <header id="home">
                <div className='container'>
                    <div className='row' style={{paddingTop:"150px"}}>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12' style={{marginTop:"50px"}}>
                            <h2>Good food choices are good investments.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                            <button className='btn1 btn-lg shadow' >Order Now</button>
                            <button className='btn2 btn-lg shadow'>Learn More</button>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        </div>
                    </div>
                </div>
            </header>
            <section className='num'>
                <div className='container'>
                    <div className='row' style={{margin:"15px 0px"}}>
                        <div className='col-md-3'>
                            <h1>1287+</h1>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h1>5786+</h1>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h1>1440+</h1>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h1>7110+</h1>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
