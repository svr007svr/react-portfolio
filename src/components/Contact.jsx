import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Contact.css'

function Contact() {
    
    return (
        <div>
            

        <div className='container contact' heigh='100vh' width='100%'>
        <center> <div className='card m-1 p-3'>
        <form>
     <h1 className='text-center text-white'>Contact Us</h1>

        <div className='form-group m-2 p-3 col-s-9'>
            <center><input type='text' name='name' className='text-white col-sm-9 form-control' placeholder='Enter Name'></input></center>
        </div>
        <div className='form-group m-2 p-3'>
            <center>  <input type='text' name='email' className='text-white col-sm-9 form-control' placeholder='Enter email'></input></center>
        </div>
        <div className='form-group m-2 p-3'>
         <center>   <input type='text' name='mob' className='text-white col-sm-9 form-control' placeholder='Enter Mobile No. with country code'></input></center>
        </div>
        <div className='form-group m-2 p-3'>
         <center>  <textarea name='address' className='text-white col-sm-9 form-control' placeholder='Your Message'></textarea> </center>
        </div>
        <center><button className='btn mt-3 btn-success btn-block col-5'>Submit</button></center>
        </form>
     

        </div>
        </center>
        </div>







        </div>
    )
}

export default Contact


