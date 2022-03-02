import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Menu, X, Search, Settings, User, HelpCircle, Lock, LogOut } from 'react-feather';

import { showRightSidebar } from '../redux/actions';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import LanguageDropdown from './LanguageDropdown';

// import logo from '../assets/images/O3i_LOGO_V8_FINAL_800-X-800 3.png';
import profilePic from '../assets/images/users/avatar-7.jpg';
import './Menubar.css';
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import profile from '../assets/images/115-1150152_default-profile-picture-avatar-png-green.png';


const Notifications = [{
  id: 1,
  text: 'New user registered',
  subText: '1 min ago',
  icon: 'uil uil-user-plus',
  bgColor: 'primary'
},
{
  id: 2,
  text: 'Karen Robinson',
  subText: 'Wow ! this admin looks good and awesome design',
  icon: 'uil uil-comment-message',
  bgColor: 'success'
},
{
  id: 3,
  text: 'Cristina Pride',
  subText: 'Hi, How are you? What about our next meeting',
  icon: 'uil uil-comment-message',
  bgColor: 'danger'
}, {
  id: 4,
  text: 'New user registered',
  subText: '1 day ago',
  icon: 'uil uil-user-plus',
  bgColor: 'info'
},];

const ProfileMenus = [{
  label: 'My Account',
  icon: User,
  redirectTo: "/",
},
{
  label: 'Settings',
  icon: Settings,
  redirectTo: "/"
},
{
  label: 'Support',
  icon: HelpCircle,
  redirectTo: "/"
},
{
  label: 'Lock Screen',
  icon: Lock,
  redirectTo: "/"
},
{
  label: 'Logout',
  icon: LogOut,
  redirectTo: "/account/logout",
  hasDivider: true
}]


class Topbar extends Component {
  constructor(props) {
    super(props);

    this.handleRightSideBar = this.handleRightSideBar.bind(this);
  }

  /**
   * Toggles the right sidebar
   */
  handleRightSideBar = () => {
    this.props.showRightSidebar();
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar navbar-expand flex-column flex-md-row navbar-custom">
          <Container fluid>
          {/* <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
              <li className="">
                <button className="button-menu-mobile open-left disable-btn" onClick={this.props.openLeftMenuCallBack}>
                  <Menu className="menu-icon" />
                  <X className="close-icon" />
                </button>
              </li>
            </ul> */}
            { /* logo */}
            {/* <Link to="/" className="navbar-brand mr-0 mr-md-2 logo">
              <span className="logo-lg">
                <img src={logo} alt="" height="100" />
                <span className="d-inline h5 ml-2 text-logo">Shreyu</span>
              </span>
              <span className="logo-sm">
                <img src={logo} alt="" height="24" />
              </span>
            </Link> */}

            { /* menu*/}
            <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0 toogle-icon-btn">
              <li className="">
                <button className="button-menu-mobile open-left" onClick={this.props.openLeftMenuCallBack}>
                  <Menu className="menu-icon" />
                  <X className="close-icon" />
                </button>
              </li>
              <li className="d-none d-sm-block">
                <div className="app-search">
                  <form>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <Search />
                    </div>
                  </form>
                </div>
              </li>
            </ul>


            <ul className="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
              {/* <li className="d-none d-sm-block">
                <div className="app-search">
                  <form>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <Search />
                    </div>
                  </form>
                </div>
              </li> */}

              <LanguageDropdown tag="li" />
              <NotificationDropdown notifications={Notifications} />
              <li className="pt-4 pl-3 pr-3">
              <img src={profile} alt="" height="25" className='side-logo' />
              </li>
              <li className="pt-4">
                <p>OneO3i</p>
              </li>

              <li className="notification-list d-flex">
                <button className="btn btn-link nav-link right-bar-toggle">
                  <Settings />
                  </button>
                  <UncontrolledDropdown className="align-self-center profile-dropdown-menu position-absolute">
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="btn btn-link p-0 dropdown-toggle mr-0">
                    <FeatherIcon.ChevronDown />
                </DropdownToggle>
                <DropdownMenu right className="topbar-dropdown-menu profile-dropdown-items">
                    <Link to="/" className="dropdown-item notify-item">
                        <FeatherIcon.User className="icon-dual icon-xs mr-2" />
                        <span>My Account</span>
                    </Link>
                    <Link to="/" className="dropdown-item notify-item">
                        <FeatherIcon.Settings className="icon-dual icon-xs mr-2" />
                        <span>Settings</span>
                    </Link>
                    <Link to="/" className="dropdown-item notify-item">
                        <FeatherIcon.HelpCircle className="icon-dual icon-xs mr-2" />
                        <span>Support</span>
                    </Link>
                    <Link to="/" className="dropdown-item notify-item">
                        <FeatherIcon.Lock className="icon-dual icon-xs mr-2" />
                        <span>Lock Screen</span>
                    </Link>
                    <DropdownItem divider />
                    <Link to="/account/logout" className="dropdown-item notify-item">
                        <FeatherIcon.LogOut className="icon-dual icon-xs mr-2" />
                        <span>Logout</span>
                    </Link>
                </DropdownMenu>
            </UncontrolledDropdown>
                
              </li>

              <ProfileDropdown profilePic={profilePic} menuItems={ProfileMenus} username={'Shreyu N'} description="Administrator" />
            </ul>

          </Container>
        </div>
      </React.Fragment >
    );
  }
}

export default connect(
  null,
  { showRightSidebar }
)(Topbar);
