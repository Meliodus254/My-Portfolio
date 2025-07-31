import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "R",
    "Python",
    "JavaScript",
    "Streamlit",
    "Shiny",
    "Leaflet",
    "Tidyverse",
    "ggplot2",
    "HTML",
    "CSS"
];

const labelsSecond = [
    "Excel",
    "SPSS",
    "MongoDB",
    "Microsoft Access",
    "Tableau",
    "PowerPoint",
    "Word",
    "SQL",
    "Data Cleaning",
    "Survey Processing"
];

const labelsThird = [
    "Machine Learning",
    "Data Visualization",
    "Geospatial Mapping",
    "NLP (ScispaCy)",
    "Statistical Modeling",
    "Report Writing",
    "Team Collaboration",
    "Communication",
    "Adaptability",
    "Field Data Collection"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                        <h3>Data Science & Application Development</h3>
                        <p>
                            I build real-world data science applications, including dashboards, outbreak detectors, and risk prediction tools using modern programming and data visualization libraries.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x"/>
                        <h3>Data Management & Analytics</h3>
                        <p>
                            Experienced in collecting, validating, and analyzing data from diverse sources to generate actionable insights using statistical and database tools.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools & Platforms:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faChartBar} size="3x"/>
                        <h3>Statistical & Machine Learning Skills</h3>
                        <p>
                            Adept at applying statistical models and machine learning algorithms to solve real-world problems—ranging from health predictions to wildlife conflict mapping.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Skill Set:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
