import React from 'react'
import {Grid  ,  Typography , TextField , Button , Box} from '@mui/material'
import img1 from '../Image/paypal.png';
import img2 from '../Image/discover.png';
import img3 from '../Image/slice.png';
import img4 from '../Image/mastercard.png';
import img5 from '../Image/visa.png';

function PaymentMethod() {


     


  return (
    <Grid container  sx = {{  mt : 2}}>
    
   

     <Grid  item lg = {12} md = {12} sm = {12}>
      <Grid item lg = {12} md = {12} sm = {12} sx = {{mt : 1 , mb : 3}} >
         <Typography varient = "p">
         Payment Method
         </Typography>
      </Grid>
      
      <Grid item lg = {12} md = {12} sm = {12} sx = {{mt : 1 , mb : 2}} >
       <Grid sx = {{display : "flex" , justifyContent : "space-between"}}>
       <Box sx = {{width : "6em" , height : "2em" , border : "1px solid black" , borderRadius : "10px"}}>
       <Grid sx = {{ml : 4}}>
       <img src={img1} width = "30px"  height = "30px"  sx = {{}}/>
       </Grid>
       </Box>
       <Box sx = {{width : "6em" , height : "2em" , border : "1px solid black" , borderRadius : "10px"}}>
       <Grid sx = {{ml : 4}}>
       <img src={img5} width = "30px"  height = "30px"  sx = {{}}/>
       </Grid>
       </Box>
       <Box sx = {{width : "6em" , height : "2em" , border : "1px solid black" , borderRadius : "10px"}}>
       <Grid sx = {{ml : 4}}>
       <img src={img4} width = "30px"  height = "30px"  sx = {{}}/>
       </Grid>
       </Box>
       </Grid>
   </Grid>
      

        
            
   <Grid item lg = {12} md = {12} sm = {12} sx = {{mt : 1 , mb : 2}} >
   <Grid sx = {{display : "flex" , justifyContent : "space-between"}}>
   <Box sx = {{width : "6em" , height : "2em" , border : "0.5px solid black" , borderRadius : "10px"}}>
   <Grid sx = {{ml : 4}}>
   <img src={img4} width = "30px"  height = "30px"  sx = {{}}/>
   </Grid>
   </Box>
   <Box sx = {{width : "6em" , height : "2em" , border : "0.5px solid black" , borderRadius : "10px"}}>
   <Grid sx = {{ml : 4}}>
   <img src={img2} width = "30px"  height = "30px"  sx = {{}}/>
   </Grid>
   </Box>
   <Box sx = {{width : "6em" , height : "2em" , border : "0.5px solid black" , borderRadius : "10px"}}>
   <Grid sx = {{ml : 4}}>
   <img src={img3} width = "30px"  height = "30px"  sx = {{}}/>
   </Grid>
   </Box>
   </Grid>
</Grid>
  
                
    



<Grid item lg = {12} md = {12} sm = {12} sx = {{mt : 1 , mb : 3}} >
<Typography varient = "p">
Delivery Method
</Typography>
</Grid>

<Grid item lg = {12} md = {12} sm = {12} sx = {{mt : 1 , mb : 2}} >
<Grid sx = {{display : "flex" , justifyContent : "space-between"}}>
<Box sx = {{width : "6em" , height : "2em" , border : "1px solid black" , borderRadius : "10px"}}>
<Grid sx = {{ml : 4}}>
<img src={img1} width = "30px"  height = "30px"  sx = {{}}/>
</Grid>
</Box>
<Box sx = {{width : "6em" , height : "2em" , border : "1px solid black" , borderRadius : "10px"}}>
<Grid sx = {{ml : 4}}>
<img src={img5} width = "30px"  height = "30px"  sx = {{}}/>
</Grid>
</Box>
<Box sx = {{width : "6em" , height : "2em" , border : "1px solid black" , borderRadius : "10px"}}>
<Grid sx = {{ml : 4}}>
<img src={img4} width = "30px"  height = "30px"  sx = {{}}/>
</Grid>
</Box>
</Grid>
</Grid>



   
<Grid item lg = {12} md = {12} sm = {12} sx = {{mt : 1 , mb : 2}} >
<Grid sx = {{display : "flex" , justifyContent : "space-between"}}>
<Box sx = {{width : "6em" , height : "2em" , border : "0.5px solid black" , borderRadius : "10px"}}>
<Grid sx = {{ml : 4}}>
<img src={img4} width = "30px"  height = "30px"  sx = {{}}/>
</Grid>
</Box>
<Box sx = {{width : "6em" , height : "2em" , border : "0.5px solid black" , borderRadius : "10px"}}>
<Grid sx = {{ml : 4}}>
<img src={img2} width = "30px"  height = "30px"  sx = {{}}/>
</Grid>
</Box>
<Box sx = {{width : "6em" , height : "2em" , border : "0.5px solid black" , borderRadius : "10px"}}>
<Grid sx = {{ml : 4}}>
<img src={img3} width = "30px"  height = "30px"  sx = {{}}/>
</Grid>
</Box>
</Grid>
</Grid>

  
                      
                    
       

    
    </Grid>
   
    </Grid>


  









  )
}

export default PaymentMethod