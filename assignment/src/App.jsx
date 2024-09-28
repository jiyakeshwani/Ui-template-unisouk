import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <section className="hero-sec">
          <h1>
            Start Crafting Your{" "}
            <span className="text-clr">Next Great Idea</span>
          </h1>
          <p className="hero-para">
            Simplifying the creation of landing pages, blog pages, application
            pages and so much more!{" "}
          </p>
          <div className="hero-btn">
            <div className="popover">Only $15/mo</div>
            <button className="purchase-btn">Purchase Now</button>
          </div>
          <a className="learn-more" href="#">
            Learn More
          </a>
        </section>
        <section className="clients">
          <h4>Trusted by Top-Leading Companies</h4>
          <div className="logos">
            <img src="/disney.jpg" alt="disney" />
            <img src="/google.svg" alt="google" />
            <img src="/hubspot.svg" alt="hubspot" />
            <img src="/youtube.svg" alt="youtube" />
            <img src="/slack.svg" alt="slack" />
            <img src="/shopify.svg" alt="shopify" />
          </div>
        </section>
        {/*  */}
        <section className="productivity-sec">
          <div className="flex productivity-li">
            <figure>
              <img src="./illustrator1.png" alt="#" />
            </figure>
            <div>
              <h4 style={{ textAlign: "left" }} className="li-head">
                {" "}
                Boost Productivity
              </h4>
              <p style={{ textAlign: "left" }} className="li-p">
                Build an atmosphere that creates Productivity in your
                organization and your company culture
              </p>
              <ul className="list">
                <li className="list-li">
                  {" "}
                  <span>
                    <img src="./listIcon.png" alt="listicon" />
                  </span>{" "}
                  Maximize Productivity and growth
                </li>
                <li className="list-li">
                  {" "}
                  <span>
                    <img src="./listIcon.png" alt="listicon" />
                  </span>{" "}
                  Maximize Productivity and growth
                </li>

                <li className="list-li">
                  {" "}
                  <span>
                    <img src="./listIcon.png" alt="listicon" />
                  </span>{" "}
                  Maximize Productivity and growth
                </li>

                <li className="list-li">
                  {" "}
                  <span>
                    <img src="./listIcon.png" alt="listicon" />
                  </span>{" "}
                  Maximize Productivity and growth
                </li>
              </ul>
            </div>
          </div>
          <div className="flex productivity-li2">
            <div>
              <h4 className="li-head" style={{ textAlign: "left" }}>
                {" "}
                Boost Productivity
              </h4>
              <p className="li-p" style={{ textAlign: "left" }}>
                Build an atmosphere that creates Productivity in your
                organization and your company culture
              </p>
              <ul className="list">
                <li className="list-li">
                  {" "}
                  <span>
                    <img src="./listIcon.png" alt="listicon" />
                  </span>{" "}
                  Maximize Productivity and growth
                </li>
                <li className="list-li">
                  {" "}
                  <span>
                    <img src="./listIcon.png" alt="listicon" />
                  </span>{" "}
                  Maximize Productivity and growth
                </li>

                <li className="list-li">
                  {" "}
                  <span>
                    <img src="./listIcon.png" alt="listicon" />
                  </span>{" "}
                  Maximize Productivity and growth
                </li>

                <li className="list-li">
                  {" "}
                  <span>
                    <img src="./listIcon.png" alt="listicon" />
                  </span>{" "}
                  Maximize Productivity and growth
                </li>
              </ul>
            </div>

            <figure>
              <img src="./illustrator2.png" alt="#" />
            </figure>
          </div>
        </section>
        {/* Features section */}
        <section className="feature-sec">
          <h2>Our Features</h2>
          <p>Check out our list of awesome features below.</p>
          <div className="grid">
            <div className="features-box">
              <figure className="img-container">
                <img src="/soundicon.svg" alt="sound" />
              </figure>
              <h5>Certifications</h5>
              <p>
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>
            <div className="features-box">
              <figure className="img-container">
                <img src="/soundicon.svg" alt="sound" />
              </figure>
              <h5>Certifications</h5>
              <p>
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>
            <div className="features-box">
              <figure className="img-container">
                <img src="/soundicon.svg" alt="sound" />
              </figure>
              <h5>Certifications</h5>
              <p>
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>
            <div className="features-box">
              <figure className="img-container">
                <img src="/soundicon.svg" alt="sound" />
              </figure>
              <h5>Certifications</h5>
              <p>
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>
            <div className="features-box">
              <figure className="img-container">
                <img src="/soundicon.svg" alt="sound" />
              </figure>
              <h5>Certifications</h5>
              <p>
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>
            <div className="features-box">
              <figure className="img-container">
                <img src="/soundicon.svg" alt="sound" />
              </figure>
              <h5>Certifications</h5>
              <p>
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>
          </div>
        </section>
        {/* Team section */}
        <section className="team-section">
          <div className="flex">
            <div className="text">
              <p>OUR TEAM</p>
              <h2>An incredible team of amazing individuals</h2>
            </div>
            <div className="element"></div>
          </div>
          <div className="grid2">
            <div className="grid-item">
              <div className="team-circle1">
                <img src="/tommy.png" alt="team" className="image" />
              </div>
              <p>Freddy Smith</p>
              <p className="designation">CEO and Founder</p>
              <div className="flex icons2">
                <FontAwesomeIcon className="i" icon={faTwitter} />
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
            </div>
            <div className="grid-item">
              <div className="team-circle2">
                <img src="/carl.png" alt="team" className="image" />
              </div>
              <p>Carl Jones</p>
              <p className="designation">CTO and Co-Founder</p>
              <div className="flex icons2">
                <FontAwesomeIcon className="i" icon={faTwitter} />
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
            </div>
            <div className="grid-item">
              <div className="team-circle3">
                <img src="/susan.png" alt="team" className="image" />
              </div>
              <p>Susan Peterson</p>
              <p className="designation">Marketing Directory</p>
              <div className="flex icons2">
                <FontAwesomeIcon className="i" icon={faTwitter} />
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
            </div>
            <div className="grid-item">
              <div className="team-circle2">
                <img src="/tommy.png" alt="team" className="image" />
              </div>
              <p>Tommy Barnes</p>
              <p className="designation">Designer</p>
              <div className="flex icons2">
                <FontAwesomeIcon className="i" icon={faTwitter} />
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
            </div>
            <div className="grid-item">
              <div className="team-circle2">
                <img src="/ron.png" alt="team" className="image" />
              </div>
              <p>Ron Jenson</p>
              <p className="designation">Senior Developer</p>
              <div className="flex icons2">
                <FontAwesomeIcon className="i" icon={faTwitter} />
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
            </div>
            <div className="grid-item">
              <div className="team-circle3">
                <img src="/pete.png" alt="team" className="image" />
              </div>
              <p>Peter Thompkins</p>
              <p className="designation">Web Developer</p>
              <div className="flex icons2">
                <FontAwesomeIcon className="i" icon={faTwitter} />
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
            </div>
            <div className="grid-item">
              <div className="team-circle2">
                <img src="/kelly.png" alt="team" className="image" />
              </div>
              <p>Kelly Richards</p>
              <p className="designation">CEO and Founder</p>
              <div className="flex icons2">
                <FontAwesomeIcon className="i" icon={faTwitter} />
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
            </div>
            <div className="grid-item">
              <div className="team-circle1">
                <img src="/susan.png" alt="team" className="image" />
              </div>
              <p>Alexis Jordan</p>
              <p className="designation">CEO and Founder</p>
              <div className="flex icons2">
                <FontAwesomeIcon className="i" icon={faTwitter} />
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
            </div>
          </div>
        </section>
      <section className="blog-sec">
        <h2>The Project Blog</h2>
        <p className="blog-sec-p">Design and layouts to help you with your app.</p>
        <div className="flex-container">
          <div className="card">
            <img src="glass.jpeg" alt="" />
            <div>
              <p className="resources">RESOURCES</p>
              <h2>Refreshing Designs</h2>
              <p className="para">
                Quench satisfying designs to help your stir up emotion and tell
                a story.
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#61A3F9"}} className="card">
            <img src="CARD2.png" alt="" />
            <div>
              <p className="resources"  style={{color: "#61A3F9"}}>LIFESTYLE</p>
              <h2>Healthier Lifestyle</h2>
              <p className="para">
                Quench satisfying designs to help your stir up emotion and tell
                a story.
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#FBBE21"}} className="card">
            <img src="card3.png" alt="" />
            <div>
              <p className="resources" style={{color: "#FBBE21"}}>ENTERTAINMENT</p>
              <h2>Gaming Evolution</h2>
              <p className="para">
                Quench satisfying designs to help your stir up emotion and tell
                a story.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-container">
          {" "}
          <div className="card2">
            <img src="flower.jpeg" alt="" />
            <div>
              <p className="popup">INSPIRATION</p>
              <h2>Best Workstations of the Year</h2>
              <p className="para">
                Check out these inspiring workstations to get ideas on how to
                level-up your workstation.
              </p>
            </div>
          </div>
          <div className="card2">
            <img src="brk.jpeg" alt="" />
            <div>
              <p className="popup">INSPIRATION</p>
              <h2>Best Workstations of the Year</h2>
              <p className="para">
                Check out these inspiring workstations to get ideas on how to
                level-up your workstation.
              </p>
            </div>
          </div>
          <div className="card2">
            <img src="book.jpeg" alt="" />
            <div>
              <p className="popup">INSPIRATION</p>
              <h2>Best Workstations of the Year</h2>
              <p className="para">
                Check out these inspiring workstations to get ideas on how to
                level-up your workstation.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
      {/** Footer */}
      <Footer />
    </>
  );
}

export default App;
