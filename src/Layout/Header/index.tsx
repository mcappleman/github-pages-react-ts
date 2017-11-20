import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

interface HeaderState {
  isOpen: boolean;
}

export default class Header extends React.Component<{}, HeaderState> {

  constructor(props: {}) {

    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

  }

  toggle() {

    this.setState({ isOpen: !this.state.isOpen });

  }

  render() {

    return (
      <div>
        <Navbar className="navbar-dark" color="dark" expand="sm">
          <NavbarBrand href="/">Application Name</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink active={window.location.pathname === '/'} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={window.location.pathname === '/about/'} href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={window.location.pathname === '/contact/'} href="/contact/">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );

  }

}