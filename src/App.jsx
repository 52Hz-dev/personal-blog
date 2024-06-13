import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetail from './components/BlogDetail';
import EditBlog from './components/EditBlog';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/pages/About';
import Sample from './components/pages/Sample';
import Contact from './components/pages/Contact';


function App() {

  return (
    <>
       <NavBar></NavBar>
       <Header></Header>
        <Routes>
            <Route path='/' element={ <Blogs />} />
            <Route path='/create' element={ <CreateBlog />} />
            <Route path='/blog/:id' element={ <BlogDetail />} />
            <Route path='/blog/edit/:id' element={ <EditBlog />} />
            <Route path='/about' element={ <About />} />
            <Route path='/sample' element={ <Sample/>} />
            <Route path='/contact' element={ <Contact />} />
        </Routes>   
        <ToastContainer />   
    </>
  )
}

export default App
