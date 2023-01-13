import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import InfoTable from "../components/InfoTable";

import './NewAssessment.css'

const NewAssessment = () => {
  // fetch flow
  // fetch all categories (returns array of strings containing all category names)
  // foreach category, fetch all lineitems associated with category (returns array of strings containing all lineitem values)

  const [leftArrowEnabled, SetLeftArrowEnabled] = React.useState(false);
  const [rightArrowEnabled, SetRightArrowEnabled] = React.useState(true);
  const [carouselOrder, SetCarouselOrder] = React.useState(0);

  const lineItems1 = [
    {
      description: "Eat healthy foods"
    },
    {
      description: "Take care of personal hygiene"
    },
    {
      description: "Exercise"
    },
    {
      description: "Wear clothes that help me feel good about myself"
    },
    {
      description: "Eat regularly"
    },
    {
      description: "Participate in fun activities (e.g. walking, swimming, dancing, sports)"
    },
    {
      description: "Get enough sleep"
    },
    {
      description: "Go to preventative medical appointments (e.g. checkups, teeth cleanings)"
    },
    {
      description: "Rest when sick"
    },
    {
      description: "Overall physical self-care"
    },
  ];

  const lineItems2 = [
    {
      description: "Take time off from work, school, and other obligations"
    },
    {
      description: "Participate in hobbies"
    },
    {
      description: "Get away from distractions (e.g. phone, email)"
    },
    {
      description: "Learn new things, unrelated to work or school"
    },
    {
      description: "Express my feelings in a healthy way (e.g. talking, creating art, journaling)"
    },
    {
      description: "Recognize my own strengths and achievements"
    },
    {
      description: "Go on vacations or day-trips"
    },
    {
      description: "Do something comforting (e.g. re-watch a favorite movie, take a long bath)"
    },
    {
      description: "Find reasons to laugh"
    },
    {
      description: "Talk about my problems"
    },
    {
      description: "Overall psychological and emotional self-care"
    },
  ];

  const lineItems3 = [
    {
      description: "Spend time with people who I like"
    },
    {
      description: "Call or write to friends and family who are far away"
    },
    {
      description: "Have stimulating conversations"
    },
    {
      description: "Meet new people"
    },
    {
      description: "Spend time alone with my romantic partner"
    },
    {
      description: "Ask others for help, when needed"
    },
    {
      description: "Do enjoyable activities with other people"
    },
    {
      description: "Have intimate time with my romantic partner"
    },
    {
      description: "Keep in touch with old friends"
    },
    {
      description: "Overall social self-care"
    },
  ];

  const lineItems4 = [
    {
      description: "Spend time in nature"
    },
    {
      description: "Meditate"
    },
    {
      description: "Pray"
    },
    {
      description: "Recognize the things that give meaning to my"
    },
    {
      description: "life Act in accordance with my morals and values"
    },
    {
      description: "Set aside time for thought and reflection"
    },
    {
      description: "Participate in a cause that is important to me"
    },
    {
      description: "Appreciate art that is impactful to me (e.g. music, film, literature)"
    },
    {
      description: "Overall spiritual self-care"
    },
  ];

  const lineItems5 = [
    {
      description: "Improve my professional skills"
    },
    {
      description: "Say \"no\" to excessive new responsibilities"
    },
    {
      description: "Take on projects that are interesting or rewarding"
    },
    {
      description: "Learn new things related to my profession"
    },
    {
      description: "Make time to talk and build relationships with colleagues"
    },
    {
      description: "Take breaks during work"
    },
    {
      description: "Maintain balance between my professional and personal life"
    },
    {
      description: "Keep a comfortable workspace that allows me to be successful"
    },
    {
      description: "Advocate for fair pay, benefits, and other needs"
    },
    {
      description: "Overall professional self-care"
    },
  ];

  const moveCarouselLeft = () => {
    if (leftArrowEnabled) {
      SetCarouselOrder(prev => prev - 1);
      SetLeftArrowEnabled(carouselOrder - 1 !== 0);
      SetRightArrowEnabled(true);
    }
  }

  const moveCarouselRight = () => {
    if (rightArrowEnabled) {
      SetCarouselOrder(prev => prev + 1);
      SetLeftArrowEnabled(true);
      SetRightArrowEnabled(carouselOrder + 1 < infoSections.length);
    }
  }

  const infoSections = [
    { categoryName: "Physical Self-Care", lineItems: lineItems1 },
    { categoryName: "Psychological / Emotional Self-Care", lineItems: lineItems2 },
    { categoryName: "Social Self-Care", lineItems: lineItems3 },
    { categoryName: "Spiritual Self-Care", lineItems: lineItems4 },
    { categoryName: "Professional Self-Care", lineItems: lineItems5 },

  ]

  const currentInfoSection = infoSections[carouselOrder - 1];

  return (
    <div className="NewAssessment">
      <div className="carousel">
        <FontAwesomeIcon 
          icon={faChevronLeft} 
          className={leftArrowEnabled ? "arrows" : "arrows-disabled"}
          onClick={() => moveCarouselLeft()} />

        {carouselOrder === 0 &&
          <div className="panel details-panel">
            <h1>Self-Care Assessment</h1>

            <div id="text">
              <p><span>Self-care</span> activities are the things you do to maintain good health and improve well-being. You'll  find that many of these activities are things you already do as part of your normal routine.</p>
              <p>In this assessment you will think about how frequently, or how well, you are performing different  self-care activities. The goal of this assessment is to help you learn about your self-care needs  by spotting patterns and recognizing areas of your life that need more attention.</p>
              <p>There are no right or wrong answers on this assessment. There may be activities that you have  no interest in, and other activities may not be included. This list is not comprehensive, but serves  as a starting point for thinking about your self-care needs.</p>
            </div>

            <div className="legend">
              <div className="legend-row">
                <span className="key">1</span>
                <span className="desc-1">I do this poorly</span>
                <span className="desc-2">I do this rarely or not at all</span>
              </div>
              <div className="legend-row">
                <span className="key">2</span>
                <span className="desc-1">I do this OK</span>
                <span className="desc-2">I do this sometimes</span>
              </div>
              <div className="legend-row">
                <span className="key">3</span>
                <span className="desc-1">I do this well</span>
                <span className="desc-2">I do this often</span>
              </div>
              <div className="legend-row">
                <span className="key">★</span>
                <span className="desc-1">I would like to improve at this</span>
                <span className="desc-2">I would like to do this more frequently</span>
              </div>
            </div>
          </div>
        }

        {carouselOrder >= 1 &&
          <div className="panel data-panel">
            <InfoTable categoryName={currentInfoSection.categoryName} lineItems={currentInfoSection.lineItems} />          
          </div>
        }

        <FontAwesomeIcon 
          icon={faChevronRight} 
          className={rightArrowEnabled ? "arrows" : "arrows-disabled"} 
          onClick={() => moveCarouselRight()} />`
      </div>

      {carouselOrder === infoSections.length &&
        <button className="global-btn">Save</button>
      }

    </div>
  );
}

export default NewAssessment