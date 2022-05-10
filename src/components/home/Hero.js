import portrait from "../../img/ligthbg.png";

export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="container">
        <div className="hero--flex">
          <div className="circle">
            <img src={portrait} alt="self-portrait" className="portrait"/>
          </div>

          <div className="hero-content">
            <h5 className="intro">Hi, my name is <br/> <span className="text-colored">Begench</span></h5>
            <h1 className="title">I am a <br /> Software Engineer <br /> & <span className="text-colored"> <br />Full Stack Developer</span></h1>
            <p className="sub-title">Building professional websites <br /> and web applications</p>
            <a href="#contact"className="btn hero-btn btn-large">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}