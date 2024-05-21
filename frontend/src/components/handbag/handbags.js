import React from 'react'
import './handbags.css'
import handbag from '../../assets/handbag.png'
function Handbags() {
    return (
        <div className="head-section">
            <div>
                <div className="nav">
                    <div><h1>Handbags</h1></div> 
                    <div className="flex">
                        <div>
                            <img className="imgh" src={handbag}></img>
                            <p>POTLIS</p>
                        </div>

                        <div>
                            <img className="imgh" src={handbag}></img>
                            <p>SLING BAGS</p>
                        </div>

                        <div>
                            <img className="imgh" src={handbag}></img>
                            <p>TOTE BAGS</p>
                        </div>

                        <div>
                            <img className="imgh" src={handbag}></img>
                            <p>SLEEVES</p>
                        </div>

                        <div>
                            <img className="imgh" src={handbag}></img>
                            <p>CLUTCHES</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
       </div>
    )
}
export default Handbags