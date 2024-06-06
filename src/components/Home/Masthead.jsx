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
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="fw-dark">Pwani Innovation Week {year}</h1>
            <p class="lead">
              <CalendarMonthOutlinedIcon className="mx-2" />
              14th - 18th Oct {year}
              <LocationOnIcon className="mx-2" />
              Mombasa, Kenya
            </p>
            <p className="lead">
              The Pwani We Desire: Youth, Culture, Peace and Innovation in the
              Decade of Action.
            </p>
            <p class="lead">
              <EmailRounded className="mx-2" />
              info@swahilipothub.co.ke
            </p>
            <p className="lead">
              <PhoneAndroid className="mx-2" />
              +254 715 752 908
            </p>
            <p className="button">
              Book your tickect now !
            </p>
          </div>
        </div>
      </div>
     
    </header>
  );
};

export default Masthead;
