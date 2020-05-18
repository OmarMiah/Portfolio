import React from "react"
import Image from "../components/aboutmepic"
const AboutMe = () => (
  <div class="col-12">
    <div class="row">
      <div class="col-9">
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          # About Me
        </h1>{" "}
        <p class="toGrey">
          Hello! I'm Hannah, a 4th year Computer Science student studying at
          Boston University (graduating May 2021). <br></br>
          <br></br>
          My passions include <b>Software Development</b>,{" "}
          <b>organizing hackathons</b>, and indie rock. <br></br>
          <br></br>I am a <b>Developer Summer Analyst </b>
          at<b style={{ color: "#81c5fd" }}> Barclays</b>.<br></br>
          <br></br>I am the current <b>Director of Technology</b> at{" "}
          <a id="redirect" href="https://boston.techtogether.io/index.html">
            TechTogether Boston
          </a>
          , Boston's largest female, femme, and non-binary hackathon that
          empowers women and non-binary individuals in technology to achieve.{" "}
          <br></br>
          <br></br>I am also a <b>Tech Organizer</b> at{" "}
          <a id="redirect" href="https://www.bostonhacks.io/">
            BostonHacks
          </a>
          , an annual collegiate hackathon at Boston University.
          <br></br>
          <br></br>I am a former <b>Back-end lead developer</b> at{" "}
          <a id="redirect" href="https://hack4impact.org/">
            Hack4Impact
          </a>
          , an organization that collaborates with non-profits to build
          softwares for social good.
        </p>
      </div>
      <div class="col-3">
        <Image />
      </div>
    </div>
  </div>
)

export default AboutMe
