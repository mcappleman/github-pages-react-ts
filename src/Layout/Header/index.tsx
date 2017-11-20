import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export interface HeaderState {
  isOpen: boolean;
}

export default class Header extends React.Component<{}, HeaderState> {

  constructor(props: {}) {

    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };

  }

  toggle() {

    this.setState({ isOpen: !this.state.isOpen });

  }

  render() {

    return (
      <div>
        <Navbar color="dark" dark={true} expand="sm">
          <NavbarBrand href="/">GitHub React</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );

  }

}