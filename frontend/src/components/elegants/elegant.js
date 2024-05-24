import React from 'react'
import './elegant.css'
import handbag from '../../assets/handbag.png'
function Elegants() {
    return (
        <div className="eleganthead-section">
            <div>
                <div className="elegantnav">
                    <div><h1>Elegant jewellery</h1></div> 
                    <div className="elegantflex">
                        <div>
                            <img className="elegantimgh" src={handbag}></img>
                            <p>BANGLES</p>
                        </div>

                        <div>
                            <img className="elegantimgh" src={handbag}></img>
                            <p>NECKLACE</p>
                        </div>

                        <div>
                            <img className="elegantimgh" src={handbag}></img>
                            <p>ANKLETS</p>
                        </div>

                        <div>
                            <img className="elegantimgh" src={handbag}></img>
                            <p>BRACELETS</p>
                        </div>

                        <div>
                            <img className="elegantimgh" src={handbag}></img>
                            <p>EARRINGS</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
       </div>       
    )
}
export default Elegants