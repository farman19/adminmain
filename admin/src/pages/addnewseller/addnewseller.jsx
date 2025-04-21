import React, { useState } from "react";
import './addnewseller.css'
import { LuUserRoundCog } from "react-icons/lu";
import { RiUserFill } from "react-icons/ri";
import { PiWarningCircleBold } from "react-icons/pi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FaMapLocationDot } from "react-icons/fa6";
import Select from '@mui/material/Select';
import { Button, ListSubheader, InputBase } from "@mui/material";




const AddNewSeller = () => {
    const [imagepreview, setImagePreview] = useState(null);
    const [datashow,setDatashow] = useState('')
    const [limitTime, setLimitTime] = useState({
        minimum: '',
        maximum: '',
        selectTime: ''
    });

    const [selectTime, setSelectTime] = useState({
        times: ''
    });

    const handleAddTime = () => {

        setDatashow(limitTime,selectTime)
        console.log('Limit Time:', limitTime);
        console.log('Selected Time Unit:', selectTime);
        // You can process or send this data now
    };


    const [addseller, setAddSeller] = useState({
        firstname: '',
        lastname: '',
        phoneno: '',
        role: '',
        sellerimage: ''

    })

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result);
                setAddSeller({ ...addseller, sellerimage: reader.result });
            };
            reader.readAsDataURL(file);

        };
    }













    const handleadd = (e) => {
        e.preventDefault();

        try {
            console.log(addseller)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="addnew-seller-section">
                <div className="addnew-seller-header">
                    <form onSubmit={handleadd}>
                        <div className="addnew-e-top">
                            <div className="addnew-e-heading">
                                <div className="addnew-e-icon"><LuUserRoundCog /></div>
                                <h2>Add New Seller</h2>
                            </div>
                        </div>
                        <div className="e-genral-info-box">
                            <div className="e-genral-info">
                                <div className="e-genral-info-top">
                                    <div className="e-genral-heading">
                                        <div className="e-genral-icon"><RiUserFill /></div>
                                        <h3>Genral Infomation</h3>
                                    </div>
                                </div>
                                <div className="addnew-e-form-box">
                                    <div className="addnew-left">
                                        <div className="addnew-left-form">
                                        <form onSubmit={handleadd} >
                                            <div className="addnew-input-box">
                                                <div className="boxf">
                                                    <label >First Name</label>
                                                </div>
                                                <div className="add-input">
                                                    <input name="firstname" value={addseller.firstname} onChange={(e) => setAddSeller({ ...addseller, firstname: e.target.value })} type="text" placeholder=" Ex: Sakeel Ameer" />
                                                </div>
                                            </div>
                                            <div className="addnew-input-box">
                                                <div className="boxf">
                                                    <label >Last Name</label>
                                                </div>
                                                <div className="add-input">
                                                    <input type="text" name="lastname" value={addseller.lastname} onChange={(e) => setAddSeller({ ...addseller, lastname: e.target.value })} placeholder=" Ex: Sakeel Ameer" />
                                                </div>
                                            </div>
                                            <div className="addnew-input-box">
                                                <div className="boxp">
                                                    <label >Phone</label>
                                                </div>
                                                <div className="add-input">
                                                    <input type="number" name="phoneno" value={addseller.phoneno} onChange={(e) => setAddSeller({ ...addseller, phoneno: e.target.value })} placeholder=" Ex: 1113*****" />
                                                </div>
                                            </div>
                                            <div className="addnew-input-box">
                                                <div className="boxp">
                                                    <label >Role</label>
                                                </div>
                                                <div className="add-inputs">
                                                    <div className="select-menu">
                                                        <FormControl className="f-bg" size="small" fullWidth   >
                                                            <InputLabel value="" disabled >Select Role</InputLabel>
                                                            <Select sx={{height:"30px"}} name="role" value={addseller.role} onChange={(e) => setAddSeller({ ...addseller, role: e.target.value })}>

                                                                <MenuItem value="">None</MenuItem>
                                                                <MenuItem value="customer">Customer</MenuItem>
                                                                <MenuItem value="deliverymen">Deliveryman</MenuItem>

                                                            </Select>
                                                        </FormControl>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                    <div className="addnew-right">
                                        <div className="seller-image">
                                            <div className="image-e-top">
                                                <h4>seller Image Ratio (1:1)</h4>
                                            </div>
                                            <div className="image-show-box">
                                                <div className="image-show">
                                                    <label for="imagefile">
                                                        {addseller && <img src={imagepreview} alt="" />}
                                                        <input type="file" id="imagefile" onChange={handleImageChange} alt="" />
                                                    </label>

                                                </div>
                                            </div>
                                            <div className="image-size">
                                                <div className="image-size-heading">
                                                    <h4>Employee Image Size Max 2 MB *</h4>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="location-info">
                                    <div className="seller-location">
                                        <div className="location-top">
                                            <div className="location-heading">
                                                <div className="location-icon">
                                                    <FaMapLocationDot />
                                                </div>
                                                <h4>Seller Infomation</h4>
                                            </div>
                                        </div>
                                        <div className="location-track-box">
                                            <div className="location-track-top">
                                                <div className="track-top-left">
                                                    <div className="city-zone">
                                                        <label>City</label>
                                                    </div>
                                                    <div className="city-input">

                                                        <Select className="city-select" >
                                                            <ListSubheader>


                                                                <InputBase type="text" placeholder="Search city..." sx={{ width: "100%", height: 30, px: 1, border: "1px solid #ccc", borderRadius: 1, }} />
                                                            </ListSubheader>
                                                            <MenuItem sx={{ color: "#303636" }} value="dehli">Dehli</MenuItem>
                                                        </Select>

                                                    </div>
                                                </div>
                                                <div className="track-top-right">
                                                    <div className="city-zone">
                                                        <label>Estimated Delivery Time</label>
                                                    </div>
                                                    <div className="city-input">

                                                        <Select className="city-select"  value={datashow} onChange={handleAddTime}   >
                                                            <ListSubheader>



                                                                <InputBase
                                                                    type="number"
                                                                    name="minimum"
                                                                    value={limitTime.minimum}
                                                                    onChange={(e) =>
                                                                        setLimitTime((prev) => ({ ...prev, minimum: e.target.value }))
                                                                    }
                                                                    placeholder="Minimum"
                                                                    sx={{
                                                                        width: "20%",
                                                                        height: 30,
                                                                        px: 1,
                                                                        border: "1px solid #ccc",
                                                                        borderRadius: 1,
                                                                        mr: 1
                                                                    }}
                                                                />
                                                                <InputBase
                                                                    type="number"
                                                                    name="maximum"
                                                                    value={limitTime.maximum}
                                                                    onChange={(e) =>
                                                                        setLimitTime((prev) => ({ ...prev, maximum: e.target.value }))
                                                                    }
                                                                    placeholder="Maximum"
                                                                    sx={{
                                                                        width: "20%",
                                                                        height: 30,
                                                                        px: 1,
                                                                        border: "1px solid #ccc",
                                                                        borderRadius: 1,
                                                                        mr: 1
                                                                    }}
                                                                />
                                                                <Select
                                                                    name="times"
                                                                    value={selectTime.times}
                                                                    onChange={(e) => {
                                                                        setSelectTime({ times: e.target.value });
                                                                        setLimitTime((prev) => ({ ...prev, selectTime: e.target.value }));
                                                                    }}
                                                                    size="small"
                                                                    sx={{ height: 30, fontSize: 14, mr: 1 }}
                                                                >
                                                                    <MenuItem value="minutes">Minutes</MenuItem>
                                                                    <MenuItem value="hours">Hours</MenuItem>
                                                                    <MenuItem value="days">Days</MenuItem>
                                                                </Select>

                                                                <Button
                                                                    onClick={handleAddTime}
                                                                    sx={{ bgcolor: "#107980", size: "small", color: "#fff" }}
                                                                >
                                                                    Done
                                                                </Button>

                                                            </ListSubheader>

                                                        </Select>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="map-track">
                                                <div className="map-left">
                                                    <div className="map-latitude">
                                                        <div className="map-l">
                                                            <label>Latitude</label>
                                                        </div>
                                                        <div className="map-linput">
                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="map-latitude">
                                                        <div className="map-l">
                                                            <label>Longititude</label>
                                                        </div>
                                                        <div className="map-linput">
                                                            <input type="text" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="map-right">
                                                    <iframe className="mapframe" src="https://www.google.co.in/maps/@29.4813696,77.7191114,14z?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"/>
                                                </div>
                                            </div>
                                           
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="account-info">
                                    <div className="account-epp-info">
                                        <div className="account-epp-top">
                                            <div className="epp-heading">
                                                <div className="epp-icon"><RiUserFill /></div>
                                                <h3>Account Information</h3>
                                            </div>
                                        </div>
                                        <div className="e-p-c">
                                            <div className="e-box">
                                                <div className="e-lable">
                                                    <lable>Email</lable>
                                                </div>
                                                <div className="e-input">
                                                    <input type="email" name="selleremail" placeholder="Ex: exa@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="e-box">
                                                <div className="e-lable">
                                                    <lable>Password</lable>
                                                    <div className="pass-war-icon"><PiWarningCircleBold /></div>
                                                </div>
                                                <div className="e-input">
                                                    <input type="password" placeholder="password" />
                                                </div>
                                            </div>
                                            <div className="e-box">
                                                <div className="e-lable">
                                                    <lable>Confirm Password</lable>
                                                </div>
                                                <div className="e-input">
                                                    <input type="password" placeholder="confirm password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="srbtn-box">
                                            <div className="r1btn">
                                                <Button className="rst-btn">Reset</Button>
                                                <Button type="submit" className="subt-btn">Submit</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddNewSeller;