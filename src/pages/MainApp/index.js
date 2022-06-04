import React from 'react'
import {Routes, Route } from 'react-router-dom';
import { Footer, Header } from '../../components/items';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import './MainApp.scss';

const MainApp = () => {
  return (
    <div>
      <div className='main-app-wrapper'>
        <Header />
        <div className='content-wrapper'>
            <Routes>
              <Route exact path='create-blog' element={<CreateBlog />} />
              <Route exact path='/detail-blog' element={<DetailBlog />} />
              <Route exact path='/' element={<Home />} />
            </Routes>
        </div>
        {/* <Footer /> */}
      </div>      
    </div>
  )
}

export default MainApp;