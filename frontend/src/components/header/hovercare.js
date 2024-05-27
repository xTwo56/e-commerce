import React from "react";
import "./hover.css";
import Handbags from '../../assets/handbag.png';


const Bath = ['Bamboo Items','Face Wash','Soap'
];
const Skin =['Face Cream','Face Scrub'];
const Wellness = ['Kashmiri Kahwa','Kesar','Perfume','Shilajit'];


const Caredrop = ({name,subname}) =>{
    
    const hello ={
        
            name:"second",
            id:1,
            old_price:10,
            new_price:32,
            image:"hello",
            category:{
              maincategory:"Care",
              subcategories:"Bath",
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
                    
                    <div className="top" onClick={()=>handleclick("Care","Bath")}><h2>Bath and Body</h2></div>
                    {Bath.map((Apparel,key)=>(
                        <span key={key}>{Apparel}</span>
                    ))}
                </div>
                <div className="Apparel">
                    
                    <div className="top"><h2>Skin care</h2></div>
                    {Skin.map((Apparel,key)=>(
                        <span key={key}>{Apparel}</span>
                    ))}

                </div>
                <div className="Apparel">
                    
                    <div className="top"><h2>Wellness</h2></div>
                    {Wellness.map((Apparel,key)=>(
                        <span key={key}>{Apparel}</span>
                    ))}
                </div>
                <div className="photo">
                    <img className="pic" src={Handbags}></img>
                    <img className="pic" src={Handbags}></img>
                </div>
            </div>
        </>
    );


}



export default Caredrop;