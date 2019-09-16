import React from 'react';
import github from '../img/github-icon.svg';
//import facebook from '../img/social/facebook.svg';
//import instagram from '../img/social/instagram.svg';
//import twitter from '../img/social/twitter.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className="footer has-background-cadetblue has-text-white-ter"
        style={{ backgroundColor: 'cadetblue' }}
      >
        <div
          className="content has-text-centered has-text-white-ter"
          style={{ backgroundColor: 'cadetblue' }}
        >
          <div className="columns is-mobile">
            {/* ▼▼▼ offset ※is-offset-x が効かない為 ▼▼▼ */}
            <div className="column is-4"></div>
            {/* ▲▲▲ offset ※is-offset-x が効かない為 ▲▲▲ */}
            <div className="column is-4">
              <a title="github" href="https://github.com/taroshuntaro/">
                <img
                  src={github}
                  alt="Github"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
          <div className="copyright" style={{ paddingBottom: '1rem' }}>
            © 2019 taroshuntaro blog
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
