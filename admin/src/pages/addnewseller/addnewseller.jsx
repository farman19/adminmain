import React, { useState, useRef, useCallback } from "react";
import './addnewseller.css'
import { LuUserRoundCog } from "react-icons/lu";
import { RiUserFill } from "react-icons/ri";
import { PiWarningCircleBold } from "react-icons/pi";

import MenuItem from '@mui/material/MenuItem';

import { FaMapLocationDot } from "react-icons/fa6";
import Select from '@mui/material/Select';
import { Button, ListSubheader, InputBase, Box } from "@mui/material";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete, } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const defaultCenter = {
    lat: 40.7128,
    lng: -74.006,
};



const AddNewSeller = () => {
    // map api
    const [position, setPosition] = useState(defaultCenter);
    const [map, setMap] = useState(null);
    const autocompleteRef = useRef(null);





    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    const handleMapClick = useCallback((event) => {
        setPosition({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });
    }, []);


    //   change place handle 
    const onPlaceChanged = () => {
        const place = autocompleteRef.current.getPlace();
        if (place.geometry && place.geometry.location) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            setPosition({ lat, lng });
            map.panTo({ lat, lng });
        }
    };


    const [imagepreview, setImagePreview] = useState(null);
    const [imagelogo, setImageLogo] = useState(null);
    const [datashow, setDatashow] = useState('')
    const [limitTime, setLimitTime] = useState({
        minimum: '',
        maximum: '',
        selectTime: ''
    });

    const [selectTime, setSelectTime] = useState({
        times: ''
    });

    const handleAddTime = () => {

        setDatashow(limitTime, selectTime)
        console.log('Limit Time:', limitTime);
        console.log('Selected Time Unit:', selectTime);
        // You can process or send this data now
    };


    const [addseller, setAddSeller] = useState({
        firstname: '',
        lastname: '',
        phoneno: '',

        coverimage: '',
        shopimage: ''

    })

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result);
                setAddSeller({ ...addseller, coverimage: reader.result });
            };
            reader.readAsDataURL(file);

        };
    }
    const handleImagelogo = (e) => {

        const file = e.target.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onloadend = () => {
                setImageLogo(reader.result);
                setAddSeller({ ...addseller, shopimage: reader.result });
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
    return isLoaded ? (
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
                                                        <label >Store Name</label>
                                                    </div>
                                                    <div className="add-input">
                                                        <input name="shopname" value={addseller.firstname} onChange={(e) => setAddSeller({ ...addseller, firstname: e.target.value })} type="text" placeholder=" Ex: Store name" />
                                                    </div>
                                                </div>
                                                <div className="addnew-input-box">
                                                    <div className="boxf">
                                                        <label >Address</label>
                                                    </div>
                                                    <div className="add-text">
                                                        <textarea name="addressname" type="text" placeholder=" Ex: Store name" />
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
                                                <div className="show-left">
                                                    <div className="shoplogo">
                                                        <h4>Logo</h4>
                                                    </div>
                                                    <div className="image-show">

                                                        <label for="imagefile">
                                                            {addseller && <img src={imagelogo} alt="" />}
                                                            <input type="file" id="imagefile" onChange={handleImagelogo} alt="" />
                                                        </label>

                                                    </div>
                                                </div>
                                                <div className="show-left">
                                                    <div className="shoplogo">
                                                        <h4>Cover Image</h4>
                                                    </div>
                                                    <div className="image-show-cover">

                                                        <label for="coverfile">
                                                            {addseller && <img src={imagepreview} alt="" />}
                                                            <input type="file" id="coverfile" onChange={handleImageChange} alt="" />
                                                        </label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="image-size">
                                                <div className="image-size-heading">
                                                    <h4> Image Size Max 2 MB *</h4>
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
                                                <h4>Store Infomation</h4>
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

                                                        <Select className="city-select" value={datashow} onChange={handleAddTime}   >
                                                            <ListSubheader >
                                                                <Box sx={{ width: "400px" }}>



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
                                                                        sx={{ bgcolor: "#107980", width: "80px", height: "35px", color: "#fff" }}
                                                                    >
                                                                        Done
                                                                    </Button>
                                                                </Box>
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
                                                            <input type="text" value={position.lat} readOnly />
                                                        </div>
                                                    </div>
                                                    <div className="map-latitude">
                                                        <div className="map-l">
                                                            <label>Longititude</label>
                                                        </div>
                                                        <div className="map-linput">
                                                            <input type="text" value={position.lng} readOnly />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="map-right">

                                                    <GoogleMap
                                                        mapContainerStyle={containerStyle}
                                                        center={position}
                                                        zoom={12}
                                                        onClick={handleMapClick}
                                                        onLoad={(mapInstance) => setMap(mapInstance)}
                                                    >
                                                        <div className="map-searchbox">
                                                            <Autocomplete onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)} onPlaceChanged={onPlaceChanged}>
                                                                <input type="text" placeholder="search localtion.." />
                                                            </Autocomplete>
                                                        </div>
                                                        <Marker position={position} />
                                                    </GoogleMap>

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
                                                <h3>Owner information</h3>
                                            </div>
                                        </div>
                                        <div className="e-p-c">
                                            <div className="e-box">
                                                <div className="e-lable">
                                                    <lable>First-Name</lable>
                                                </div>
                                                <div className="e-input">
                                                    <input type="text" name="selleremail" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="e-box">
                                                <div className="e-lable">
                                                    <lable>Last Name</lable>

                                                </div>
                                                <div className="e-input">
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="e-box">
                                                <div className="e-lable">
                                                    <lable>Phone No</lable>
                                                </div>
                                                <div className="e-input">
                                                    <input type="number" placeholder="phone.." />
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
    ) : (
        <div>Loading map...</div>
    )
}
export default AddNewSeller;