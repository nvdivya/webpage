import React from 'react';
import Navbar from './navbar';
import './styles.css';
import "./icons.jpg";
const app = () => {
    return (
        <div >
            <Navbar />
            <div className="panel" >
                <div className="content" style={{color:"white",align:"right",paddingTop:"150px"}}>
                 <h7 align="center">URBAN CLEANING EXPERT</h7>
                 <h1>Quality home cleaning servcies,  on demand</h1>
                 <h3>Experienced, hand-picked professionals to serve you at your doorstep</h3>
                 <div className="" >
                    <h6>Where do you need a service?</h6>
                    <div class="dropdown">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">Select your city
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">Delhi NCR</a></li>
                            <li><a href="#">Other</a></li>
                        </ul>
                    </div>
                 </div>
                </div>
            </div>
            <div className="panel1">
                <div className="content">
                </div>
            </div>
            <div class="container-fluid bg-3 text-center">    
  
  <div class="row" >
    <div class="col-sm-5" >
      <h2 style={{backgroundcolor:"blue"}}>About Urban Cleaning Expert</h2>
      <p>
      Urban Cleaning Expert is one of the most trusted service providers in India.
       We provide excellent services for several home appliance care, home care and 
       Cleaning services. Our services are trusted by a large number of clients and Industries. 
       It is the result of our dedicated teamwork, which makes us one of the most trusted service
       providers across the nation. Our company is staffed with expert and well-trained professionals 
       who carry several years of experience with them and all of them work tirelessly to earn our customer satisfaction.
      </p>
    </div>
    <div class="col-sm-4"> 
    <div className="">
        <table >
            <tr>
                <td><img src="https://i.ibb.co/vst2cwv/Group-7121.webp" alt="" /></td>
                <td><img src="https://i.ibb.co/WDKWtBL/Group-7122.webp" alt="" /></td>
            </tr>
            <tr>
                <td> <img src="https://i.ibb.co/gdBfDfv/Group-7123.webp" alt="" /></td>
                <td><img src="https://i.ibb.co/L6bbzz8/Group-7124.webp" alt="" /></td>
            </tr>
        </table>   
    </div>
    </div>
  </div>
</div>
<div className="layer">
    <table>
        <tr>
            <td style={{color:"blue"}}>TOP LOCATIONS</td>
            <td>Noida.Delhi.Gurgoan.Guhawati.Agra.Faridabad.Amritsar.Banglore.Bhopal.Mumbai</td>
        </tr>
        <tr>
            <td style={{color:"blue"}}>Contact Us</td>
            <td>Phone: +91 7827621417  &nbsp;&nbsp;&nbsp;&nbsp; Email:support@roservicecenter.live</td>
        </tr>
    </table>
    <table>
        <tr >                
            <td>About Us</td>
            <td>Blog</td>
            <td>Near me</td>
            <td>Terms&Conditions</td>
            <td>Privacy Policy</td>
            <td>Contact Us</td>
        </tr>
        
    </table> 

</div>
<div className="panel2" >

</div>



</div>
    );
};

export default app;