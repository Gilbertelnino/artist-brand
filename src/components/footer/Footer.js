import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div className="footer" id="newsletter">
      <div className="footer__top">
        <span className="newsletter-title">GET THE NEWSLETTER</span>
        <form className="footer__form">
          <div className="form-group">
            <label for="field_email_address" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="field_email_address"
              name="field_email_address"
              maxlength="50"
              size="20"
              className="form-control input-lg"
              placeholder="Your email address"
              required=""
            />
          </div>
          <button>SIGN UP</button>
        </form>
      </div>
      <div className="footer__links">
        <div className="footer__privacyContainer">
          <a href="/" title="igitangaza record" className="record__title">
            IGITANGAZA RECORD
          </a>

          <div className="footer__right__links">
            <div className="footer__right">
              <span>
                <a href="/">© 2021 Igitangaza Music.</a> All Rights Reserved.
              </span>
            </div>
            <ul>
              <li>
                <a href="/">Send Us Feedback </a>{' '}
                <span className="period" style={{paddingRight: '5px'}}>
                  {' '}
                  |{' '}
                </span>
              </li>{' '}
              <li>
                <a href="/">Privacy Policy</a>{' '}
                <span className="period" style={{paddingRight: '5px'}}>
                  {' '}
                  |{' '}
                </span>
              </li>
              <li>
                <a href="/">Terms and Conditions </a>{' '}
                <span className="period" style={{paddingRight: '5px'}}>
                  {' '}
                  |{' '}
                </span>
              </li>
              <li>
                {' '}
                <a href="/">Why Music Matters</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__album">
          <ul>
            <li>
              <a href="/">Album1 </a>
            </li>
            <li>
              <a href="/">Album2</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <span className="footer_social_title">Connect with bruce</span>
          <ul>
            <li>
              {' '}
              <a
                href="https://www.facebook.com/brucemelodierw"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <FacebookIcon />{' '}
              </a>{' '}
            </li>
            <li>
              <a
                href="https://www.instagram.com/brucemelodie/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <InstagramIcon />{' '}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/BruceMelodie"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <TwitterIcon />{' '}
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCbp-tIRMJP4SwLjYlJCrolA"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <YouTubeIcon />{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
<div class="form-group">
  <label for="field_email_address" class="sr-only">
    Email Address
  </label>
  <input
    type="email"
    id="field_email_address"
    name="field_email_address"
    maxlength="50"
    size="20"
    class="form-control input-lg"
    placeholder="Your email address"
    required=""
  />
</div>;
