import React from "react";

export default function(){
    return(
        <div className="e">
                <h2>Price of the Invoice Genetrator</h2>
          <div className="container">

              <div className="card">
                  <div className="circle">
                      <h2>Monthly</h2>
                  </div>
                  <div className="content">
                      <p>If you want the hassel of not genetrating your invoice for the a short period of time you can get out monthly pack of the invoice genetator. </p>
                  </div>
                  <button className="basic">
                    <span className="pricebutton">
                    Basic Price:
                    </span>

                    <span className="amount">
                        Rs.1599/month
                    </span>
                  </button>
                  <a href="#">Pay Now</a>

                  <button className="basic">
                    <span className="pricebutton">
                    Standard Price:
                    </span>

                    <span className="amount">
                        Rs.3199/month
                    </span>
                  </button>

                  <a href="#">Pay Now</a>

                  <button className="basic">
                    <span className="pricebutton">
                    Premium Price:
                    </span>

                    <span className="amount">
                        Rs.4199/month
                    </span>
                  </button>

                  <a href="#">Pay Now</a>

              </div>

              <div class="card">

                  <div class="circle">
                      <h2>Annual</h2>
                  </div>

                  <div class="content">
                      <p>A successful firm with large inflow of customers who want to keep their customers up-to-date with all service related details.
                      If this is you,our Annual Plan is best for you.</p>
                  </div>

                  <button className="basic">
                    <span className="pricebutton">
                    Basic Price:
                    </span>

                    <span className="amount">
                        Rs.15999
                    </span>
                  </button>

                  <a href="#">Pay Now</a>

                  <button className="basic">
                    <span className="pricebutton">
                    Standard Price:
                    </span>

                    <span className="amount">
                        Rs.49999
                    </span>
                  </button>

                  <a href="#">Pay Now</a>

                  <button className="basic">
                    <span className="pricebutton">
                    Premium Price:
                    </span>

                    <span className="amount">
                        Rs.79999
                    </span>
                  </button>

                  <a href="#">Pay Now</a>

              </div>

          </div>
        </div>
        )
}