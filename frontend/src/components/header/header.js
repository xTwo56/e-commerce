import React from "react";
import "./header.css";
import logo from '../../assets/logo.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo2 from '../../assets/logo2.jpeg';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.jpeg'
import dash from '../../assets/dash.png';
import { useState } from "react";
import Womendrop from "./hover";
function Dashboard() {
    const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);

    const handleWomenMouseEnter = () => {
      setIsWomenDropdownOpen(true);
    };
  
    const handleWomenMouseLeave = () => {
      setIsWomenDropdownOpen(false);
    };

    return (
        <div className="dashboard">
            <br></br>
            <center className="dash-head">EXTRA 15% OFF FOR FIRST TIME CUSTOMERS | T&C APPLY | CLICK TO COPY NEW15</center>
            <div className="flex flex-dash">
                <img src={logo} className="logo"></img>
                <input className="textarea" type="text" placeholder="  Search for India's best products 🔍" ></input>
                <FavoriteBorderIcon />
                <LocalShippingOutlinedIcon />
                <ShoppingCartOutlinedIcon />
                <button className="dash-button">Login 🔜</button>
            </div>


            <hr></hr>
            <div className="flex flex-nav">
                <div onMouseEnter={handleWomenMouseEnter} onMouseLeave={handleWomenMouseLeave}>WOMEN</div>
                <div>MEN</div>
                <div>FABRICS</div>
                <div>PERSONAL CARE</div>
                <div>HOME DECOR</div>
                <div>GALLERY</div>
            </div>
            {isWomenDropdownOpen && <Womendrop />}
            <hr></hr>
            <div className="flex flex-outer">
                <div>
                    <div>
                        <img src={s2}></img>
                        <div className="img-1">
                            <p>Beyond fashion,</p>
                            <p>Beyond ordinary</p>
                            <button className="shop-b">SHOP NOW ➡️</button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-dashimg">
                            <div className="dashimg-button">
                                <img src={dash} className="dashimg"></img>
                                <div className="but"><button>➡️</button></div>
                            </div>
                        </div>
                        <div className="flex flex-dashimg">
                            <div className="dashimg-button">
                                <img src={dash} className="dashimg"></img>
                                <div className="but"><button>➡️</button></div>
                            </div>
                        </div>
                    </div>

                </div>


                <div >
                    <img className="h-img" src={s3}></img>
                    <div className="img-2">
                        <p>Every Stitch is a</p>
                        <p>a work of Heart</p>
                        <button className="shop-b">SHOP NOW ➡️</button>
                    </div>
                </div>
            </div>




            <div className="featured">Featured In</div>
            <hr></hr>
            <div className="flex flex-logo">
                <img src={logo2} className="logo2"></img>
                <img src={logo2} className="logo2"></img>
                <img src={logo2} className="logo2"></img>
                <img src={logo2} className="logo2"></img>
            </div>
            <hr></hr>

        </div>
    );
}
export default Dashboard;