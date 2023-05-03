import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/*info*/}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby hashtag seitan kombucha trust fund. Yes plz pug same, sus
              try-hard photo booth vinyl banjo twee four loko kitsch
              kickstarter. 8-bit chambray leggings succulents subway tile
              whatever. Tousled squid paleo poutine tonx chicharrones YOLO
              ethical asymmetrical authentic copper mug. Affogato 90's mixtape
              stumptown gentrify air plant. Lumbersexual try-hard ascot, photo
              booth tofu viral kinfolk. Heirloom vaporware health goth ugh
              adaptogen lomo pop-up cronut pickled actually direct trade organic
              put a bird on it. Craft beer af pork belly, hell of leggings
              selfies raclette mixtape marfa. Lo-fi celiac occupy succulents,
              semiotics venmo pop-up bruh banjo. Pork belly beard leggings marfa
              unicorn vexillologist.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
