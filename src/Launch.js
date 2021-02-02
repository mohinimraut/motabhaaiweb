import React from 'react'
import ReactDOM from 'react-dom';
import firebase from 'firebase'

import discover from '../src/images/discover-02.png';
import facebook from '../src/images/facebook.png';
import instagram from '../src/images/instagram.png';
import twitter from '../src/images/twitter.png';

import logo_subtext from '../src/images/logo_subtext.png';


var firebaseConfig = {
    apiKey: "AIzaSyCXEiszXdQb9EqEb1kYmRsCJo9TPfYujc4",
    authDomain: "test-form-eb682.firebaseapp.com",
    projectId: "test-form-eb682",
    storageBucket: "test-form-eb682.appspot.com",
    messagingSenderId: "25020950362",
    appId: "1:25020950362:web:383e4622d0e8826d40f563"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //Reference emailInfo collections
let emailInfo=firebase.database().ref("infos")
var countDownDate = new Date("Feb 27, 2021 15:37:25").getTime();
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo1").innerHTML = days;
    document.getElementById("demo2").innerHTML =  hours;
   

    document.getElementById("demo3").innerHTML = minutes;
      

    document.getElementById("demo4").innerHTML =  seconds;
  
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo1").innerHTML = "EXPIRED";
      document.getElementById("demo2").innerHTML = "EXPIRED";
      document.getElementById("demo3").innerHTML = "EXPIRED";
      document.getElementById("demo4").innerHTML = "EXPIRED";
    }
  }, 1000);


 

  class Launch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.saveEmailInfo = this.saveEmailInfo.bind(this);
      }
      handleChange(event) {
        this.setState({email: event.target.value});
      }
    
      handleSubmit(event) {
          const email=this.state.email;
        alert('A name was submitted: ' + this.state.email);
  
        event.preventDefault();

 this.saveEmailInfo(email);

        alert("hhhhhhhhh"+email)
      }

      //save info to Firebase
saveEmailInfo(email){
let newContactInfo=emailInfo.push();
newContactInfo.set({
    email:email
})

      }

    render(){
        return (
            <div class="container">
         
           <div className="row">
    
        {/* <div className="col-md-5 pt-5 pt-lg-0 ordr-2 order-lg-1 align-self-center">
        <div class="hometitle">Free Digital platform for sellers to <strong>promote,manage</strong> & <strong>sell</strong> their goods and services. </div>
        <div className="mt-3">
        <NavLink to="/service" className="btn-get-started">Learn More</NavLink>
        </div>
        </div>
        <div className="homeContainer col-lg-7 order-1 order-lg-2 header-img">
        <img src={web} className="imgs img-fluid animated" alt="home img"/>
        </div> */}
       
       <div className="col-sm-6" style={{backgroundColor:"#cce6ff"}}>
         
           <div class="row hometitle1 ml-2 justify-content-center text-center" style={{fontFamily:"Comfortaa",fontWeight:"bold"}}>
           Free Digital platform 
           </div>
           <div>
           <div class ="row justify-content-center text-center" style={{fontFamily:"Comfortaa",fontWeight:"bold"}} >
    
    for sellers to promote,manage &
    </div>
    <div class ="row justify-content-center text-center pl-5" style={{fontFamily:"Comfortaa",fontWeight:"bold"}} >
    
     sell their goods and services.
    </div>
    
              </div>
          
           <div class="row justify-content-center text-center">
           <img src={discover} class="img-fluid freedigitalman" alt="home img"/>  
           </div>
    
           <div class="row justify-content-center text-center" style={{color:"#2c3d63",fontWeight:"bold",fontFamily:"Comfortaa"}}>
           <p id="demo"></p>
               <div class="col-2" style={{flexDirection:"column",}}>
               <div class="launchnum">
               <p id="demo1"></p>
               </div>
               <div>
                   Days
               </div>
               </div>
              
              <div class="col-2" style={{flexDirection:"column"}}>
              <div class="launchnum">
              <p id="demo2"></p>
               </div>
               <div>
                   Hours
               </div>
              </div>
              
              <div class="col-2"style={{flexDirection:"column"}}>
              <div class="launchnum">
              <p id="demo3"></p>
               </div>
               <div>
                   Minutes
               </div> 
              </div>
               
               <div class="col-2" style={{flexDirection:"column"}}>
               <div class="launchnum">
               <p id="demo4"></p>
               </div>
               <div>
                   Second
               </div>
               </div>
               
           </div>
       </div>
    
       <div className="col-sm-5  ml-2 mt-5">
       <div class="row mt-5 justify-content-center text-center">
           <img src={logo_subtext}  alt="home" style={{width:'150px',height:'100px'}}/>  
           </div>
           <div class="row " style={{fontSize:"20px"}}>
               <p style={{letterSpacing:"10px"}}>STAY TUNED</p>
           </div>
           <div class="row justify-content-center text-center">
               <h3 style={{fontFamily:"Comfortaa",fontWeight:"bold",color:"#2c3d63",fontSize:"40px"}}>We Will Launch Soon</h3>
           </div>
           <div class="row">
               <p style={{fontFamily:"Comfortaa"}}>Subscribe to get notification as soon as we launch!</p>
           </div>
         <form class="emailstorecontainer" onSubmit={this.handleSubmit}>
      <div class="row justify-content-center text-center" style={{flexDirection:"row"}}>
          <div className="col-7">
          <input type="text" value={this.state.email} onChange={this.handleChange} class="form-control email" placeholder="Enter your email" />
          </div>
    
          <div className="col-5">
          <button style={{fontFamily:"Comfortaa",fontWeight:"bold",backgroundColor:"#e6f2ff"}} type="submit" value="Submit" class="btn btn-info homebuttontest">NOTIFY ME</button>
          </div>
      </div>
      </form>
    
      <div class="row justify-content-center text-center hometitle ml-2 m-5">
          <div class="col-1">
          <img src={twitter}  alt="home img" style={{width:'20px',height:'20px'}}/>  
     
          </div>
          <div class="col-1">
          <img src={facebook}  alt="home img" style={{width:'20px',height:'20px'}}/>  
     
          </div>
          <div class="col-1">
          <img src={instagram}  alt="home img" style={{width:'20px',height:'20px'}}/>  
     
          </div>
      </div>
    
     
     <div class="row" style={{color:"white",backgroundColor:"#2c3d63",fontFamily:"Comfortaa",fontSize:"16px",marginTop:"150px"}}>
         <div class="col-sm-6">
         Add:B/22 103 Ketki Sector 1 Shanti Nagar Opp Shanti Shopping Center, Mira Road, Thane, Maharashtra 401107
    
         </div>
        
         <div class="col-sm-6">
             Email:rockpolt@gmail.com
         </div>
     </div>
    
       </div>
    
    
    
    
    
    
    
       
        </div>
    
    
    
          </div>
        )
    }
   
}

export default Launch
