import React from 'react'
import Confirmation from "./Confirmation";

import { useState } from "react";


 

export default function Body() {
    const [senderAddress, setsenderAddress] = useState("");
    const [receiverAddress, setreceiverAddress] = useState("");
    const [senderState, setsenderState] = useState("");
    const [receiverState, setreceiverState] = useState("");
    const [distance, setdistance] = useState("");
    const [time, settime] = useState("");
    const [weight, setweight] = useState("");
    const [style, setstyle] = useState("hidden");
    const [senderName, setsenderName] = useState("");
    const [receiverName, setreceiverName] = useState("");
    const [senderEmail, setsenderEmail] = useState("");
    const [receiverEmail, setreceiverEmail] = useState("");
    

    let   handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://www.mapquestapi.com/directions/v2/route?key=PM9unQ5sdswrknRGzNISmlMpikyVVDdT", {
            method: "POST",
            body: JSON.stringify({
                "locations": [
                    senderAddress + senderState,
                    receiverAddress + receiverState
                ],
                "options": {
                    "avoids": [],
                    "avoidTimedConditions": false,
                    "doReverseGeocode": true,
                    "shapeFormat": "raw",
                    "generalize": 0,
                    "routeType": "fastest",
                    "timeType": 1,
                    "locale": "en_US",
                    "unit": "k",
                    "enhancedNarrative": false,
                    "drivingStyle": 2,
                    "highwayEfficiency": 21.0
                }
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            //   setName("");
            //   setEmail("");
            // setMessage("User created successfully");
            setdistance(await (resJson.route.distance))
            settime(await (resJson.route.formattedTime))
            setstyle('show');
               
                console.log(resJson);
                //  console.log(distance,time);
                
                
            // console.log(res.route)
          } else {
              // setMessage("Some error occured");
              console.log(resJson)
            }
        } catch (err) {
            console.log(err);
        }
    };







    return (
        <>
                    <form onSubmit={handleSubmit} className="form">
            <div className="h-300  d-flex justify-content-around  align-items-stretch">
            

                  <div className="badge ">
                        
                        <div className="form-outline mb-4 " id="form1">
                <h2>Sender Details</h2>
                            <label className="form-label" htmlFor="form1Example1">Name</label>
                            <input type="name" id="form1Example1" className="form-control" value={senderName}  onChange={(e) => setsenderName(e.target.value)}/>

                            <label className="form-label" htmlFor="form1Example2">Email address</label>
                            <input id="form1Example2" className="form-control"value={senderEmail}  onChange={(e) => setsenderEmail(e.target.value)}/>
                            <label className="form-label" htmlFor="form1Example2">Phone</label>
                            <input id="form1Example2" className="form-control"/>
                            <label className="form-label" htmlFor="form1Example2" >address</label>
                            
                            <input id="form1Example2" className="form-control"value={senderAddress}  onChange={(e) => setsenderAddress(e.target.value)}/>
                            <label className="form-label" htmlFor="form1Example2">State</label>
                            <input id="form1Example2" className="form-control" value={senderState}  onChange={(e) => setsenderState(e.target.value)}/>
                            
                            <label className="form-label" htmlFor="form1Example2">Weight of parcel in KG</label>
                            <input id="form1Example2" className="form-control"value={weight}  onChange={(e) => setweight(e.target.value)}/>
                        </div>

                        {/* <!-- Submit button --> */}
                        
                    
                </div>
                
                <div className="badge ">
                <h2>Receiver Details</h2>
                    
                        
                        <div className="form-outline mb-4" id="form2">
                            <label className="form-label" htmlFor="form1Example1">Name</label>
                            <input type="name" id="form1Example1" className="form-control"value={receiverName}  onChange={(e) => setreceiverName(e.target.value)}/>

                            <label className="form-label" htmlFor="form1Example2">Email address</label>
                            <input id="form1Example2" className="form-control"value={receiverEmail}  onChange={(e) => setreceiverEmail(e.target.value)}/>
                            <label className="form-label" htmlFor="form1Example2">Phone</label>
                            <input id="form1Example2" className="form-control"/>
                            <label className="form-label" htmlFor="form1Example2" >address</label>
                            
                            <input id="form1Example2" className="form-control" value={receiverAddress}  onChange={(e) => setreceiverAddress(e.target.value)}/>
                            <label className="form-label" htmlFor="form1Example2" >State</label>
                            <input id="form1Example2" className="form-control" value={receiverState}  onChange={(e) => setreceiverState(e.target.value)} />
                            
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="submit" className="btn btn-outline-success btn-block">Send Parcel</button>
                </div>
            </div>
                    </form>
                    <div className="d-flex justify-content-center">

                    <div>
                     <Confirmation Distance={distance} Time={time} Weight={weight} Style={style} Senderemail={senderEmail} Receiveremail={receiverEmail} Receivername={receiverName} ReceiverAddress={receiverAddress} Receiverstate={receiverState}/>
                    
                    </div>
                    



                    </div>

                    
            </>
    )
}
