import React from "react";
import logo from "../../assets/logoNew.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import { Link } from "react-router-dom";
import { IoLocationOutline, IoLogoFacebook } from "react-icons/io5";
import {
  AiTwotonePhone,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { links } from "../../utils/links";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-inner">
        <div className="column-one">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p>
            Curabitur et velit porttitor, tincidunt nibh eget, sodales velit. In
            consectetur malesuada ipsum non posuere. Vestibulum nunc enim,
            tincidunt eget egestas et, porttitor in massa. Integer mattis erat
            vitae vulputate hendrerit. Nulla efficitur sollicitudin tristique.
            Vivamus pulvinar nisl sed felis ornare, et blandit neque luctus.
            Pellentesque congue placerat enim, in rutrum lorem facilisis vel.
          </p>
          <div className="social-links">
            <IoLogoFacebook className="facebook" />
            <AiOutlineTwitter className="twitter" />
            <img src={logo} className="social-logo" alt="logo" />
          </div>
        </div>
        <div className="column-two">
          <h3>QUICK LINKS</h3>
          {links.map((link) => {
            return (
              <>
                <Link to={link.path}>{link.name}</Link>
                <p>{link.text}</p>
              </>
            );
          })}
        </div>
        <div className="column-three">
          <h3>KONTAKT OS</h3>

          <div>
            <IoLocationOutline className="icon-footer" />
            Fredericevej 69 7100 Vejle
          </div>

          <div>
            <AiTwotonePhone className="icon-footer" />
            Kontakt os:<br></br> 70 70 80 80
          </div>
          <div>
            <AiOutlineMail className="icon-footer" />
            E-mail:
            <br /> mail@demolink.org
          </div>
          <div className="payment-icons">Vi modtager folgende kort:</div>
          <div className="payment-links">
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
            <img src={paypal} alt="paypal" />
          </div>
        </div>
      </div>
      <div className="footer-reserved">
        Copiright &reg; 2019 All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
