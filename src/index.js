import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Button from "./Bt";
import Modal from './Ml'
import Nav from './Navi'
import Layout from './Lo'
import Form from './Fm'
import Multimedia from './Mm'

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App/><Button/><Modal/><Nav/>
    <Layout/>
    <Form/><Multimedia/></div>, document.getElementById('root'));
//registerServiceWorker();
