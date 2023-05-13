import React from 'react'


const Course = () => {
  return (
    <div className='course'>
        <img className='uparrow' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTEyMS40LDYxLjZsLTU0LTU0Yy0wLjctMC43LTEuOC0xLjItMi45LTEuMnMtMi4yLDAuNS0yLjksMS4ybC01NCw1NGMtMS42LDEuNi0xLjYsNC4yIDAsNS44IDAuOCwwLjggMS44LDEuMiAyLjksMS4yczIuMS0wLjQgMi45LTEuMmw0Ny00N3Y5OC4xYzAsMi4zIDEuOCw0LjEgNC4xLDQuMXM0LjEtMS44IDQuMS00LjF2LTk4LjFsNDcsNDdjMS42LDEuNiA0LjIsMS42IDUuOCwwczEuNS00LjIgMS40MjEwOWUtMTQtNS44eiIgZmlsbD0iIzAyMjAzYyIvPgogIDwvZz4KPC9zdmc+Cg==" alt="Up Arrow" />
        <div className="course__container">
            <div className="left">
                <div className="image__container">
                    <img src="https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/06df1ca4f429059c4945.jpg" alt="" />
                    <div className="overlay"></div>
                </div>
            </div>
            <div className="right">
                <h1>Data Structures Crash Course.</h1>
                    <p className='first'>Algorithms and data structures go hand in hand; the solution to virtually any coding interview problem will require the implementation of some kind of abstract data type in order to access and manipulate information.
                    </p>
                    <p>
                    Our video series on data structures is the ultimate crash course on this important topic. We cover fundamental concepts pertaining to memory, complexity analysis, and Big O notation, and then break down popular data structures to give you a detailed look at how these concepts are applied under the hood. Linked Lists and Binary Trees will never instill fear in your heart again.
                    </p>
                    <div className='btn'>
                    <button>Start The Course</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Course