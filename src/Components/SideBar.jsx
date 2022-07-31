import React from 'react'
import { TbLayoutSidebarLeftExpand, TbBrandWindows } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsTerminal } from "react-icons/bs";
import { BiWalletAlt, BiChart } from "react-icons/bi";
import { FiAward, FiSettings } from "react-icons/fi";
import { AiOutlineGift } from "react-icons/ai";


export default function SideBar() {
    return (
        <div className='SideBar'>
            <div className="inside">
                <div className="topIcons">
                    <div className="expandIcon" >
                        <TbLayoutSidebarLeftExpand style={{ cursor: "pointer" }} />
                    </div>
                    <div className="restIcons">
                        <TbBrandWindows style={{ cursor: "pointer" }} />
                        <BiChart className="highlited" style={{ cursor: "pointer" }} />
                        <BsTerminal style={{ cursor: "pointer" }} />
                        <BiWalletAlt style={{ cursor: "pointer" }} />
                        <FiAward style={{ cursor: "pointer" }} />
                        <AiOutlineGift style={{ cursor: "pointer" }} />
                        <FiSettings style={{ cursor: "pointer" }} />
                    </div>
                </div>
                <div className="bottomIcons">
                    <div className="lightOn">
                        <HiOutlineLightBulb style={{ cursor: "pointer" }} />
                        <div className="purple"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
