import React from 'react'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="categories__container">
                <img className='uparrow' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyOSAxMjkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOSAxMjkiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CiAgPGc+CiAgICA8cGF0aCBkPSJtMTIxLjQsNjEuNmwtNTQtNTRjLTAuNy0wLjctMS44LTEuMi0yLjktMS4ycy0yLjIsMC41LTIuOSwxLjJsLTU0LDU0Yy0xLjYsMS42LTEuNiw0LjIgMCw1LjggMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4ybDQ3LTQ3djk4LjFjMCwyLjMgMS44LDQuMSA0LjEsNC4xczQuMS0xLjggNC4xLTQuMXYtOTguMWw0Nyw0N2MxLjYsMS42IDQuMiwxLjYgNS44LDBzMS41LTQuMiAxLjQyMTA5ZS0xNC01Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
            <h1>160 Questions Spanning 15 Categories.</h1>
            <p>If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 160 questions spanning 15 categories and 4 difficulty levels, we've got you covered.</p>
            <div className="btn">
            <button>Explore Questions</button>
            </div>
            <div className='cards__container'>
                <ul className='cards'>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Arrays</span>
                            </div>
                            <div className="back">Harder than they seem.</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Graphs</span>
                            </div>
                            <div className="back">Easier than they seem.</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Tries</span>
                            </div>
                            <div className="back">Yes. <span>Tries</span>.Not a typo.</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Linked Lists.</span>
                            </div>
                            <div className="back">Reverse them.</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Binary Trees</span>
                            </div>
                            <div className="back">Invert them.</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Strings</span>
                            </div>
                            <div className="back">"This is a string."</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Dynimic Programming</span>
                            </div>
                            <div className="back">Everyone hates it.</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Searching</span>
                            </div>
                            <div className="back">Searching for the <span>Purchase</span> button?</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Sorting</span>
                            </div>
                            <div className="back">
                            array = [3, 1, 2]<br />
                               sort(array)<br />
                            array == [1, 2, 3]
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Greedy Algorithms</span>
                            </div>
                            <div className="back">Not too greedy.</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Recursion</span>
                            </div>
                            <div className="back">[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Famous Algorithms</span>
                            </div>
                            <div className="back">ヽ( ͡° ͜ʖ ͡°)ﾉ</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Heaps</span>
                            </div>
                            <div className="back">Fancy trees.</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Binary Search Trees</span>
                            </div>
                            <div className="back">Bs trees.</div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card__container">
                            <div className="face">
                                <div className='circle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"fill="currentColor" class="e2Xd79EYQSONjIM1QFK8"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                                </div>
                                <span>Stacks</span>
                            </div>
                            <div className="back">
                                Push. Pop.<br />
                                That about it.
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Categories