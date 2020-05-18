import React from "react"
const Header = () => (
  <div id="header">
    {/* <p> */}
    <div class="row">
      <a id="myname" href="/">
        {" "}
        Hannah Huang
        <br></br>
      </a>{" "}
      <b style={{ fontSize: "35px" }} class="col-2">
        &#x1f469;&#x1F3FB;&#x200D;&#x1F4BB;
      </b>
    </div>
    <div class="row">
      <p style={{ paddingTop: "5px" }}>
        {" "}
        <a style={{ color: " #c7e6cc" }} href="/">
          Resume
        </a>{" "}
        |{" "}
        <a style={{ color: " #c7e6cc" }} href="https://github.com/Yunhan0816">
          GitHub
        </a>{" "}
        |{" "}
        <a
          style={{ color: " #c7e6cc" }}
          href="https://www.linkedin.com/in/hannah-yunhan-huang-007520165/"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a style={{ color: " #c7e6cc" }} href="https://medium.com/@yunhanh">
          Blog
        </a>{" "}
        |{" "}
        <a style={{ color: " #c7e6cc" }} href="mailto:hannahhuang816@gmail.com">
          Email
        </a>
      </p>
    </div>
  </div>
)

export default Header