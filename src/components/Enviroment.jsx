import React from 'react'

const Enviroment = () => {
  return (
    <div className='enviroment'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" fill="currentColor" class="_gsBWkx7_aDSs7JQH8jr DjDDOPYiIWO0JjBdd_XA"><path d="m121.4 61.6-54-54c-.7-.7-1.8-1.2-2.9-1.2s-2.2.5-2.9 1.2l-54 54c-1.6 1.6-1.6 4.2 0 5.8.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2l47-47v98.1c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1V20.4l47 47c1.6 1.6 4.2 1.6 5.8 0s1.5-4.2 0-5.8z"></path></svg>
        <div className="env__container">
            <div className="left">
                <h1>The Perfect Paratice Enviroments.</h1>
                <p>
                In an ideal world, you'd prepare for coding interviews by writing out solutions to problems in your language of choice, getting some hints if necessary, running your code against test cases, and looking at solutions when done.
                </p>
                <p>
                We've turned that ideal world into the real world. Pick a language. Read the prompt. Write your solution. Run your code. Get some hints. Run your code again. Check the output. Pass the tests. View our solution. Watch our video. All within the same workspace.
                </p>
                <button>Try Our Workspace</button>
            </div>
            <div className="right">
                <div className="image__container">
                    <div className='overlay'></div>
                    <img src="https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/fbbc40f754e2336576a5.png" alt="" />
                    <div className="overlay2"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Enviroment