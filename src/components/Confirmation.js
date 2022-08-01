import React ,{ useState } from 'react'


export default function Confirmation({Distance, Time, Weight,Style,Senderemail,Receiveremail,Receivername,ReceiverAddress,Receiverstate}) {
  ////////consignment number generator
  const [tNumber, settNumber] = useState("");
  
  const trackingNumber = async (pr = "EP775", su = "IN") => {           
    for(let i=0; i<5; i++) pr += ~~(Math.random() * 10);
    settNumber(pr + su);
    
  };
  console.log(trackingNumber);
  
  //////////////////email sender/////////////////////////
  let totalAmount = Math.trunc(((Distance * Weight) / 3))

  let   sendEmail = async (e) => {
    console.log(Distance, Time, Weight,Style,Senderemail,Receiveremail,Receivername,ReceiverAddress,Receiverstate)
    e.preventDefault();
    
    
    const response = await fetch(
      'http://localhost:3001/email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'Access-Control-Allow-Origin':'*'
          mode: 'no-cors',
        },
        
        body:new URLSearchParams(
          {  
            "name":Receivername,
            "remail": Receiveremail,
            "semail":Senderemail,
            "total": totalAmount,
            "address": ReceiverAddress +' '+ Receiverstate,
            "tNumber": tNumber
          })
        
      }
      );
      let resJson = await response.json();
      console.log(resJson);
  }
  //////////////////////////////////////email part ends/////////////////////////////
    return (
        <>
         <form onSubmit={sendEmail} >
         <div className={Style}> 
        <div
            className="container d-flex flex-column justify-content-center align-items-start mt-5 ">
            <h1>Total Distance :{Math.trunc(Distance)}km</h1>
            <h1>Travel Time :{Time}hrs</h1>
            <h1>Weight :{Weight}kg</h1>
            
            <h1>Total Amount : Rs.{Math.trunc(totalAmount)}</h1>
            <button type="submit" className="btn btn-outline-success btn-block ">CONFIRM</button>
        </div>
    </div>
    </form>
</>
    )
}
