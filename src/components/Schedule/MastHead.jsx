import { useState } from "react";

const MastHead = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className="theme-bg-primary py-5">
      <div className="container px-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-6">
            <div className="text-center my-5">
              <h1 className="fw-bolder mb-3">Pwani Innovation Week 2024</h1>
              <p
                className="lead fw-normal text-muted mb-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Program of Activities
              </p>
              <div>
                {isHovered && (
                  <ol className="list-disc text-left text-white pl-5">
                    <li>Innovation Challenge and Hackathons</li>
                    <li>Training Boot Camps and Workshops (Masterclass)</li>
                    <li>Keynote speeches and panel discussions</li>
                    <li>Ubunifu zone (Exhibition)</li>
                    <li>Deals Den</li>
                    <li>Heritage Experience (cultural storytelling)</li>
                    <li>Pwani Gat Talent Concert & Awards</li>
                    <li>Cocktail Event & Gala Dinner</li>
                  </ol>
                )}
              </div>
              <div>
                <a
                  className="btn btn-primary btn-lg"
                  href="https://afritickets.events/2280-pwani-gat-talent"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Your Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MastHead;
