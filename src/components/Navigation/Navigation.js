import React from 'react';
import { Nav, Icon } from 'rsuite';
import { NavLink } from 'react-router-dom'; 
import 'rsuite/dist/styles/rsuite-dark.css';


const CustomNav = ({ active, onSelect, ...props }) => {
  return (
        <Nav {...props} activeKey={active} onSelect={onSelect}>
            <Nav.Item eventKey="home" icon={<Icon icon="home" />}><NavLink to="/" activeClassName="activeoverride rs-icon-home-active rs-nav-item-active">Home</NavLink></Nav.Item>
            <Nav.Item eventKey="tournaments"><NavLink to="/tournaments" activeClassName="activeoverride rs-nav-item-active">Tournaments</NavLink></Nav.Item>
            <Nav.Item eventKey="fixtures"><NavLink to="/fixtures" activeClassName="activeoverride rs-nav-item-active">Fixtures</NavLink></Nav.Item> 
            <Nav.Item eventKey="results"><NavLink to="/results" activeClassName="activeoverride rs-nav-item-active">Results</NavLink></Nav.Item>
            <Nav.Item eventKey="about"><NavLink to="/about" activeClassName="activeoverride rs-nav-item-active">About</NavLink></Nav.Item>
        </Nav>
        );
};


class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'home'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey) {
    this.setState({ active: activeKey });
  }
  render() {
    const { active } = this.state;
    return (
      <div>
        <CustomNav appearance="subtle" active={active} onSelect={this.handleSelect} />
      </div>
    );
  }
}

export default Navigation