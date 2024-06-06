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
    <div className="container text-black">
      <h3 className="section-heading text-center mb-3">
        About Pwani Innovation Week
      </h3>
      <div className="section-intro single-col-max mx-auto mb-4">
        Pwani Innovation Week is a consolidated effort by{" "}
        <a
          href="https://www.swahilipothub.co.ke/"
          target="_blank"
          rel="noreferrer"
        >
          Swahilipot Hub Foundation
        </a>{" "}
        and its partners to help create a widespread culture of innovation and
        stimulate the innovation ecosystem in the coastal (pwani)region of
        eastern Africa.
        <br />
        <br />
        <p className="text-dark-500 font-semibold">
          Pwani Innovation Week is aconsolidated effort by swahiliPot Hub
          Foundation and its partners to help create a widespread culture of
          innovation and stimulate the innovation ecosystem in the
          coastal(pwani)region of eastern Africa.
        </p>
        <div>
          <h3 className="text-dark-500 font-bold text-center">
            Thematic Areas{" "}
          </h3>
        </div>
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
      </div>
      <div className="">
        <h3 className="text-center font-bold">Objectives</h3>
        <ol className="">
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
        </ol>
      </div>

      {/* <!--//benefits-list--> */}
      <div className="event-countdown text-center mb-3">
        <h4 className="countdown-intro mb-2 text-center mb-3">
          Pwani Innovation Week {year} Ends In:
        </h4>
        <div
          id="countdown-box"
          class="countdown-box"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="countdown-item" style={{ margin: "5px 20px" }}>
            <span className="number">{days}</span>
            <br />
            <span className="unit">Days</span>
          </div>
          <div className="countdown-item" style={{ margin: "5px 20px" }}>
            <span className="number">{hours}</span>
            <br />
            <span className="unit">Hrs</span>
          </div>
          <div className="countdown-item" style={{ margin: "5px 20px" }}>
            <span className="number">{minutes}</span>
            <br />
            <span className="unit">Mins</span>
          </div>
          <div className="countdown-item" style={{ margin: "5px 20px" }}>
            <span className="number">{seconds}</span>
            <br />
            <span className="unit">Secs</span>
          </div>
        </div>
      </div>
      {/* <!--//event-countdown--> */}
      
    </div>
  );
};

export default AboutSection;
