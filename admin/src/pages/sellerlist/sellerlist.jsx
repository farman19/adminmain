import React from "react";
import './sellerlist.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { Button } from "@mui/material";
import { LuUserRoundCog } from "react-icons/lu";
import { CgAdd } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { LuEye } from "react-icons/lu";

const SellerList = () => {
    return (

        <>
            <div className="seller-list-section">
                <div className="seller-list-header">
                    <div className="seller-list-top">
                        <div className="seller-heading">
                            <div className="seller-icon"><LuUserRoundCog /></div>
                            <h2>Seller List</h2>
                            <div className="seller-count"><h4>0</h4></div>
                        </div>
                        <div className="add-btn-seller">
                            <Link to="/addnewseller"> <Button><div className="a-btn-e-icon"><CgAdd /></div>Add New seller</Button></Link>

                        </div>
                    </div>
                    <div className="seller-list-box">
                        <div className="seller-list-table">
                            <div className="seller-table-top">
                                <div className="s-btn">
                                    <div className="s-input">
                                        <input type="text" placeholder="Search By name or email" />
                                        <div className="icon-s">
                                            <IoSearchSharp />
                                        </div>
                                    </div>
                                    <div className="ex-select">
                                        <Button className="e-btn">
                                            <span><MdFileDownload /></span>Export<span><IoIosArrowDown /></span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="main-slist-table">
                                <table width="100%">
                                    <thead>
                                        <tr>

                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SellerList;