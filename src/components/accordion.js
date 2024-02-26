import React from 'react'

import PropTypes from 'prop-types'

import './accordion.css'

const Accordion = (props) => {
  return (
    <div className={`accordion-accordion ${props.rootClassName} `}>
      <div data-role="accordion-container" className="accordion-element">
        <div className="accordion-details">
          <span className="accordion-text">Solve Real-Life Problems</span>
          <span data-role="accordion-content" className="accordion-text01">
            Because function is one of my top most priorities, I aim at solving
            real life problems users face based on personal experiences.
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon"
        >
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element1 accordion-element"
      >
        <div className="accordion-details1">
          <span className="accordion-text02">
            <span className="accordion-text03">
              Create A Community Of users That Follow 
            </span>
            <br className=""></br>
            <span className="">My Work</span>
            <br className=""></br>
          </span>
          <span data-role="accordion-content" className="accordion-text07">
            A community that shares ideas, discuss and contribute to the
            improvement of my apps. 
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon2"
        >
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element2 accordion-element"
      >
        <div className="accordion-details2">
          <span className="accordion-text08">Satisfy Users</span>
          <span data-role="accordion-content" className="accordion-text09">
            From feedbacks from users and bug reports, my goal is to improve my
            apps to your wishes to keep this community going. 
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon4"
        >
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

Accordion.defaultProps = {
  rootClassName: '',
}

Accordion.propTypes = {
  rootClassName: PropTypes.string,
}

export default Accordion
