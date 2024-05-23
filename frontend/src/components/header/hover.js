import React from "react";
import "./hover.css";


const Apparel = ['Bottom Wear','Dress Material','Dupattas','Jacket & Shrugs','Kaltans','Kurtas','Kurta Sets','Lehengas','Lounge Wear','Shawls & Stoles','Short Kurti','Tops & Tunics'];
const Sarees = ['Applique Work','Baatik','Bandhej','Banarasi','Bishnupuri','Chanderi','Ikkat','Jamdani','Kalamkari','Kashmiri Hand Embroidery','Hand Block Printed','Hand Embroidereds','Hand Painted',
'Handwoven Sarees','Leheriya','Madhubani','Organza/Net','Patola','Sambalpuri' ];


const Jewellery = [
    'Anklets','Cuffs/ Bracelets/ Bangles'];
    
    const sub = ['Metal','Laakh','Crystal','Sheep'];
    const last =['Earrings','Hair Accessories','Necklaces & Pendants','Nosepins','Rings','Waist Belts'
];


const handbags = ['Clutches','Laptop Bags/ Sleeves','Potlis','Sling Bags','Tote Bags','Travel Kits','Wallets'];


const footwear = ['Juttis','Slip-Ons','Sandals'];

const Womendrop = ({name,subname}) =>{
    return(
        <>
            <div className="Main_box">
                <div className="Apparel">
                    
                    <div className="top">Apparel</div>
                    {Apparel.map((Apparel)=>(
                        <span>{Apparel}</span>
                    ))}
                </div>
                <div className="Apparel">
                    
                    <div className="top">Sarees</div>
                    {Sarees.map((Apparel)=>(
                        <span>{Apparel}</span>
                    ))}

                </div>
                <div className="Apparel">
                    
                    <div className="top">Jewellery</div>
                    {Jewellery.map((Apparel)=>(
                        <span>{Apparel}</span>
                    ))}
                    {sub.map((Apparel)=>(
                        <span className="subclass">{Apparel}</span>
                    ))}
                    {last.map((Apparel)=>(
                        <span>{Apparel}</span>
                    ))}

                </div>

                <div className="Apparel">
                    
                    <div className="top">Handbags</div>
                    {handbags.map((Apparel)=>(
                        <span>{Apparel}</span>
                    ))}
                    <div className="top">footwear</div>
                    {footwear.map((Apparel)=>(
                        <span>{Apparel}</span>
                    ))}
                    

                </div>
            </div>
        </>
    );


}



export default Womendrop;