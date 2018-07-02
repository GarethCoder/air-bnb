import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import Hello from './components/hello';

const greeting = <div> 
                    <Hello firstName="Gareth" lastName="Williams"/>
                    <Hello firstName="John" lastName="Doe"/>
                </div>

ReactDOM.render( greeting , document.getElementById('root'));
// registerServiceWorker();