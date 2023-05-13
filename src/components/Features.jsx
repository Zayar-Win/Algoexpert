import React from 'react'

const Features = () => {
  return (
    <div className='features'>
        <div className="feature__container">
            <h1>A Better Way to Prep for Coding Interviews.</h1>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Cracking the Coding Interviews</th>
                    <th>LeetCode</th>
                    <th className='algo'>
                        <img src="data:image/png;base64,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" alt="" />
                        AlgoExpert
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>100+ Practice Question</th>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Data Structures Content</th>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Guided Format</th>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Coding Workspace</th>
                        <td>
                        <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Multiple Programming Language</th>
                        <td>
                        <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>High Quality Resolution</th>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                        <td>
                        <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Video Explantations</th>
                        <td>
                        <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                        <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Mock Interviews</th>
                        <td>
                        <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                        <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>All in One Platform</th>
                        <td>
                        <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                        <div className='error'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="error t8zVegKn96rsCc2Wgxs7"><path d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg>
                            </div>
                        </td>
                        <td>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor" class="WqkN5LwXaRXfKAalta8j X0uO4d08LpBk2wimt17I"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Features