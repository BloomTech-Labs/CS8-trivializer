import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { updateSettings, signOut } from "../actions/index";

import { 
  Hamburger,
  NavText,
  NavUl,
  NavLi
  } from './primitives/Nav'; 

import Nav from './UI/Nav';
import './primitives/css/Settings.css'


import {
  SettingsWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label,
  Title,
  Input,
  FormWrapper,
  PositionMenu
} from "./primitives/Settings";

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
        orgName: '' ,
        email: '',
        oldPassword: '',
        password: '',
        menu: false
    }
 
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  logOut = async event => {
    await this.props.signOut();
    this.props.history.push("/")
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
    this.setState({ menu: true})
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.setState({ menu: false})
  }
  



  componentDidMount(){
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const email = decoded.email;
    const orgName = decoded.orgName;

    console.log("USER_TYPE", decoded.user_type)
    this.setState({ orgName, email })
  }

    handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })

  }

  onSubmit = event => {
    event.preventDefault();

    let formProps = this.state;
   
    this.props.updateSettings(formProps, () => {
      this.props.history.push('/games');
  });
} 

  
  render() {
    
    let hamburger;

            if (this.state.menu === true) {
                hamburger = <Hamburger onClick={()=> this.state.menu ? this.closeNav() : this.openNav()} class="col">
                            <div class="con">
                            <div class="bar arrow-top-r"></div>
                            <div class="bar arrow-middle-r"></div>
                            <div class="bar arrow-bottom-r"></div>
                            </div>
                         </Hamburger>
            }
            
            if (this.state.menu === false) {
                hamburger = <Hamburger onClick={()=> this.state.menu ? this.closeNav() : this.openNav()} class="col">
                            <div class="con">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            </div>
                         </Hamburger>
            }

    return (
      <SettingsWrapper id="main">
        <FormWrapper>
           <Nav id="mySidenav">
                <NavUl>
                    <NavLi><NavText onClick={()=> this.props.history.push('/games')}>Games</NavText></NavLi>
                    <NavLi><NavText onClick={()=> this.props.history.push('/billing')}>Upgrade</NavText></NavLi>
                    <NavLi><NavText onClick={()=> this.logOut()}>Log Out</NavText></NavLi>
                </NavUl>    
            </Nav>

                <PositionMenu>{hamburger}</PositionMenu>

        <Title>SETTINGS</Title>
        <form onSubmit={(e)=> this.onSubmit(e)} >
          <fieldset>
            <LabelWrapper>
              <Label>Organization Name</Label>
            </LabelWrapper>
            <Input
              name="orgName"
              placeholder={this.state.orgName}
              type="text"
              component="input"
              autoComplete="none"
              onChange={this.handleInput}
              value={this.state.orgName}
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Email</Label>
            </LabelWrapper>
            <Input
              name="email"
              type="text"
              component="input"
              autoComplete="none"
              placeholder={this.state.email}
              onChange={this.handleInput}
              value={this.state.email}
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Old Password</Label>
            </LabelWrapper>
            <Input
              name="oldPassword"
              type="password"
              component="input"
              autoComplete="none"
              onChange={this.handleInput}
              value={this.state.oldPassword}
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>New Password</Label>
            </LabelWrapper>
            <Input
              name="password"
              type="password"
              component="input"
              autoComplete="none"
              onChange={this.handleInput}
              value={this.state.password}
            />
          </fieldset>
          <Button>Save & Update </Button>
         
        </form>
        </FormWrapper>
      </SettingsWrapper>
    );
  }
}
function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}
export default
  connect( mapStateToProps, { updateSettings, signOut })(withRouter(Settings));
