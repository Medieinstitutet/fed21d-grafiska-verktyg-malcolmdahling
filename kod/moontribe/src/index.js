import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound';
import { Home } from './components/Home/Home';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Favicon from 'react-favicon'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <HelmetProvider>

            <Helmet>
                <title>MOONTRIBE</title>
            </Helmet>


            {/*FONTS*/}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Jacques+Francois&display=swap" rel="stylesheet"></link>
            {/*FONTS*/}

            <Favicon url="https://raw.githubusercontent.com/Medieinstitutet/fed21d-grafiska-verktyg-malcolmdahling/main/kod/moontribe/src/images/favicon.png" />

            <HashRouter>
                <Routes>
                    <Route index element={<Home></Home>}></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                </Routes>
            </HashRouter>

        </HelmetProvider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
