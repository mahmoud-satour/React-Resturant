import React from 'react';
import './Fag.css';

function Fag() {
    return (
        <section className='fag' id='faq'>
            <div className='container'>
                <h3 className='text-center'>Frequently Asked Questions</h3>
                <div className='row firstRow'>
                    <div className='col-md-6'>
                        <h4>~ Is Foodera Bread really baked fresh each day?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className='col-md-6'>
                        <h4>~ Is Foodera Bread really baked fresh each day?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div className='row secandRow'>
                    <div className='col-md-6'>
                        <h4>~ Is Foodera Bread really baked fresh each day?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className='col-md-6'>
                        <h4>~ Is Foodera Bread really baked fresh each day?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div className='row' style={{marginBottom:"150px"}}>
                    <div className='col text-center'>
                        <h2>Hurry up! Subscribe our newsletterand<br/> get 25% Off</h2>
                        <p>Limited time offer for this month. No credit card required.</p>
                        <input style={{height:"52px",width:"500px",margin:"21px 0px"}} type="email" placeholder='Enter Your Email' />
                        <button className='btn-lg' style={{marginLeft:"20px"}}>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fag;
