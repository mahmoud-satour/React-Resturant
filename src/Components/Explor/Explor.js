import React from 'react';
import Data from '../../Data';
import './Explor.css'

function Explor() {
    const blogItems = Data.map((item)=> {
        return (
            <div className='col-md-4'>
                <div className='box'>
                    <img src={item.img} alt='' />
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6>
                    <button className='OrderBtn btn-lg'><a href='#'>Order Now</a></button>
                </div>
            </div>
        )
    })

    return (
        <section className='explor' id='explore foods'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 text-center'>
                        <h3>Explore Our Foods</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br /> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br />Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className='row'>
                    {blogItems}
                </div>
            </div>
        </section>
    )
}

export default Explor;
