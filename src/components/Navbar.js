import React from 'react';
import { Link } from 'gatsby';
import Icon from '../img/site-icon.jpg';
import github from '../img/github-icon.svg';
//import facebook from '../img/social/facebook.svg';
//import instagram from '../img/social/instagram.svg';
//import twitter from '../img/social/twitter.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={Icon} alt="SiteIcon" style={{ borderRadius: '1em' }} />
              &nbsp;&nbsp;taroshuntaro blog
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <SocialIcon
                ankerHref="https://github.com/taroshuntaro/"
                imgSrc={github}
                imgAlt="Github"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

// ソーシャルメディアへのリンクアイコン
const SocialIcon = ({ ankerHref, imgSrc, imgAlt }) => {
  return (
    <a
      className="navbar-item"
      href={ankerHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon">
        <img src={imgSrc} alt={imgAlt} />
      </span>
    </a>
  );
};

export default Navbar;
