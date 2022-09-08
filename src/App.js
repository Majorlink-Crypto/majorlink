import React from 'react'
import HomePage from './Pages/HomePage';
import { 
  BrowserRouter,
  Routes,
  Route,} from 'react-router-dom'
import CheckoutPage from './Pages/CheckoutPage';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <div className='font-yukita'>
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<HomePage/>}></Route>
       <Route path='/checkout' element={<CheckoutPage/>}></Route>
       <Route path="*"  element={<ErrorPage/>}/>
   </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
