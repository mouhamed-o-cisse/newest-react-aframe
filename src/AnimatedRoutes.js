import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React from "react";

// import {} from 'framer-motion/dist/framer-motion'
import {AnimatePresence} from 'framer-motion'

// Pages 
// import HomePage from './pages/HomePage';
import Page1 from './Page1';
import Page2 from './Page2';
import HomePage from './HomePage';

function AnimatedRoutes (){
    const location = useLocation();

    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>

        {/* ESSENTIALS */}
        <Route path='/' element={<Navigate replace to='/home' />} />
        {/* <Route path='/home' element={<HomePage />} /> */}
        {/* <Route path='/not-found' element={<NotFoundPage />} /> */}
        {/* <Route path='*' element={<NotFoundPage />} /> */}
  
        {/* Pages routes  */}
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/home' element={<HomePage />} />

        </Routes>
        </AnimatePresence>
    )

}
export default AnimatedRoutes;