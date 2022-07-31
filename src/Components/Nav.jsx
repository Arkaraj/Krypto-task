import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFullscreen } from "react-icons/bs";
import { BiDoughnutChart } from "react-icons/bi";
import { GiMaze } from "react-icons/gi";

const Nav = () => {
    return (
        <nav className='navbar'>
            <div className="slots1">
                <img src="./bitcoin.png" alt="bitcoin" width={40} height={40} />
                <div className="ins">
                    <p>BitCoin</p>
                    <p className="navbold">BTC/USDC</p>
                </div>
                <RiArrowDropDownLine size={"2rem"} />
            </div>
            <div className="slots">
                <p className="navtext">Last Price</p>
                <p className="navnumber">23,938.32 USDC</p>
            </div>
            <div className="slots">
                <p className="navtext">24h change</p>
                <p className="navnumber">+0.00%</p>
            </div>
            <div className="slots">
                <p className="navtext">24h low</p>
                <p className="navbold">23,938.32 USDC</p>
            </div>
            <div className="slots">
                <p className="navtext">24h high</p>
                <p className="navbold">23,938.32 USDC</p>
            </div>
            <div className="slots2">
                <div className="purplehigh">Pro</div>
                <BiDoughnutChart />
                <BsFullscreen />
                <GiMaze />
            </div>
        </nav>
    )
}

export default Nav