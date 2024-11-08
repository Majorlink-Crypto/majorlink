import React, { useEffect, useState } from 'react'
import HomePage from './Pages/HomePage';
import { 
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom'
import CheckoutPage from './Pages/CheckoutPage';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './Pages/ErrorPage';
import AdminLogin from './Pages/Admin/AdminLogin';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import Unauthorized from './Pages/Unauthorized';
import Services from './Pages/Admin/Services';
import Construction from './Pages/Construction';
import About from './Pages/About';

import 'react-toastify/dist/ReactToastify.css';
import ContactPage from './Pages/ContactPage';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import Aml from './Pages/Aml';
import Gallery from "./Pages/gallery";

function App() {
  const [isloggedin, setisloggedin] = useState(false)

  useEffect(() => {
        if (localStorage.getItem('user')!== null ){
          setisloggedin(true)
        }else{
          setisloggedin(false)
        }
  }, [])

  return (
    <div className='font-aeonikmedium'>
      <BrowserRouter>
      <ToastContainer />
       <Routes>
       <Route path='/' element={<HomePage/>}></Route>
       <Route path='/checkout' element={<CheckoutPage/>}></Route>
       <Route path='/adminye' element={<AdminLogin/>}></Route>
       <Route path='/construction' element={<Construction/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path="/gallery" element={<Gallery />}/>
       <Route path='/contact' element={<ContactPage/>}></Route>
       <Route path='/terms' element={<Terms/>}></Route>
       <Route path='/privacy' element={<Privacy/>}></Route>
       <Route path='/aml' element={<Aml/>}></Route>
       {/*Protected Route*/}
       <Route path='/services' element={(isloggedin === true ? <Services/>  : <Unauthorized/>)}></Route>
       <Route path='/admindashboard' element={(isloggedin === true? <AdminDashboard/>  : <Unauthorized/>)}></Route>
        {/*Protected Route*/}
       <Route path="*"  element={<ErrorPage/>}/>
   </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
