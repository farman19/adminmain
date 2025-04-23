import React, { useContext } from "react";
import './header.css'
import { Button } from "@mui/material";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Divider, Menu, MenuItem } from "@mui/material";
import { Link, NavLink, useNavigate, } from "react-router-dom";


import { MyContext } from "../../home/home";

const Header = () => {
  const context = useContext(MyContext);
  
  const [message, setMessage] = React.useState(null);
  const [myaccountdrop, setMyAccountDrop] = React.useState(null);
  const messageopen = Boolean(message);
  const accountopen  = Boolean(myaccountdrop)

 

  const handleMessageOpen = (event) => {
      setMessage(event.currentTarget);
  };
  const handleMessageClose = () => {
      setMessage(null);
  };
  
  const handleMyAccountopen = (event) => {
      setMyAccountDrop(event.currentTarget);
  };
  const handleMyAccountclose = () => {
      setMyAccountDrop(null);
  };

  return (
    <>
      <div className="header-section">
      

        <div className="top-left-side">
          <div className="logo-box">
            <div className="symbole">
              <img src="./images/symbol.png" alt=""/>
            </div>
            <div className="logo-text">
             <img src="./images/logotext.png" alt=""/>
            </div>
          </div>
          <div className="sidebar-btn">
            <Button
              onClick={() => context.setSidebardrop(!context.sidebardrop)}
            >
              {context.sidebardrop === false ? (
                <MdMenuOpen />
              ) : (
                <MdOutlineMenu />
              )}
            </Button>
          </div>

        </div>
        <div className="main-header">
        <div className="top-right-side">
                        <div className="message">
                            <Button
                                id="basic-button"
                                aria-controls={messageopen ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={messageopen ? 'true' : undefined}
                                onClick={handleMessageOpen}
                            >
                                <MdOutlineEmail />
                            </Button>
                            <Menu
                                id="basic-menu"
                                className="drop-menu"
                                anchorEl={message}
                                open={messageopen}
                                onClose={handleMessageClose}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

                            >
                                <MenuItem onClick={handleMessageClose}>
                                    <h3>Message (23) </h3>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleMessageClose}>
                                    <div className="user-img-sms">
                                        <div className="u-sms-img">
                                            <div className="av-img">
                                                <img src="./images/userimg.jpg" alt="" />
                                            </div>

                                        </div>
                                        <div className="user-sms-info">
                                            <div className="u-s-name"><h3>Mireon Bonny</h3><span className="sms-time"><p>~Now</p></span></div>
                                            <div className="sms-chat" >
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing kdfsdhfjhsdjhfsdjhfjdshfhdsjf.</p>
                                            </div>
                                        </div>
                                        <div className="sms-count">
                                            <span className="c-sms">3</span>
                                        </div>
                                    </div>

                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleMessageClose}>
                                    <div className="user-img-sms">
                                        <div className="u-sms-img">
                                            <div className="av-img">
                                                <img src="./images/userimg.jpg" alt="" />
                                            </div>

                                        </div>
                                        <div className="user-sms-info">
                                            <div className="u-s-name"><h3>Mireon Bonny</h3><span className="sms-time"><p>~Now</p></span></div>
                                            <div className="sms-chat" >
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing kdfsdhfjhsdjhfsdjhfjdshfhdsjf.</p>
                                            </div>
                                        </div>
                                        <div className="sms-count">
                                            <span className="c-sms">3</span>
                                        </div>
                                    </div>

                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleMessageClose}>
                                    <div className="user-img-sms">
                                        <div className="u-sms-img">
                                            <div className="av-img">
                                                <img src="./images/userimg.jpg" alt="" />
                                            </div>

                                        </div>
                                        <div className="user-sms-info">
                                            <div className="u-s-name"><h3>Mireon Bonny</h3><span className="sms-time"><p>~Now</p></span></div>
                                            <div className="sms-chat" >
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing kdfsdhfjhsdjhfsdjhfjdshfhdsjf.</p>
                                            </div>
                                        </div>
                                        <div className="sms-count">
                                            <span className="c-sms">3</span>
                                        </div>
                                    </div>

                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleMessageClose}>
                                    <div className="user-img-sms">
                                        <div className="u-sms-img">
                                            <div className="av-img">
                                                <img src="./images/userimg.jpg" alt="" />
                                            </div>

                                        </div>
                                        <div className="user-sms-info">
                                            <div className="u-s-name"><h3>Mireon Bonny</h3><span className="sms-time"><p>~Now</p></span></div>
                                            <div className="sms-chat" >
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing kdfsdhfjhsdjhfsdjhfjdshfhdsjf.</p>
                                            </div>
                                        </div>
                                        <div className="sms-count">
                                            <span className="c-sms">3</span>
                                        </div>
                                    </div>

                                </MenuItem>
                            </Menu>
                        </div>

                        <div className="my-account-box">
                            <Button id="basic-button"
                                aria-controls={accountopen ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={accountopen ? 'true' : undefined}
                                onClick={handleMyAccountopen}>
                                <div className="my-account">
                                    <div className="my-acc-img-box" >
                                      <img src="./images/userimg.jpg" alt="" />
                                    </div>
                                    <div className="my-acc-info-box">
                                        <div className="my-h">
                                            <h3>Vinit Kumar</h3>
                                        </div>
                                        <div className="my-e">
                                            <p>Demowidydfgfgh@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={myaccountdrop}
                                open={accountopen}
                                onClose={handleMyAccountclose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleMyAccountclose}>Profile</MenuItem>
                                <MenuItem onClick={handleMyAccountclose}>My account</MenuItem>
                                <MenuItem><NavLink to='/' >Logout</NavLink></MenuItem> 
                            </Menu>
                        </div>

                    </div>

       </div>
      </div>
    </>
  )
}

export default Header;