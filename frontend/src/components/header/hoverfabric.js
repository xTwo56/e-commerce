import React from "react";
import "./hover.css";
import Handbags from '../../assets/handbag.png';


const Cotton = ['Ajrakh','Bengal Cotton','Block Printed','Cotton Bandhani','Jamdani','Sambhalpuri Cotton'
];
const Others =['Denim','Hemp','Jute','Khadi','Linen'];
const Handwoven = ['Banarasi Silk','Bandhani','Block Printed','Chanderi','Dupion/Raw Silk','Kalamkari Silk','Katan Silk','Paithani Silk','Matka Silk','Tussar Silk','Patola Silk]'];


const Fabricdrop = ({name,subname}) =>{
    
    const hello ={
        
            name:"second",
            id:1,
            old_price:10,
            new_price:32,
            image:"hello",
            category:{
              maincategory:"Fabric",
              subcategories:"Cotton",
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
                    
                    <div className="top" onClick={()=>handleclick("Fabric","Cotton")}><h2>Cotton</h2></div>
                    {Cotton.map((Apparel,key)=>(
                        <span key={key}>{Apparel}</span>
                    ))}
                </div>
                <div className="Apparel">
                    
                    <div className="top"><h2>Others</h2></div>
                    {Others.map((Apparel,key)=>(
                        <span key={key}>{Apparel}</span>
                    ))}

                </div>
                <div className="Apparel">
                    
                    <div className="top"><h2>Handwoven</h2></div>
                    {Handwoven.map((Apparel,key)=>(
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



export default Fabricdrop;