import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:4000/api/v1/message/send", {
      name, 
      email, 
      subject, 
      message,
    },
    {withCredentials:true,headers:{"Content-Type": "application/json"}}
    ).then(res=>{
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }).catch(error=>{
      toast.error(error.response.data.message);
    })
  };
 return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
             <h4>Address</h4>
             <p>Any City ,Anywhere</p>
          </div>
          <div className="item">
             <h4>Call Us</h4>
             <p>Call us at: +977 9808453211</p>
          </div>
          <div className="item">
              <h4>Mail Us</h4>
              <p>sk2@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.25396170926!2d85.324622!3d27.6844325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb184cb58aa15b%3A0xae246264d3ab0440!2sEVENT%20SOLUTION%20PVT.%20LTD!5e0!3m2!1sen!2snp!4v1726230588894!5m2!1sen!2snp" 
               style={{ border: 0, width: "100%", height: "450px"}}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"/>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input 
                type= "text" 
                placeholder= "Name" 
                value={name} 
                onChange={(e)=> setName(e.target.value)}
                />
                <input 
                type= "email" 
                placeholder= "E-mail" 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <input 
              type= "text" 
              placeholder= "Subject" 
              value={subject} 
              onChange={(e)=> setSubject(e.target.value)}
              />
              <textarea
              rows={10}
               type= "text" 
               placeholder= "Message" 
               value={message} 
               onChange={(e)=> setMessage(e.target.value)}
               />
               <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
