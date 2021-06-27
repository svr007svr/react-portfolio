import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Contact.css'

function Contact() {
    
    return (
        <div>
            

        <div className='container contact' heigh='100vh' width='100%'>
        
        
    
       
        <form className='form'>
        <h1 className='text-center text-dark title'>Contact Us</h1>

    
        <div className='form-group m-1 p-3 '>
            <input type='text' name='name' className='text-dark  form-control' placeholder='Enter Name'></input>
        </div>
        
        
        <div className='form-group m-2 p-3'>
              <input type='text' name='email' className='text-dark  form-control' placeholder='Enter email'></input>
        </div>
        
        
        <div className='form-group m-2 p-3'>
            <input type='text' name='mob' className='text-dark  form-control' placeholder='Enter Mobile No. with country code'></input>
        </div>
        
        
        <div className='form-group m-2 p-3'>
           <textarea name='address' className='text-dark  form-control' placeholder='Your Message'></textarea> 
        </div>

        <center>
        <button className='btn mt-3  btn-success btn-block col-5'>Submit</button></center>
   

        </form>
     

        </div>
                



{/* 
<div class="container">
<h1 className='text-dark'>Contact Us</h1>

  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Country</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Subject</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit" />
    </div>
  </form>
</div> */}



    </div>
    )
}

export default Contact


