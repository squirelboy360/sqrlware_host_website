import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Accordion from '../components/accordion'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sqrlware</title>
        <meta property="og:title" content="Sqrlware" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  Cutting-edge and quality apps that solves real life problems.
                </h1>
                <span className="home-caption">
                  <span className="home-text">
                    As an app developer who prioritizes quality and function
                    over any other thing, I aim at assuring users the provision
                    of exactly that in all the apps I produce. Cheers 🥂
                  </span>
                  <br></br>
                </span>
              </header>
              <div className="home-container1">
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&amp;to=squirelwares@gmail.com&amp;su=Enquiries&amp;body=Hey%20Tahiru,&amp;tf=cm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <div className="home-get-started button">
                    <span className="home-text2">Contact</span>
                  </div>
                </a>
              </div>
            </main>
          </div>
          <div className="home-image"></div>
        </div>
      </section>
      <section id="apps" className="home-section1">
        <header className="home-header1">
          <h2 className="home-text3">Showcase</h2>
          <span className="home-text4">
            Out of all the apps I developed for large and small businesses,
            these are the handpicked ones that provides users with the best
            quality, function and UX.
          </span>
        </header>
        <section className="home-note">
          <div className="home-image1">
            <img
              alt="image"
              src="/SectionImages/subject-900h.png"
              className="home-image2"
            />
          </div>
          <div className="home-content1">
            <div className="home-main1">
              <div className="home-caption1">
                <span className="section-head">trackIf v1.0.0</span>
              </div>
              <div className="home-heading1">
                <h2 className="section-heading">Rep for rep fitness counter</h2>
                <p className="section-description">
                  TrackIf utilizes your phone&apos;s sensors  to count workouts
                  such as pushups and more to be supported in yet to come
                  updates.
                </p>
              </div>
            </div>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&amp;to=squirelwares@gmail.com&amp;su=TrackIf%20v1.0.0%20Tester&amp;body=Hey%20Tahiru,&amp;tf=cm"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <div id="waitlist" className="home-get-started1 button">
                <span className="home-text5">Join Waitlist</span>
              </div>
            </a>
          </div>
        </section>
      </section>
      <section id="goals" className="home-section3">
        <div className="home-note1">
          <div className="home-content2">
            <div className="home-heading3">
              <div className="home-header2">
                <h2 className="section-heading">Goals</h2>
              </div>
              <Accordion rootClassName="accordion-root-class-name"></Accordion>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
