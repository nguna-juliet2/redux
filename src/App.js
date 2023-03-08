import  Cart from '../src/Components/trials/Cart/Cart';
import Layout from '../src/Components/trials/Layout/Layout'
import Products from './Components/trials/Shop/Product';

function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;







































// // import NavBar from './Components/Users/NavBar';
// import './App.css';
// import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import React from 'react';
// import Login from './Components/Users/Login';
// import SignUp from './Components/Users/Signup';
// import ErorrLoad from './Components/Ui/ErrorLoad';
// import Home from './Components/Users/Home';
// import Cart from './Components/cart/Cart';
// import Userprofile from './Components/Users/Userprofile';
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element ={<Home/>}/>
//         <Route exact path="/Home" element ={<Home/>}/>
//         <Route exact path="/signup" element ={<SignUp/>}/>
//         <Route exact path="/login" element ={<Login/>}/>
//         <Route exact path="*" element ={<ErorrLoad/>}/>
//         <Route exact path="/cart" element ={<Cart/>}/>
//         <Route exact path="/userprofile" element ={<Userprofile/>}/>
           
         
//       </Routes>
//     </BrowserRouter>






    
   
//   );
// }

// export default App;
