import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const year = new Date().getFullYear();

  useEffect(() => {
    const targetDate = new Date("2024-10-14").getTime(); // Replace with your target date
    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const secondsLeft = (targetDate - currentDate) / 1000;

      const daysCount = Math.floor(secondsLeft / 86400);
      const hoursCount = Math.floor((secondsLeft % 86400) / 3600);
      const minutesCount = Math.floor((secondsLeft % 3600) / 60);
      const secondsCount = Math.floor(secondsLeft % 60);

      setDays(daysCount);
      setHours(hoursCount);
      setMinutes(minutesCount);
      setSeconds(secondsCount);
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);
  return (
    <>
    {/* Cards */}
    <div className="container content-space-1">
     
      
      <div className="row mb-5 mb-md-0">
        <div className="col-sm-6 col-lg-4 mb-3 mb-sm-5 mb-lg-7">
          {/* Card */}
          <div className="card card-lg h-100">
            <div className="card-header bg-soft-primary-light position-relative overflow-hidden">
             
              <h5 className="card-title">About Pwani Innovation Week</h5>
              <div className="position-absolute bottom-0 end-0">
                
              </div>
            </div>
            <div className="card-body">
            
              <p className="card-text">
              Pwani Innovation Week is a consolidated effort by swahiliPot Hub
          Foundation and its partners to help create a widespread culture of
          innovation and stimulate the innovation ecosystem in the
          coastal(pwani)region of eastern Africa.
              </p>
             
            </div>
            
          </div>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-4 mb-3 mb-sm-5 mb-lg-7">
          {/* Card */}
          <div className="card card-lg h-100">
            <div className="card-header bg-soft-warning position-relative overflow-hidden">
              
              <div className="d-flex align-items-center mb-2">
                <h5 className="card-title mb-0">Thematic Areas</h5>
               
              </div>
              <div className="position-absolute top-0 end-0">
               
              </div>
            </div>
            <div className="card-body">
              
              {/* List Checked */}
              <ul>
          <li>
            <strong>Emerging Tech and Innovation:</strong>This thematic areas
            will focus on insiring the exploration and adoptation of
            cutting-edge technologies for coastal resilince,resource management
            and disaster preparedness.
          </li>
          <li>
            <strong>Climate Action:</strong>This thematic area will focus on
            leveraging innovative approaches and adaptive strategies for
            mitigating the impacts of climate change on coastal communities.
          </li>
          <li>
            <strong>Peace, Inclusivity and Equity:</strong>This track will focus
            on building strategies for resilience that can foster social
            cohesion and collaboration among diverse stakeholders, contributing
            to peace and inclusivity in coastal areas.
          </li>
          <li>
            <strong>Participatory Governance:</strong> This track will focus on
            initiatives that promote citizen science, community-based
            monitoring, and co-management approaches that empower locals to
            actively participate in the governance and management of resources
            and infrastructure.
          </li>
        </ul>
              {/* End List Checked */}
            </div>
           
          </div>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-4 mb-3 mb-sm-5 mb-lg-7">
          {/* Card */}
          <div className="card card-lg h-100">
            <div className="card-header bg-soft-success position-relative overflow-hidden">
              
              <h5 className="card-title">Objectives</h5>
              <div className="position-absolute bottom-0 end-0">
               
              </div>
            </div>
            <div className="card-body">
            <ul className="">
          <li>
            To showcase untapped innovation potential across Pwani by
            highlighting successful youth-led ventures.
          </li>
          <li>
            To cultivate a vibrant innovation ecosystem within Pwani by
            fostering youth participation, equipping them with relevant skills
            and knowledge, and creating an environment that retains their talent
            for regional development.
          </li>
          <li>
            To leverage the region's unique coastal economies (Blue, Green,
            Orange, Digital economies) and rich biodiversity to attract domestic
            and foreign investment.
          </li>
        </ul>
             
            </div>
           
          </div>
          {/* End Card */}
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
     
    </div>
    {/* End Cards */}


    
  {/* FAQ */}
  <div className="container content-space-1">
    <div className="text-center">
      <img
        className="mb-5"
        src="../assets/svg/illustrations/oc-looking-for-answers.svg"
        alt="Illustration"
        style={{ maxWidth: "15rem" }}
      />
    </div>
    {/* Heading */}
    <div className="w-lg-65 text-center mx-lg-auto mb-7">
      <h3>Frequently Asked Questions</h3>
    </div>
    {/* End Heading */}
    {/* Accordion */}
    <div className="w-lg-85 mx-lg-auto mb-7">
      <div className="accordion accordion-flush" id="accordionFAQEg1">
        {/* Accordion Item */}
        <div className="accordion-item">
          <div className="accordion-header" id="headingOneEg1">
            <a
              className="accordion-button"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOneEg1"
              aria-expanded="true"
              aria-controls="collapseOneEg1"
            >
              What methods of payments are supported?
            </a>
          </div>
          <div
            id="collapseOneEg1"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOneEg1"
            data-bs-parent="#accordionFAQEg1"
          >
            <div className="accordion-body">
              You can purchase the themes on Bootstrap Themes via any major
              credit/debit card (via Stripe) or with your Paypal account. We
              don't support cryptocurrencies or invoicing at this time.
            </div>
          </div>
        </div>
        {/* End Accordion Item */}
        {/* Accordion Item */}
        <div className="accordion-item">
          <div className="accordion-header" id="headingTwoEg1">
            <a
              className="accordion-button collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwoEg1"
              aria-expanded="false"
              aria-controls="collapseTwoEg1"
            >
              Can I cancel at anytime?
            </a>
          </div>
          <div
            id="collapseTwoEg1"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwoEg1"
            data-bs-parent="#accordionFAQEg1"
          >
            <div className="accordion-body">
              If you'd like a refund please reach out to us at{" "}
              <a href="#">themes@getbootstrap.com</a>. If you need technical
              help with the theme before a refund please reach out to the seller
              first and they can get in touch with us if they're unable to
              resolve the issue.
            </div>
          </div>
        </div>
        {/* End Accordion Item */}
        {/* Accordion Item */}
        <div className="accordion-item">
          <div className="accordion-header" id="headingThreeEg1">
            <a
              className="accordion-button collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThreeEg1"
              aria-expanded="false"
              aria-controls="collapseThreeEg1"
            >
              How do I get a receipt for my purchase?
            </a>
          </div>
          <div
            id="collapseThreeEg1"
            className="accordion-collapse collapse"
            aria-labelledby="headingThreeEg1"
            data-bs-parent="#accordionFAQEg1"
          >
            <div className="accordion-body">
              You'll receive an email from Bootstrap themes once your purchase
              is complete.
            </div>
          </div>
        </div>
        {/* End Accordion Item */}
        {/* Accordion Item */}
        <div className="accordion-item">
          <div className="accordion-header" id="headingFourEg1">
            <a
              className="accordion-button collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFourEg1"
              aria-expanded="false"
              aria-controls="collapseFourEg1"
            >
              Which license do I need?
            </a>
          </div>
          <div
            id="collapseFourEg1"
            className="accordion-collapse collapse"
            aria-labelledby="headingFourEg1"
            data-bs-parent="#accordionFAQEg1"
          >
            <div className="accordion-body">
              There are three license types - <a href="#">Standard</a>,{" "}
              <a href="#">Multisite</a>, and <a href="#">Extended</a>. We've
              provided the table below for a quick look at the difference
              between the them, as well as a few examples of ways each license
              could be used. If you'd like more of the nitty-gritty details you
              can find them below and always feel free to reach out with any
              questions you have at <a href="#">themes@getbootstrap.com</a>.
            </div>
          </div>
        </div>
        {/* End Accordion Item */}
        {/* Accordion Item */}
        <div className="accordion-item">
          <div className="accordion-header" id="headingFiveEg1">
            <a
              className="accordion-button collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFiveEg1"
              aria-expanded="false"
              aria-controls="collapseFiveEg1"
            >
              How do I get access to a theme I purchased?
            </a>
          </div>
          <div
            id="collapseFiveEg1"
            className="accordion-collapse collapse"
            aria-labelledby="headingFiveEg1"
            data-bs-parent="#accordionFAQEg1"
          >
            <div className="accordion-body">
              If you lose the link for a theme you purchased, don't panic! We've
              got you covered. You can login to your account, tap your avatar in
              the upper right corner, and tap Purchases. If you didn't create a
              login or can't remember the information, you can use our handy
              Redownload page, just remember to use the same email you
              originally made your purchases with.
            </div>
          </div>
        </div>
        {/* End Accordion Item */}
        {/* Accordion Item */}
        <div className="accordion-item">
          <div className="accordion-header" id="headingSixEg1">
            <a
              className="accordion-button collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSixEg1"
              aria-expanded="false"
              aria-controls="collapseSixEg1"
            >
              Upgrade License Type
            </a>
          </div>
          <div
            id="collapseSixEg1"
            className="accordion-collapse collapse"
            aria-labelledby="headingSixEg1"
            data-bs-parent="#accordionFAQEg1"
          >
            <div className="accordion-body">
              There may be times when you need to upgrade your license from the
              original type you purchased and we have a solution that ensures
              you can apply your original purchase cost to the new license
              purchase.
            </div>
          </div>
        </div>
        {/* End Accordion Item */}
      </div>
    </div>
    {/* End Accordion */}
    {/* Info */}
    <div className="text-center">
      <p className="mb-0">Still have questions?</p>
      <a className="link" href="../page-contacts.html">
        Contact our friendly support team{" "}
        <i className="bi-chevron-right small ms-1" />
      </a>
    </div>
    {/* End Info */}
  </div>
  {/* End FAQ */}











  </>
  
  );
};

export default AboutSection;
