import React, {  useRef, useState } from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
const Hero = () => {
    const productRef = useRef();
    const [active,setActive] = useState('algo');
    const [productContainerActive,setProductContainerActive] = useState(false);
    const [contentContainerActive,setContentContainerActive] = useState(false)

    let activeTimeout;

  return (
    <div className="container">
        <div className="navbar">
            <a className="logo" href='/products'>
                <div className='top'>
                    <img src="data:image/png;base64,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" alt="" />
                    <h1>AlgoExpert</h1>
                </div>
                <div className="bottom">
                    <span>Ace the Technical interviews</span>
                </div>
            </a>
            <ul>
                <li className='products'>
                    <span className='nav'ref={productRef}
                    onMouseEnter={() => {
                        setProductContainerActive(true);
                    }}
                    onMouseLeave={() => {
                        activeTimeout = setTimeout(() => {
                            setProductContainerActive(false)
                        },300)
                    }}
                    >Products</span>
                    <div 
                    className={`product__container ${productContainerActive ? 'active' : ''}`}
                    onMouseEnter={() => {
                        clearTimeout(activeTimeout)
                    }}
                    onMouseLeave={() => {
                        setProductContainerActive(false)
                    }}
                    >
                        <div className="content">
                            <h1>AlgoExpert</h1>
                            <span>Ace the coding interviews.</span>
                        </div>
                        <div className="content">
                            <h1>SystemExpert</h1>
                            <span>Ace the system design interviews.</span>
                        </div>
                        <div className="content">
                            <h1>MLExpert</h1>
                            <span>Ace the machine learing interviews.</span>
                        </div>
                        <div className="content">
                            <h1>FrontendExpert</h1>
                            <span>Ace the frontend interviews.</span>
                        </div>
                        <div className="content">
                            <h1>ProgrammingExpert</h1>
                            <span>Learn to code.</span>
                        </div>
                    </div>
                </li>
                <li className='content'>
                    <span className='nav'
                     onMouseEnter={() => {
                        setContentContainerActive(true)
                    }}
                    onMouseLeave={() => {
                        activeTimeout = setTimeout(()=>{
                            setContentContainerActive(false)
                        },300)
                    }}
                    >Content</span>
                    <div className={`content__container ${contentContainerActive ? 'active' : ""}`}
                    onMouseEnter={() => {
                        clearTimeout(activeTimeout)
                    }}
                    onMouseLeave={()=> {
                        setContentContainerActive(false)
                    }}
                    >
                        <div className="left__side">
                            <div onMouseEnter={() =>setActive('algo')}>
                                <h3>AlgoExpert</h3>
                                <AiFillCaretRight className='icon' />
                            </div>
                            <div onMouseEnter={() =>setActive('system')}>
                                <h3>SystemExpert</h3>
                                <AiFillCaretRight className='icon' />
                            </div>
                            <div onMouseEnter={() =>setActive('ml')}>
                                <h3>MLExpert</h3>
                                <AiFillCaretRight className='icon'/>
                            </div>
                            <div onMouseEnter={() =>setActive('front')}>
                                <h3>FrontEndExpert</h3>
                                <AiFillCaretRight className='icon'/>
                            </div>
                            <div onMouseEnter={()=>setActive('bonous')}>
                                <h3>Bonous</h3>
                                <AiFillCaretRight className='icon'/>
                            </div>
                        </div>
                        <div className={`right__side ${active}`}>
                            <div className={`algo content ${active === 'algo' ? 'active' : ''}`}>
                                <div>Coding Interview Questions</div>
                                <div>DataStructures Crash Course</div>
                                <div>Coding Interviews Assessments</div>
                                <div>Mock Coding Interviews</div>
                                <div>Coding Interview Tips</div>
                            </div>
                            <div className={`system content ${active === 'system' ? 'active' : ''}`}>
                                <div>Systems Design Fundamentals</div>
                                <div>Systems Design Questions</div>
                                <div>Systems Design Quiz</div>
                                <div>Systems Design Interview Tips</div>
                            </div>
                            <div className={`ml content ${active === 'ml' ? 'active' : ''}`}>
                                <div>ML Crash Course</div>
                                <div>ML Coding Questions</div>
                                <div>Large-Scale ML</div>
                                <div>ML Design Questions</div>
                                <div>ML Quiz</div>
                                <div>ML Interview Tips</div>
                            </div>
                            <div className={`front content ${active === 'front' ? 'active' : ''}`}>
                                <div>Frontend Interview Questions</div>
                                <div>HTML Crash Course</div>
                                <div>CSS Crash Course</div>
                                <div>Javascript Crash Course</div>
                                <div>React Crash Course</div>
                                <div>Web Dev Fundamentals</div>
                                <div>Frontend Quiz</div>
                            </div>
                            <div className={`bonous content ${active === 'bonous' ? 'active' : ''}`}>
                                <div>Behavioral Interview Prep</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <span className='nav'>Team</span>
                </li>
                <li>
                    <span className='nav'>Purchase</span>
                </li>
            </ul>
            <div className="auth">
                <button>Log In</button>
            </div>
        </div>
        <div className="hero">
            <div className="left">
                <div className="wrapper">
                <h1>AlgoExpert</h1>
                <p>The ultimate resource to prepare for coding interviews. Everything you need, in one streamlined platform.</p>
                <button>
                    <div>
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.996 611.996" class="neOcAqJrcio86Ja4GphK aS2AImZNDb56PiD4kGXO"><path d="M588.63 113.193 213.812 33.871c-15.858-3.355-31.576 6.876-34.931 22.734l-7.121 45.762 432.477 91.519 7.121-45.762c3.355-15.852-6.87-31.575-22.728-34.931zM431.009 203.591c-4.378-15.766-20.854-25.085-36.615-20.714L323.24 202.63l-167.742-35.5-18.448 87.165-115.264 31.992c-15.76 4.372-25.079 20.848-20.708 36.609l64.958 234.078c4.378 15.76 20.855 25.085 36.615 20.708l372.608-103.403c15.76-4.378 25.079-20.848 20.708-36.615l-11.15-40.184 41.789 8.835c15.858 3.361 31.576-6.87 34.931-22.728l26.439-124.937-150.526-31.853-6.441-23.206zm43.031 118.968 9.215-43.552c1.384-6.521 7.85-10.727 14.37-9.35l43.552 9.221c6.527 1.384 10.733 7.843 9.356 14.37l-9.215 43.552c-1.384 6.521-7.849 10.733-14.37 9.35l-43.552-9.215c-6.533-1.389-10.74-7.855-9.356-14.376zM28.27 309.646l103.115-28.606 243.299-67.517 26.181-7.274c.478-.129.955-.19 1.421-.19 2.1 0 4.611 1.378 5.345 4.017l3.074 11.07 9.631 34.704L37.148 362.186l-12.705-45.768c-.796-2.872.956-5.976 3.827-6.772zm444.331 134.495c.49 1.776-.024 3.245-.545 4.164-.514.918-1.506 2.119-3.282 2.608L96.173 554.316a5.42 5.42 0 0 1-1.421.196c-2.1 0-4.611-1.384-5.345-4.023L51.519 413.955l383.188-106.342 23.371 84.208 14.523 52.32z"></path><path d="M156.379 453.484c-1.788-6.429-8.499-10.225-14.928-8.443l-43.515 12.08c-6.423 1.782-10.225 8.499-8.437 14.928l12.074 43.509c1.788 6.429 8.499 10.225 14.928 8.437l43.515-12.074c6.429-1.782 10.225-8.499 8.443-14.928l-12.08-43.509z"></path></svg>
                    Buy AlgoExpert
                    </div>
                </button>
                </div>
            </div>
            <div className="right">
                <div className="right__container">
                    <div className="right__wrapper">
                        <div className="cards__container">
                            <div className="left__card">
                                <div className="top">
                                    <div className='header'>Prompt</div>
                                    <div className="body">
                                        <h4>Max Profit With K Transactions</h4>
                                        <div className="skeleton"></div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton"></div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className='header'>Tests</div>
                                    <div className="body">
                                        <div className="test__output">
                                            <span className='blue small'></span>
                                            <span className='brown small'></span>
                                            <span className='brown small'></span>
                                            <span className='blue big'></span>
                                        </div>
                                        <div className="test__output">
                                            <span className='yellow big '></span>
                                            <span className='purple medium'></span>
                                            <span className='blue small'></span>
                                            <span className='yellow big'></span>
                                        </div>
                                        <div className="test__output">
                                            <span className='purple medium'></span>
                                            <span className='brown big'></span>
                                            <span className='yellow big'></span>
                                            <span className='brown big'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right__card">
                                <div className="top">
                                    <div className='header'>
                                        <span>Input</span>
                                        <div className='button'>Run</div>
                                    </div>
                                    <div className="body">
                                        <div>
                                            <span className='brown small'></span>
                                            <span className='brown big'></span>
                                            <span className='brown small'></span>
                                        </div>
                                        <div>
                                            <span className='yellow big'></span>
                                            <span className="purple big"></span>
                                            <span className='blue big'></span>
                                            <span className='brown small '></span>
                                        </div>
                                        <div>
                                            <span className='purple medium'></span>
                                            <span className='green small'></span>
                                            <span className='green medium'></span>
                                            <span className='brown big'></span>
                                        </div>
                                        <div>
                                            <span className='green big'></span>
                                            <span className='green medium'></span>
                                            <span className='blue small'></span>
                                            <span className='brown small'></span>
                                        </div>
                                        <div>
                                            <span className='green medium'></span>
                                            <span className='purple small'></span>
                                        </div>
                                        <div>
                                            <span className='purple medium'></span>
                                            <span className='yellow big'></span>
                                            <span className='brown small'></span>
                                        </div>
                                        <div>
                                            <span className='purple medium'></span>
                                            <span className='yellow medium'></span>
                                            <span className='purble big'></span>
                                            <span className='yellow medium'></span>
                                        </div>
                                        <div>
                                            <span className='yellow small'></span>
                                            <span className='blue medium'></span>
                                            <span className='pruple big'></span>
                                            <span className='brown small'></span>
                                        </div>
                                        <div>
                                            <span className='blue medium'></span>
                                            <span className='yellow big'></span>
                                            <span className='purple small'></span>
                                            <span className='green big'></span>
                                        </div>
                                        <div>
                                            <span className='blue small'></span>
                                            <span className='green big'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className='header'>
                                        <span>Output</span>
                                        <div>Submit</div>
                                    </div>
                                    <div className="body">
                                        <div>
                                        <svg viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg" class="correct"><circle class="circle" cx="116" cy="116" r="108.5" stroke="currentColor" stroke-width="15" stroke-linejoin="round"></circle><path class="line1" stroke="currentColor" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" d="m65.606 114.888 37.282 36.506"></path><path class="line2" stroke="currentColor" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" d="m177.741 80.603-73.138 69.656"></path></svg>
                                        <span className='correct'></span>
                                        </div>
                                        <div>
                                        <svg viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg" class="correct"><circle class="circle" cx="116" cy="116" r="108.5" stroke="currentColor" stroke-width="15" stroke-linejoin="round"></circle><path class="line1" stroke="currentColor" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" d="m65.606 114.888 37.282 36.506"></path><path class="line2" stroke="currentColor" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" d="m177.741 80.603-73.138 69.656"></path></svg>
                                        <span className='correct'></span>
                                        </div>
                                        <div>
                                        <svg viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg" class="error"><circle class="circle" cx="116" cy="116" r="108.5" stroke="currentColor" stroke-width="15"></circle><path class="line1" stroke="currentColor" stroke-width="15" stroke-linecap="round" d="m67.32 162.789 95.236-95.681"></path><path class="line2" stroke="currentColor" stroke-width="15" stroke-linecap="round" d="M164.9 162.562 69.219 67.325"></path></svg>
                                        <span className='error'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero