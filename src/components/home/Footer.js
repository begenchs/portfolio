export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-flex">
          <div className="footer-nav">
            <a href="/#home">Home</a>
            <a href="/#projects">Projects</a>
            <a href="/#contact">Contact Me</a>
          </div>
          <div className="footer-logo">
            <a href="/#home"><h4 className="logo"><span className="text-colored">Begench</span></h4></a>
          </div>
          <div className="footer-contact">
            <h4 className="heading">Contact:</h4>
            <a className="email" href="mailto:begench@protonmail.com">begench@proton.me</a><br/>
            <a href="https://www.linkedin.com/in/begenchs/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>            
          </div>
        </div>
      </div>
    </footer>
  )
}