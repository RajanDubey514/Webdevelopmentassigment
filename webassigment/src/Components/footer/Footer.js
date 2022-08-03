import React  from 'react'
import {Grid , Typography , Button } from '@mui/material'
import {KeyboardBackspace } from '@mui/icons-material';


function Footer() {
   return (
      
      <>  
    <Grid container  sx = {{  mt : 1}}>
      <Grid item lg = {6} md = {6} sm = {12} sx = {{display : "flex"}}>
         <Grid sx = {{mt : 0.2}}>
             <KeyboardBackspace sx = {{fontSize : 20  }} /> 
         </Grid>
         <Grid>
            <Typography varient = "p" sx = {{fontSize : 16 , ml : 2}}>
               Back 
            </Typography> 
         </Grid>
      </Grid>
      <Grid item lg = {6} md = {6} sm = {12}  sx = {{display : "flex" , justifyContent : "flex-end"}}>
      <Grid sx = {{mr : 3}}>
         <Button variant="contained" style = {{backgroundColor : "white" , borderRadius : "10px" , color : "black"}}>Continue Shoping</Button>
      </Grid>
      <Grid sx = {{mr : 2}}>
      <Button variant="contained" style = {{backgroundColor : "#7ad0a7" , borderRadius : "10px"}}>
         Proceed to Payment
      </Button>
        
      </Grid>
   </Grid>
  
         </Grid>
    
      </>
  )
}

export default Footer