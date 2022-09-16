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
    <div className='font-yukita'>
      <BrowserRouter>
      <ToastContainer />
       <Routes>
       <Route path='/' element={<HomePage/>}></Route>
       <Route path='/checkout' element={<CheckoutPage/>}></Route>
       <Route path='/adminye' element={<AdminLogin/>}></Route>
       <Route path='/construction' element={<Construction/>}></Route>
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
