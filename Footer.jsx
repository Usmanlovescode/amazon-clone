import react from "react";
import "./styles/Footer.css";
const Footer = (props) => {
  return (
    <>
      <div className="upper__foter">
        <div className="container__foter">
          <p className="heading__foter">Get to know us</p>
          <div className="footer__links">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </div>
        </div>
        <div className="container__foter">
          <p className="heading__foter">Make money with us</p>
          <div className="footer__links">
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell on Amazon Business</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with us</a>
            </li>
            <li>
              <a href="#">Host an Amazon Hub</a>
            </li>
          </div>
        </div>
        <div className="container__foter">
          <p className="heading__foter">Amazon Payment Products</p>
          <div className="footer__links">
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </div>
        </div>
        <div className="container__foter">
          <p className="heading__foter">Let Us Help You</p>
          <div className="footer__links">
            <li>
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates &amp; Policies</a>
            </li>
            <li>
              <a href="#">Retursn &amp; Replacements</a>
            </li>
            <li>
              <a href="#">Amazon Assistant</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </div>
        </div>
      </div>
      {/* Our Buttons Section  */}
      <div className="foter__buttons">
        <button>
          <a href="#">English</a>
        </button>
        <button>
          <a href="#">$USD - U.S Dollar</a>
        </button>
        <button>
          <a href="#">United States</a>
        </button>
      </div>
      {/* Starting Our Lower Footer Section */}
      <div className="lower__foter__container">
        <div className="foter__container__sec">
          <div className="footer__links">
            <li>
              <a href="#">Amazon Music</a>
              <p className="link_para">Stream mililons of songs</p>
            </li>
            <li>
              <a href="#">Sell on Amazon</a>
              <p className="link_para">Start a Selling Account</p>
            </li>
            <li>
              <a href="#">Book Depository</a>
              <p className="link_para">Books With Free Delievery WorldWide</p>
            </li>
            <li>
              <a href="#">IMDbPro</a>
              <p className="link_para">
                Get Info Entertainment Professionals Need
              </p>
            </li>
          </div>

          <div className="footer__links2">
            <li>
              <a href="#">Amazon Advertising</a>
              <p className="link_para">Find,attract, and engage customers</p>
            </li>
            <li>
              <a href="#">Amazon Business</a>
              <p className="link_para">Everthing For Your Business</p>
            </li>
            <li>
              <a href="#">Box Office Mojo</a>
              <p className="link_para">Find Movie &nbsp; Box Office Data</p>
            </li>
            <li>
              <a href="#">Kindle Direct Publishing </a>
              <p className="link_para">
                Indie Digital &amp; Print Publishing Made Easy
              </p>
            </li>
            <li>
              <a href="#">eero WIFI </a>
              <p className="link_para">Stream 4K Video in Every Room</p>
            </li>
          </div>

          <div className="footer__links3">
            <li>
              <a href="#">Amazon Drive</a>
              <p className="link_para">Cloud Storage from Amazon</p>
            </li>
            <li>
              <a href="#">Amazon Global</a>
              <p className="link_para">Ship Order Internationally</p>
            </li>
            <li>
              <a href="#">ComiXology</a>
              <p className="link_para">Thousands of Digital Comics</p>
            </li>
            <li>
              <a href="#">Prime Video Direct</a>
              <p className="link_para">Video Distribution Made Easy</p>
            </li>
            <li>
              <a href="#">Blink</a>
              <p className="link_para">Smart Security for Every Home</p>
            </li>
          </div>

          <div className="footer__links4">
            <li>
              <a href="#">6pm</a>
              <p className="link_para">Score deals on fashion brands</p>
            </li>
            <li>
              <a href="#">Home Services</a>
              <p className="link_para">Experienced Pros Happiness Gurantee</p>
            </li>
            <li>
              <a href="#">DPReview</a>
              <p className="link_para">Digital Photography</p>
            </li>
            <li>
              <a href="#">Shophop</a>
              <p className="link_para">Designer Fashion Brands</p>
            </li>
            <li>
              <a href="#">Neighbors App</a>
              <p className="link_para">Real-Time Crime &am; Safety Alerts</p>
            </li>
          </div>

          <div className="footer__links5">
            <li>
              <a href="#">AbeBookx</a>
              <p className="link_para">Books,art &amp; collections</p>
            </li>
            <li>
              <a href="#">Amazon Ignite</a>
              <p className="link_para">
                Sell your original Digital Education Resources
              </p>
            </li>
            <li>
              <a href="#">Fabric</a>
              <p className="link_para">Sewing,Quilting &am; Knitting</p>
            </li>
            <li>
              <a href="#">Woot!</a>
              <p className="link_para">Deals and Shenanigans</p>
            </li>
            <li>
              <a href="#">
                Amazon Subscription <br /> Boxes
              </a>
              <p className="link_para">Top Boxes</p>
            </li>
          </div>

          <div className="footer__links6">
            <li>
              <a href="#">Alexa</a>
              <p className="link_para">Actionable Analytics</p>
            </li>
            <li>
              <a href="#">Audible</a>
              <p className="link_para">Listen to Books &amp; Audio</p>
            </li>
            <li>
              <a href="#">IMDb</a>
              <p className="link_para">Movies, TV &amp; Celebrities</p>
            </li>
            <li>
              <a href="#">Ring</a>
              <p className="link_para">Smart Home Security Systems</p>
            </li>
          </div>
        </div>
      </div>
      <div className="conditions">
        <li>
          <a href="#">Conditions of Use</a>
        </li>
        <li>
          <a href="#">Privacy Notice</a>
        </li>
        <li>
          <a href="#">Internet Based Ads</a>
        </li>
      </div>
      <div className="condition">
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  );
};

export default Footer;
