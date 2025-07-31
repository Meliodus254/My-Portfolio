import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Building a fully functional e-commerce website using modern web technologies.
              Conducting data wrangling, dashboard development, and automating reports from real-world datasets.
              Applying machine learning and real-time analytics to solve practical problems.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2023 – Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Attachment – Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Kenya National Bureau of Statistics (KNBS), Nairobi</h4>
            <p>
              Collected, processed, and analyzed statistical data for government insights.
              Conducted field surveys and ensured data quality through validation techniques.
              Produced stakeholder-ready reports and presentations.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 – Jul 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Part-Time Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Bentomlink Solutions, Kisii</h4>
            <p>
              Provided technical support and troubleshooting services.
              Conducted system maintenance, optimized performance, and resolved infrastructure issues.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
