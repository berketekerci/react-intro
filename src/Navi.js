import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";


export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar
          
          style={{backgroundColor:'#165455'}}
          expand
          className="justify-content-end text-white"
         
        >
          <NavbarBrand className="flex mb-0 h1 large-font"style={{ fontSize: "24px" }}  href="/">
            Northwind App
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            className="justify-content-end"
            isOpen={this.state.isOpen}
            navbar
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="form1">Form Demo 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="form2">Form Demo 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
