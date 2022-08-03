import React from 'react'
import {Grid  ,  Typography , TextField , Button , MenuItem ,FormControl , Select} from '@mui/material'
import {OfflineShare , SearchOutlined } from '@mui/icons-material';
import { useForm } from "react-hook-form";
function ShippingInfo() {

    const {
        register,
        handleSubmit,
        reset ,
        formState: { errors },
        trigger,
      } = useForm();
     


  return (
    <Grid container  sx = {{  mt : 1}}>
    <form onSubmit={handleSubmit()}>
    <Grid item lg = {12} md = {12} sm = {12} sx = {{display : "flex" , mb : 3}}>
            <Grid>
                    <Button variant="contained" style = {{backgroundColor : "#7ad0a7" , borderRadius : "10px"}}>
                    login
                    </Button>
            </Grid>
            <Grid sx = {{ml : 1.2}}>
                    <Button variant="contained" style = {{backgroundColor : "white" , borderRadius : "10px" , color : "black"}}>
                    SignUp
                    </Button>
            </Grid>
    </Grid>

     <Grid  item lg = {12} md = {12} sm = {12}>
      <Grid item lg = {12} md = {12} sm = {12} sx = {{mt : 1 , mb : 2}} >
         <Typography varient = "p">
           Shipping Information
         </Typography>
      </Grid>

        <Grid  sx = {{display : "flex" , justifyContent : "space-between" , mb : 1 }}>
    
            <TextField
            placeholder='Email'
            variant="outlined"
            size="small"
            sx={{ width: "14em", marginBottom: "10px" , borderRadius : 10 }}
            name="email"
            type="email"
            {...register("email", {
                required: "Enter Email id",
                pattern: {
                value:
                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Please Enter Valid Email id",
                },
            })}
            onKeyUp={() => trigger("email")}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            />
              

            
                <TextField  variant="outlined" size = "small" 
                placeholder='Address'
                sx = {{width : "14em"  , ml : 2 , borderRadius : 10 ,mr : 2}} type = "Address" name = "Address"
                {...register("Address",{
                required:"Please Enter the value",
                pattern:{
                    value:/^[a-z ,/,.'-]+$/i,
                    message:"Please Enter Valid Address"}}
                )}
                onKeyUp={()=>trigger("Address")}
                error={Boolean(errors.Address)}
                helperText={errors.Address?.message} />


                </Grid>
       

        
                <Grid  sx = {{display : "flex" , justifyContent : "space-between" , mb : 1 , mt : 1}}>
    
                <TextField  variant="outlined" type = "quantity" size = "small"  sx = {{width : "14em" , mr : 2}}
                 placeholder = "First Name"
                name = "FirstName"
                {...register("quantity",{
                    required:"Please Enter the FirstName",})}
                    onKeyUp={()=>trigger("FirstName")}
                    error={Boolean(errors.FirstName)}
                    helperText={errors.FirstName?.message} 

                 />
                  
    
                
                 <TextField  variant="outlined" type = "quantity" size = "small"  sx = {{width : "14em" , mr : 2}}
                 placeholder = "City"
                 name = "City"
                 {...register("City",{
                   required:"Please Enter the value",})}
                   onKeyUp={()=>trigger("City")}
                   error={Boolean(errors.City)}
                   helperText={errors.City?.message} 
          
                   />
    
                    </Grid>

                    <Grid  sx = {{display : "flex" , justifyContent : "space-between" , mb : 1 , mt : 1}}>
    
                    <TextField  variant="outlined" type = "quantity" size = "small"  sx = {{width : "14em" , mr : 2}}
                     placeholder = "Last Name"
                    name = "LastName"
                    {...register("quantity",{
                        required:"Please Enter the LastName",})}
                        onKeyUp={()=>trigger("LastName")}
                        error={Boolean(errors.LastName)}
                        helperText={errors.LastName?.message} 
    
                     />
                      
        
                    
                     <TextField  variant="outlined" type = "quantity" size = "small"  sx = {{width : "14em" , mr : 2}}
                     placeholder = "Portal Code "
                     name = "PortalCode"
                     {...register("PortalCode",{
                       required:"Please Enter the PortalCode",})}
                       onKeyUp={()=>trigger("PortalCode")}
                       error={Boolean(errors.PortalCode)}
                       helperText={errors.PortalCode?.message} 
              
                       />
        
                        </Grid>

                        <Grid  sx = {{display : "flex" , justifyContent : "space-between" , mb : 1 , mt : 1}}>
    
                        <TextField  variant="outlined" type = "quantity" size = "small"  sx = {{width : "14em" , mr : 2}}
                         placeholder = "Phone Number"
                        name = "PhoneNumber"
                        {...register("quantity",{
                            required:"Please Enter the PhoneNumber",})}
                            onKeyUp={()=>trigger("PhoneNumber")}
                            error={Boolean(errors.PhoneNumber)}
                            helperText={errors.PhoneNumber?.message} 
        
                         />
                          
            
                        
                         <FormControl size = "small" sx = {{width : "14em" , mr : 2 }}>
                            <Select 
                            name = "states"
                            {...register("fooditems",{
                                required:"Please Enter the value",})}
                                onKeyUp={()=>trigger("states")}
                                error={Boolean(errors.states)}
                                helperText={errors.states?.message} 
                            >
                                <MenuItem value="samosa">Delhi</MenuItem>
                                <MenuItem value="jalebi">Punjab</MenuItem>
                                <MenuItem value="Gulab jamun">UttarPradesh</MenuItem>
   
                            </Select>
                            </FormControl>
            
                            </Grid>
                    
       

    
    </Grid>
    </form>
    </Grid>


  









  )
}

export default ShippingInfo