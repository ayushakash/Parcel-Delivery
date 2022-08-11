import React ,{ useState } from 'react'



export default function Confirmation({Distance, Time, Weight,Style,Senderemail,Receiveremail,Receivername,ReceiverAddress,Receiverstate}) {
  
  const[confirm,setconfirm]=useState("");
  const[text,setText]=useState("CONFIRM");
  const[btnCss,setbtnCss]=useState("btn btn-outline-success btn-block mb-5");
  const[boxStyle,setboxStyle]=useState("");

  let track
  function trackingNumber(){
    let pr = "EP775";
    const su = "IN";
    for(let i=0; i<5; i++) pr += ~~(Math.random() * 10);
    track=(pr + su);
    
  }
  trackingNumber();
  
  //////////////////email sender/////////////////////////
  let totalAmount = Math.trunc(((Distance * Weight) / 3))

  let   sendEmail = async (e) => {
    console.log(Distance, Time, Weight,Style,Senderemail,Receiveremail,Receivername,ReceiverAddress,Receiverstate,track)
    e.preventDefault();
    
    setboxStyle('hidden')
    setconfirm('Congratulations Order placed')
    setText('CONFIRMED')
    setbtnCss('btn btn-danger btn-lg  btn-block mb-5 disabled')
    const response = await fetch(
      'http://localhost:3001/email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          
          mode: 'no-cors',
        },
        
        body:new URLSearchParams(
          {  
            "name":Receivername,
            "remail": Receiveremail,
            "semail":Senderemail,
            "total": totalAmount,
            "address": ReceiverAddress +' '+ Receiverstate,
            "tNumber": track
          })
        
      }
      );
      let resJson = await response.json();
      console.log(resJson);
  }

  //////////////////////////////////////email part ends/////////////////////////////
    return (
        <>
                <div
            className="container d-flex flex-column justify-content-center align-items-start mt-5 ">
            <h1 className="confirm">{confirm}</h1></div>
        <div className={boxStyle}>
         <form onSubmit={sendEmail} >
         <div className={Style}> 
        <div
            className="container d-flex flex-column justify-content-center align-items-start mt-5 ">
            <h1 className="confirm">{confirm}</h1>
            <h1>Total Distance :{Math.trunc(Distance)}km</h1>
            <h1>Travel Time :{Time}hrs</h1>
            <h1>Weight :{Weight}kg</h1>
            <h1>Tracking Number :{track}</h1>
            
            <h1>Total Amount : Rs.{Math.trunc(totalAmount)}</h1>
            <button type="submit" className={btnCss}>{text}</button>
        </div>
    </div>
    </form>
    </div>
</>
    )
}
