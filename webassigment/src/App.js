import  React from 'react';
import {Grid  } from '@mui/material';
import Header from './Components/header/Header';
import Footer from "./Components/footer/Footer";
import test from './Components/test';
import ShippingInfo from './Components/Shiping info/ShippingInfo';
import PaymentMethod from './Components/Payment method/PaymentMethod';
import YourCart from './Components/YourCart/YourCart';
function App() {
  return (
    <Grid container> 
 
    <Grid item lg = {12}  md = {12}  sm = {12}>
       <Header/>
    </Grid>
        <Grid  item lg = {12}  md = {12}  sm = {12} sx = {{display : "flex" , justifyContent : "space-between"}}>
         <Grid item lg = {3}  md = {3}  sm = {3}>
           <ShippingInfo/>
         </Grid>
         <Grid item lg = {3}  md = {3}  sm = {3} sx = {{ml : 3}}>
         <PaymentMethod/>
       </Grid>
       <Grid item lg = {4}  md = {4}  sm = {4}>
       <YourCart/>
     </Grid>
       
     </Grid>
     <Grid item lg = {12}  md = {12}  sm = {12} sx = {{mt : 2}}>
     <Footer/>
     </Grid>
     </Grid>
  
  );
}

export default App;
