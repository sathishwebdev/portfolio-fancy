const About = () =>(
    <div className="full-con" style={{ flexDirection: "row" }}>
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <h1>About Me !</h1>
          <div
            className="center"
            style={{
              maxWidth: "500px",
              padding: "3%",
            }}
          >
            <div style={{ padding: "2%", margin: "1%" }}>
              <div>
                <img
                  className="d-block d-lg-none"
                  alt="me"
                  title="me"
                  style={{ width: "100%" }}
                  src="about.jpg"
                />
                <h4>
                  H! Thizz <sup>zz</sup> Sathish,
                </h4>
                <p>
                  In this fast developing digital world, I proud to say that i'm
                  a developer. I specially trained to develope amazing websites
                  like portfolios for a celeberities or organisations, Ecommerce
                  pages, Product launching sites, Blog etc., I completed my MERN
                  Stack developer course in{" "}
                  <span>
                    <a
                      className="link"
                      href="https://www.guvi.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GUVI
                    </a>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out" className="d-none d-lg-block">
          <img
            alt="me"
            title="me"
            style={{ height: "45vh" }}
            src="about1.jpg"
          />
        </div>
      </div>
)

export default About