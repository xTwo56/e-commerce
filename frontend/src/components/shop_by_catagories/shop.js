import React from 'react';
import handbag from '../../assets/handbag.png'
import './shop.css'
function Shop(){
    return(
        <div className='head-shop'>
            <center><h1 className='headimg-shop'>Shop by Categories</h1></center>
            <div className='flex-con'>
                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>SARRES</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>LEHENGAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>KURTAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>SHORT KURTAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>KAFTANS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>SHIRTS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>MEN'S KURTAS</div>
                </div>
            </div>
            <div  className='flex-con2'>
            <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>JEWELLERY</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>MEN'S ACCESSORIES</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>HOME DECOR</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag} className='img-shop'></img>
                    <div>KITCHEN AND DINING</div>
                </div>
                </div>
            <br></br>
        </div>
    );
}
export default Shop;