import React from "react";
import logo from "../../img/logo.png";
function LandingFooter() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-secondary">
      <div className="row">
        <div className="black row">
          <div className="footerLogo col-3 offset-1">
            <table className="table table-responsive text-light table-borderless">
              <thead>
                <img src={logo} alt="Webphics Logo" />
              </thead>
              <tbody>
                <tr className="mt-2">&nbsp;</tr>
                <td className="text-muted">
                  Useful App for people to create portfolio easily
                </td>
                <tr className="mt-2">&nbsp;</tr>
                <tr className="mt-2">&nbsp;</tr>
                <tr className="mt-2">
                  <td>&#169; Copyright Webphics 2023 inc.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className=" col-6 offset-2 size"
            style={{ "font-size": "small" }}
          >
            <table class="table text-secondary table-borderless">
              <thead>
                <tr className="text-light" style={{ "font-size": "medium" }}>
                  <th scope="col">Help</th>
                  <th scope="col">Resources</th>
                  <th scope="col">Company</th>
                  <th scope="col">Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FaQs</td>
                  <td>UI Design</td>
                  <td>About Us</td>
                  <td>Mobile Apps</td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td>User Interface</td>
                  <td>Career</td>
                  <td>Integrations</td>
                </tr>
                <tr>
                  <td>Call Service</td>
                  <td>WebDesign</td>
                  <td>Contact Us</td>
                  <td>Chat Section</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Blogs</td>
                  <td></td>
                  <td>Video Services</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Audio Services</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LandingFooter;
