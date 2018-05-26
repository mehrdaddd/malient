import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux';
import Header from './components/header/header';
import Routes from './routes/index';
import App from './routes/App';
import Footer from "./components/footer/Footer";




const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
    <BrowserRouter>
    <div >
    <Header />
    <main>
    <Routes />
    </main>
    <Footer  />
    </div>
    </BrowserRouter>
    </Provider>
), document.getElementById('root'));




// Enable hot relading
module.hot.accept();