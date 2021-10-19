import React from 'react';
import './Blog.css';
import blog1 from '../../images/blog-1.jpg';
import blog2 from '../../images/blog-2.jpg';
import blog3 from '../../images/blog-3.jpg';
import blog4 from '../../images/blog-4.jpg';
import blog5 from '../../images/blog-5.jpg';
import blog6 from '../../images/blog-6.jpg';

const Blog = () => {
    return (
        <div className="blog">
            <div className="container blog_inner">
                <div className="blog_item">
                    <img src={blog1} alt="" />
                    <h3>Latest Covid-19 News</h3>
                    <p>Coronavirus latest as UK daily cases top 40,000 again while deaths are the highest for seven months at 223; Boris Johnson has a "very close eye" on COVID situation amid signs hospitalisations are rising; booster jab rollout said to be going "extremely slowly".</p>
                    <button>Read More</button>
                </div>
                <div className="blog_item">
                    <img src={blog2} alt="" />
                    <h3>How to get survive Cancer</h3>
                    <p>Unfortunately, there are never any certainties when it comes to cancer and no set plan for survival. Some people try everything humanly possible to survive, yet don't. Yet there are certain steps you can take that may improve your odds and put you one step ahead of your "opponent."</p>
                    <button>Read More</button>
                </div>
                <div className="blog_item">
                    <img src={blog3} alt="" />
                    <h3>How to get rid of headaches</h3>
                    <p>Bright or flickering light, even from your computer screen, can cause migraine headaches. If you’re prone to them, cover your windows with blackout curtains during the day. Wear sunglasses outdoors. You might also add anti-glare screens to your computer.</p>
                    <button>Read More</button>
                </div>
                <div className="blog_item">
                    <img src={blog4} alt="" />
                    <h3>What to do if the leg bone is broken</h3>
                    <p>Immobilization. Restricting the movement of a broken bone in your leg is critical to proper healing. To do this, you may need a splint or a cast. And you may need to use crutches or a cane to keep weight off the affected leg for six to eight weeks or longer.</p>
                    <button>Read More</button>
                </div>
                <div className="blog_item">
                    <img src={blog5} alt="" />
                    <h3>How to get rid of injuries quickly</h3>
                    <p>Regardless of the type of sport or the level that you play at, injuries are unfortunately part and parcel of playing sports. Getting help early and having a focused strategy for recovery is instrumental towards enabling an early return to sports.</p>
                    <button>Read More</button>
                </div>
                <div className="blog_item">
                    <img src={blog6} alt="" />
                    <h3>How can a blind person take care of his eyes</h3>
                    <p>“There is usually family history of short-sightedness or long-sightedness” explained the senior ophthalmology registrar at one of Sydney’s teaching hospitals. Diseases such as diabetes can also play a part in poor vision. So can injuries.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;