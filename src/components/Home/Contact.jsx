// import "../../assets/css/custom.css"
// import "../../assets/css/theme.css"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { EmailRounded } from "@mui/icons-material";
import { PhoneAndroid } from "@mui/icons-material";
//import { Link } from "@mui/material";
import { Link } from 'react-router-dom';

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <>
  {/* Contact */}
  <div className="container content-space-1 mt-6">
    <div className="mx-auto" style={{ maxWidth: "37.5rem" }}>
      {/* Card */}
      <div className="card card-lg">
        <div className="card-body">
          {/* Heading */}
          <div className="w-lg-85 text-center mx-lg-auto mb-7">
            <h4>How can we help?</h4>
            <p className="fs-6">
              Need help, have questions or want to suggest a feature? Send us a
              message here.
            </p>
          </div>
          {/* End Heading */}
          <form>
            <div className="row">
              <div className="col-sm-6">
                {/* Form */}
                <div className="mb-4">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="contactEmail"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    id="contactName"
                    placeholder="Your name"
                    aria-label="Your name"
                    required=""
                    data-msg="Please enter your name."
                  />
                </div>
                {/* End Form */}
              </div>
              {/* End Col */}
              <div className="col-sm-6">
                {/* Form */}
                <div className="mb-4">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="contactEmail"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="contactEmail"
                    placeholder="Your email"
                    aria-label="Your email"
                    required=""
                    data-msg="Please enter a valid email address."
                  />
                </div>
                {/* End Form */}
              </div>
              {/* End Col */}
              <div className="col-sm-12">
                {/* Form */}
                <div className="mb-4">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="contactDetails"
                  >
                    Detail
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="contactDetails"
                    rows={5}
                    placeholder="Tell us more about detail"
                    aria-label="Tell us more about detail"
                    defaultValue={""}
                  />
                </div>
                {/* End Form */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
            <div className="d-grid">
              <button type="submit" className="btn btn-lg btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* End Card */}
    </div>
  </div>
  {/* End Contact */}
  {/* Shape */}
  <div className="shape-container">
    <div className="shape shape-bottom text-primary-dark zi-0">
      <svg
        width={3000}
        height={20}
        viewBox="0 0 3000 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 400H3000V0L0 400Z" fill="#fff" />
      </svg>
    </div>
  </div>
  {/* End Shape */}
  {/* Contact Info */}
  <div className="bg-primary-dark">
    <div className="container content-space-b-1">
      <div className="row col-sm-divider col-divider-light">
        <div className="col-sm-4">
          {/* Info */}
          <div className="text-center py-sm-5">
            <span className="svg-icon text-white mb-3">
              @@include("../assets/vendor/duotone-icons/gen/gen018.svg")
            </span>
            <h5 className="text-white">Visit us:</h5>
            <p className="text-white-70 mb-0">
                Mombasa, Kenya      
            </p>
          </div>
          {/* End Info */}
        </div>
        {/* End Col */}
        <div className="col-sm-4">
          {/* Info */}
          <div className="text-center py-sm-5">
            <span className="svg-icon text-white mb-3">
              @@include("../assets/vendor/duotone-icons/elc/elc002.svg")
            </span>
            <h5 className="text-white">Call us:</h5>
            <p className="text-white-70 mb-0">+254 715 752 908</p>
          </div>
          {/* End Info */}
        </div>
        {/* End Col */}
        <div className="col-sm-4">
          {/* Info */}
          <div className="text-center py-sm-5">
            <span className="svg-icon text-white mb-3">
              @@include("../assets/vendor/duotone-icons/gen/gen016.svg")
            </span>
            <h5 className="text-white">Email us:</h5>
            <p className="text-white-70 mb-0">info@swahilipothub.co.ke</p>
          </div>
          {/* End Info */}
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
  </div>
  {/* End Contact Info */}
</>

  );
};

export default Contact;
