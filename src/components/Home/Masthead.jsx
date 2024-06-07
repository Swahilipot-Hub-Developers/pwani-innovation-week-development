// import "../../assets/css/custom.css"
// import "../../assets/css/theme.css"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { EmailRounded } from "@mui/icons-material";
import { PhoneAndroid } from "@mui/icons-material";
//import { Link } from "@mui/material";
import { Link } from 'react-router-dom';

const Masthead = () => {
  const year = new Date().getFullYear();
  return (
    <>
    {/* Hero */}
    <>
  {/* Hero */}
  <div className="content-space-b-3 content-space-b-md-4">
    <div className="bg-soft-primary-light">
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between">
          <div className="col-md-6 content-space-t-1 content-space-md-1">
            {/* Heading */}
            <div className="mb-7">
            <h1 className="fw-dark">Pwani Innovation Week {year}</h1>
              <p className="lead">
              The Pwani We Desire: Youth, Culture, Peace and Innovation in the
              Decade of Action.
              </p>
            </div>
            {/* End Heading */}
            <div className="d-grid gap-3">
              {/* Info Block */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <span className="svg-icon svg-icon-sm text-primary">
                    {/* @@include("../assets/vendor/duotone-icons/com/com006.svg") */}
                  </span>
                </div>
                <div className="flex-grow-1 ms-4">
                  <h5 className="text-primary">
                    <a href="#">
                      Audience{" "}
                      <i className="bi-chevron-right small ms-1 small" />
                    </a>
                  </h5>
                  <p>Find startups with content marketing and SEO tools</p>
                </div>
              </div>
              {/* End Info Block */}
              {/* Info Block */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <span className="svg-icon svg-icon-sm text-primary">
                    {/* @@include("../assets/vendor/duotone-icons/gen/gen022.svg") */}
                  </span>
                </div>
                <div className="flex-grow-1 ms-4">
                  <h5 className="text-primary">
                    <a href="#">
                      Campaigns{" "}
                      <i className="bi-chevron-right small ms-1 small" />
                    </a>
                  </h5>
                  <p>Reach your audience and promote products all from Space</p>
                </div>
              </div>
              {/* End Info Block */}
            </div>
            {/* End Row */}
          </div>
          {/* End Col */}
          <div className="col-sm-10 col-md-6 col-lg-5">
            <div className="row gx-2 transform-y-5rem">
              <div className="col-6">
                <div className="d-grid gap-2">
                  {/* Images */}
                  <div
                    className="d-none d-md-block bg-img-center"
                    style={{
                      backgroundImage: "url(../assets/img/225x292/img1.jpg)",
                      height: "18.25rem"
                    }}
                  />
                  <div
                    className="d-none d-md-block bg-img-center"
                    style={{
                      backgroundImage: "url(../assets/img/225x324/img1.jpg)",
                      height: "20.25rem"
                    }}
                  />
                  <img
                    className="d-md-none img-fluid w-100"
                    src="../assets/img/225x292/img1.jpg"
                    alt="Image Description"
                  />
                  <img
                    className="d-md-none img-fluid w-100"
                    src="../assets/img/225x324/img1.jpg"
                    alt="Image Description"
                  />
                  {/* End Images */}
                </div>
              </div>
              {/* End Col */}
              <div className="col-6">
                <div className="d-grid gap-2">
                  {/* Images */}
                  <div
                    className="d-none d-md-block bg-img-center"
                    style={{
                      backgroundImage: "url(../../event1.png)",
                      height: "22rem"
                    }}
                  />
                  <div
                    className="d-none d-md-block bg-img-center"
                    style={{
                      backgroundImage: "url(../assets/img/225x261/img1.jpg)",
                      height: "16rem"
                    }}
                  />
                  <img
                    className="d-md-none img-fluid w-100"
                    src="../assets/img/225x355/img1.jpg"
                    alt="Image Description"
                  />
                  <img
                    className="d-md-none img-fluid w-100"
                    src="../assets/img/225x261/img1.jpg"
                    alt="Image Description"
                  />
                  {/* End Images */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
    </div>
  </div>
  {/* End Hero */}
</>

    {/* End Hero */}
  </>
  
  );
};

export default Masthead;
