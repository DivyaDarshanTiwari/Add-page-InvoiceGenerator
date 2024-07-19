import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footercontent">
        <div>
          <h2>About</h2>
        </div>
        <div className="pt-3">
          <ul className="list">
            <li>Demo</li>
            <li>Investor</li>
            <li>Terms and Service</li>
            <li>Customers</li>
          </ul>
        </div>
      </div>

      <div className="footercontent">
        <div>
          <h2>Contact Us</h2>
        </div>
        <div className="pt-3">
          <ul className="list">
            <li>+91 498428299</li>
            <li>Email - adbndvhbs@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footercontent">
        <div>
          <h2>Social Media</h2>
        </div>
        <div className="pt-3">
          <ul className="list">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="footercontent">
        <div>
          <h2>For more info</h2>
        </div>
        <form className="forms p1-3">
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Contact No.
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="queryBox" className="col-sm-2 col-form-label">
              Queries
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="queryBox"
                rows="3"
                placeholder="Type your queries here"
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
