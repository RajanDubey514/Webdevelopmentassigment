import React  from 'react'
import {Grid  , Tabs , Box , Typography , Tab ,Divider} from '@mui/material'
import {OfflineShare , SearchOutlined , ShoppingCartOutlined , PersonOutlineOutlined} from '@mui/icons-material';



function LinkTab(props) {
   return (
     <Tab
       component="a"
       onClick={(event) => {
         event.preventDefault();
       }}
       {...props}
     />
   );
 }
 
function Header() {
   
   
   return (
      
      <>  
    <Grid container  sx = {{  mt : 1}}>
      <Grid item lg = {4} md = {4} sm = {12} sx = {{display : "flex"}}>
         <Grid>
             <OfflineShare sx = {{fontSize : 42 }} /> 
         </Grid>
         <Grid>
            <Typography varient = "p" sx = {{fontSize : 22  , color : "red" , ml : 0.2}}>
               E - 
            </Typography> 
         </Grid>
         <Grid>
         <Typography varient = "p" sx = {{fontSize : 22 , ml : 0.2 }}>
            Shop
         </Typography> 
      </Grid>
      </Grid>
      <Grid item  lg = {4} md = {4} sm = {12}>
               <Box sx={{ width: '100%' }}>
               <Tabs >
               <LinkTab label="Men"  sx = {{color : "black" , fontSize : 14 }}/>
               <LinkTab label="Women"  sx = {{color : "black" , fontSize : 14 }}/>
               <LinkTab label="Child" sx = {{color : "black" , fontSize : 14 }}/>
               </Tabs>
            </Box>
      </Grid>
      <Grid item lg = {4} md = {4} sm = {12} sx = {{display : "flex"  , justifyContent : "flex-end" , mt : 1 }} >
      <Grid sx = {{ }}>
      <SearchOutlined sx = {{fontSize : 24 }} /> 
      </Grid>
      <Grid sx = {{ ml : 4}}>
      <ShoppingCartOutlined sx = {{fontSize : 24  }} /> 
      </Grid>
      <Grid sx = {{ ml : 4}}>
      <PersonOutlineOutlined sx = {{fontSize : 24 }} /> 
     </Grid>
      </Grid>
         
      </Grid>
      <Divider  sx = {{width : "auto" , mt : 1.5}}/>
        

      <Grid container  sx = {{  mt : 4 , mb : 4}}>
      <Grid item lg = {6} md = {6} sm = {12} sx = {{display : "flex"}}>
         <Grid>
            <Typography varient = "p" sx = {{fontSize : 16 , ml : 2}}>
               Shipping and Payment
            </Typography> 
         </Grid>
      </Grid>
      <Grid item lg = {6} md = {6} sm = {12}  sx = {{}}>
      <Grid sx = {{mr : 2 , display : "flex" , justifyContent : "flex-end"}}>
         Hello
        
      </Grid>
   </Grid>
  
         </Grid>
    
      </>
  )
}

export default Header


























