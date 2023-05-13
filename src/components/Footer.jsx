import React, { useEffect } from 'react'

const Footer = () => {

    useEffect(() => {
        let items = document.querySelectorAll('.item')
        Array.from(items).forEach(async (item) => {
            let start = item.dataset.startX;
            let duration = (35e3 * (Number(start) + 150)) / 1650;
            let animation = item.animate([{transform:`translateX(${start}px)`},{transform:'translateX(-150px)'}],{duration,iterations:1})
            let state =await animation.finished.then(state => state.playState)
            if(state === 'finished'){
                item.animate([{transform:'translateX(1500px)'},{transform:'translateX(-150px)'}],{iterations:Infinity,duration:35e3})
            }
        })
    },[])

  return (
    <div className='footer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" fill="currentColor" class="_gsBWkx7_aDSs7JQH8jr uparrow"><path d="m121.4 61.6-54-54c-.7-.7-1.8-1.2-2.9-1.2s-2.2.5-2.9 1.2l-54 54c-1.6 1.6-1.6 4.2 0 5.8.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2l47-47v98.1c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1V20.4l47 47c1.6 1.6 4.2 1.6 5.8 0s1.5-4.2 0-5.8z"></path></svg>
        <div className="footer__container">
            <div className="flex__container">
                <div className="left">
                    <h1>A Better Way To Land Interviews.</h1>
                    <p>Earn the AlgoExpert Certificate. Get referred to tech companies.</p>
                    <p>No more InMail messages that get ignored.</p>
                    <p>No more cold emails that go nowhere.</p>
                    <p>No more job applications that get no attention.</p>
                    <p>No more referral programs that don't work.</p>
                    <p>No more recruiting agencies that cost a fortune.</p>
                    <p>With AlgoExpert, preparing for interviews helps you land interviews.</p>
                    <button>Learn More</button>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <div className="right__container">
                            <div className="trash">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="MJ87EWTDHmnx7bX4YldG"><path d="M436 60h-75V45c0-24.813-20.187-45-45-45H196c-24.813 0-45 20.187-45 45v15H76c-24.813 0-45 20.187-45 45 0 19.928 13.025 36.861 31.005 42.761L88.76 470.736C90.687 493.875 110.385 512 133.604 512h244.792c23.22 0 42.918-18.125 44.846-41.271l26.753-322.969C467.975 141.861 481 124.928 481 105c0-24.813-20.187-45-45-45zM181 45c0-8.271 6.729-15 15-15h120c8.271 0 15 6.729 15 15v15H181V45zm212.344 423.246c-.643 7.712-7.208 13.754-14.948 13.754H133.604c-7.739 0-14.305-6.042-14.946-13.747L92.294 150h327.412l-26.362 318.246zM436 120H76c-8.271 0-15-6.729-15-15s6.729-15 15-15h360c8.271 0 15 6.729 15 15s-6.729 15-15 15z"></path><path d="m195.971 436.071-15-242c-.513-8.269-7.67-14.558-15.899-14.043-8.269.513-14.556 7.631-14.044 15.899l15 242.001c.493 7.953 7.097 14.072 14.957 14.072 8.687 0 15.519-7.316 14.986-15.929zM256 180c-8.284 0-15 6.716-15 15v242c0 8.284 6.716 15 15 15s15-6.716 15-15V195c0-8.284-6.716-15-15-15zM346.927 180.029c-8.25-.513-15.387 5.774-15.899 14.043l-15 242c-.511 8.268 5.776 15.386 14.044 15.899 8.273.512 15.387-5.778 15.899-14.043l15-242c.512-8.269-5.775-15.387-14.044-15.899z"></path></svg>
                            </div>
                            <div className="items__container">
                                <div className="overlay"></div>
                                <div className="item" data-start-x="100">
                                    InMail Message
                                </div>
                                <div className="item" data-start-x="140">
                                    InMail Message
                                </div>
                                <div className="item" data-start-x="270">
                                    Cold Email
                                </div>
                                <div className="item" data-start-x="335">
                                    Job Application
                                </div>
                                <div className="item" data-start-x="410">
                                    Cold Email
                                </div>
                                <div className="item" data-start-x="500">
                                    InMail Message
                                </div>
                                <div className="item" data-start-x="530">
                                    Recruiting Agency
                                </div>
                                <div className="item" data-start-x="600">
                                    InMail Message
                                </div>
                                <div className="item" data-start-x="700">
                                    Job Application
                                </div>
                                <div className="item" data-start-x="800">
                                    InMail Message
                                </div>
                                <div className="item" data-start-x="850">
                                    InMail Message
                                </div>
                                <div className="item" data-start-x="890">
                                    Cold Email
                                </div>
                                <div className="item" data-start-x="850">
                                    InMail Message
                                </div>
                                <div className="item" data-start-x="1100">
                                    Recuirting Agency
                                </div>
                                <div className="item" data-start-x="1000">
                                    Referral Program
                                </div>
                                <div className="item" data-start-x="1170">
                                    InMail Message
                                </div>
                                <div className="item" data-start-x="1210">
                                    Job Application
                                </div>
                                <div className="item" data-start-x="1310">
                                    Cold Email
                                </div>
                                <div className="item" data-start-x="1410">
                                    Cold Email
                                </div>
                                <div className="item" data-start-x="1420">
                                    Job Application
                                </div>
                                <div className="item" data-start-x="1500">
                                    Recuirting Agency
                                </div>
                                <div className="item" data-start-x="1570">
                                    InMail Message
                                </div>
                                <div className="item" data-start-x="1600">
                                    Referral Program
                                </div>
                                <div className="item" data-start-x="1700">
                                    Cold Email
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="quick__links">
                <span>Contact Us</span>
                <div className="link__divider"></div>
                <span>FAQ</span>
                <div className="link__divider"></div>
                <span>Reviews</span>
                <div className="link__divider"></div>
                <span>Blog</span>
                <div className="link__divider"></div>
                <span>Jobs</span>
                <div className="link__divider"></div>
                <span>SWE Project Contests</span>
                <div className="link__divider"></div>
                <span>Legsl Stuff</span>
                <div className="link__divider"></div>
                <span>Privacy Policy</span>
            </div>
            <div className='copyright'>
                <p>Copyright © 2017-2022 AlgoExpert LLC. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer