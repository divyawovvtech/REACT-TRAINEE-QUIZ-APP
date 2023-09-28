import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import WovvtechLogo from "../../assets/images/WovvtechLogo.png";
class MainLayout extends Component {
  static propTypes = {}

  render() {
    return (
      <Container maxWidth="lg">
        <div className='logoBox'>
          <img src={WovvtechLogo} className="logo" alt="logo" srcset="" />
          {this.props.children}
        </div>
      </Container>
    )
  }
}

export default MainLayout