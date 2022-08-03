import React from 'react'
import {Grid  ,  Typography , TextField , Button , Box , Avatar , Stack } from '@mui/material'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function YourCart() {


     


  return (
    <Grid container  sx = {{  mt : 2}}>
    
   

     <Grid  item lg = {12} md = {12} sm = {12}>
      <Grid item lg = {12} md = {12} sm = {12} sx = {{mt : 1 , mb : 3}} >
         <Typography varient = "p">
         Your Cart
         </Typography>
      </Grid>
        <Grid  item lg = {12} md = {12} sm = {12}>
           
             <Grid sx = {{display : "flex" , mb : 2  }}>
              <Grid  item lg = {4} md = {4} sm = {4}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />  
              </Grid> 
              <Grid item lg = {6} md = {6} sm = {6}>
              <Grid>
                  <Typography varient = "p" sx = {{fontSize : 12 }}> T- shirt</Typography>
              </Grid>
              <Grid>
                  <Typography varient = "p" sx = {{fontSize : 12 }}> Summer Vibes</Typography>
              </Grid>
              <Grid>
              <Typography varient = "p" sx = {{fontSize : 12 }}> #261311</Typography>
            </Grid>
              </Grid>
             </Grid>
                   

          
           
        
        </Grid>
     
        <Grid  item lg = {12} md = {12} sm = {12}>
           
        <Grid sx = {{display : "flex" , mb : 2  }}>
         <Grid  item lg = {4} md = {4} sm = {4}>
         <Avatar
           alt="Remy Sharp"
           src="/static/images/avatar/1.jpg"
           sx={{ width: 56, height: 56 }}
         />  
         </Grid> 
         <Grid item lg = {6} md = {6} sm = {6}>
         <Grid>
             <Typography varient = "p" sx = {{fontSize : 12 }}> T- shirt</Typography>
         </Grid>
         <Grid>
             <Typography varient = "p" sx = {{fontSize : 12 }}> Summer Vibes</Typography>
         </Grid>
         <Grid>
         <Typography varient = "p" sx = {{fontSize : 12 }}> #261311</Typography>
       </Grid>
         </Grid>
        </Grid>
   
   </Grid>
                      
                    
   <Grid item lg = {12} md = {12} sm = {12} sx = {{mt : 1 , mb : 3}} >
      <Box style = {{ backgrounColor : "#f1f1f1" }} sx = {{width : "15em" , height : "3em" , borderRadius : "12px" , display : "flex" , border : "0.6px solid black" }}>
      <Grid item lg = {6} md = {6} sm = {6} sx = {{mt : 1.2}}>
      <Typography varient = "p" sx = {{fontSize : 14}}>
        Total Cost
    </Typography>
    </Grid>  
    <Grid item lg = {4} md = {4} sm = {4} sx = {{mt : 1.2}}>
    <Typography varient = "p">
      $159,98
    </Typography>
   </Grid>  
      </Box>
    </Grid>




    <Grid item lg = {12} md = {12} sm = {12} sx = {{ display : "flex"}}  >
   
    <Grid item lg = {2} md = {2} sm = {2} sx = {{mt : 1.2}}>
      
           <LocalShippingOutlinedIcon/>
  </Grid>  

     
    <Grid item lg = {6} md = {6} sm = {6} sx = {{mt : 1.2}}>
      
    <Typography varient = "p" sx = {{fontSize : 14}}>
      You are $30,20 away <br/> from free shipping
   </Typography>
    </Grid>  
  </Grid>
    </Grid>
   
    </Grid>


  









  )
}

export default YourCart