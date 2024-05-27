import React from "react";
import "./hover.css";
import Handbags from '../../assets/handbag.png';


const apparel = ['Shirt','Kurtas','Dupattas','Jackets','Fastive Wear','Shawls'];
const Accessories = ['Cufflinks','Belt','Pocket Square','Necktie','Woolen Muffler'];

const Mandrop = ({name,subname}) =>{
    
    const hello ={
        
            name:"second",
            id:1,
            old_price:10,
            new_price:32,
            image:"hello",
            category:{
              maincategory:"Man",
              subcategories:"Apparel",
              lastcategories:"Kurta"
            },
            material:"cotton",
            available:"Yes",
            product_details:"Good Product",
            material_care:"Care"
          
    };
    const handle = async (props) =>{
        await fetch(`http://localhost:4000/addproduct`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(props),
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data)})
    
    }
    const handleclick = async (Women,Apparel,Sub)=>{
        if(!Sub){
            await fetch(`http://localhost:4000/findspecific/${Women}/${Apparel}/${Sub}`)
        .then((res)=>res.json())
        .then((data)=>{console.log(data)})
        }
        
        else{
            await fetch(`http://localhost:4000/findspecific/${Women}/${Apparel}/${Sub}`)
            .then((res)=>res.json())
            .then((data)=>{console.log(data)})
        }
        handle(hello);
        
    }
    
    return(
        <>
            <div className="Main_box">
                <div className="Apparel">
                    
                    <div className="top" onClick={()=>handleclick("Man","Apparel")}><h2>Apparel</h2></div>
                    {apparel.map((Apparel,key)=>(
                        <span key={key}>{Apparel}</span>
                    ))}
                </div>
                <div className="Apparel">
                    
                    <div className="top"><h2>Accessories</h2></div>
                    {Accessories.map((Apparel,key)=>(
                        <span key={key}>{Apparel}</span>
                    ))}

                </div>

                </div>
                <div className="photo">
                    <img className="pic" src={Handbags}></img>
                    <img className="pic" src={Handbags}></img>
                </div>
        </>
    );


}



export default Mandrop;