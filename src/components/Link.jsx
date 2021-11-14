import React, {useEffect, useState} from 'react'
import Links from './Links'
import {db} from '../firebase'
import { collection, addDoc ,onSnapshot} from "firebase/firestore";

export default function Link() {

  const [links,setLinks] = useState([]);

  let suma = 0;
  let suma2 = 0;



  
    const addOrEditLink = async (linkObject) =>{
        console.log(linkObject)
        try {
          const docRef = await addDoc(collection(db, "links"), {
            url: linkObject.url,
            name: linkObject.name,
            desc: linkObject.desc
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    }

    
    useEffect(()=>{

        // const myDoc = [];

        onSnapshot(collection(db,"links"),(snapshot)=>{
        setLinks(snapshot.docs.map((doc) => doc.data()))    
            
        });
        
        
    },[]);

    

    return (
        <div>
          
           <Links addOrEditLink={addOrEditLink} />
           
           <div className="contai">

               <div className="card">
               <h1>Lista:</h1>
             {
                links.map((item,index) => {
              return <p key={item.name + "-" + index}>{item.name} bs {item.desc}</p>
                })
             }
             <div className="total">
              <p>Total:</p>
              {
                
                links.map(item => {
                  suma = suma2 + parseInt(item.desc);
                  suma2 = suma
                  return console.log()  
                })
              }
              <p>{suma2}</p>
              
             </div>
             
           </div>

            

          </div>
           
        </div>
    )
}
