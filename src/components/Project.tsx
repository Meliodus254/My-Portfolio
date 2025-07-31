import React from "react";
import '../assets/styles/Project.scss';

// Import mock images for each project
import textGenImg from '../assets/images/text-generator.png';
import wildlifeImg from '../assets/images/wildlife-mapper.png';
import heartAttackImg from '../assets/images/heart-risk.png';
import gdpImg from '../assets/images/gdp-explorer.png';
import outbreakImg from '../assets/images/outbreak-detector.png';
import co2Img from '../assets/images/co2-dashboard.png';
import marketallImg from '../assets/images/marketall-ecommerce.png';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://text254.streamlit.app/" target="_blank" rel="noreferrer">
                        <img src={textGenImg} className="zoom" alt="Text Generator GAN" width="100%" />
                        <h2>Text Generator (Conditional GAN)</h2>
                    </a>
                    <p>
                        A conditional GAN trained on MNIST to generate handwritten digits based on selected labels.
                        Features a Streamlit interface for real-time digit generation and visualization.
                        Built with Python, TensorFlow, and Streamlit.
                    </p>
                </div>

                <div className="project">
                    <a href="https://collokim-apps.shinyapps.io/wildlife-conflict-mapper/" target="_blank" rel="noreferrer">
                        <img src={wildlifeImg} className="zoom" alt="Wildlife Conflict Mapper" width="100%" />
                        <h2>Wildlife Conflict Mapper</h2>
                    </a>
                    <p>
                        Interactive R Shiny app mapping dangerous wildlife sightings in Kenya.
                        Supports CSV upload, custom icons, heatmaps, and species/date filters.
                        Built with R, Shiny, Leaflet, and Tidyverse.
                    </p>
                </div>

                <div className="project">
                    <a href="https://heart-attack-risk-predictor.streamlit.app/" target="_blank" rel="noreferrer">
                        <img src={heartAttackImg} className="zoom" alt="Heart Attack Predictor" width="100%" />
                        <h2>Heart Attack Risk Predictor</h2>
                    </a>
                    <p>
                        ML-powered Streamlit app that predicts heart disease risk based on clinical data input.
                        Uses logistic regression with Scikit-learn and Pandas for prediction and interactivity.
                    </p>
                </div>

                <div className="project">
                    <a href="https://real-time-global-gdp-explorer-and-forecast.streamlit.app/" target="_blank" rel="noreferrer">
                        <img src={gdpImg} className="zoom" alt="GDP Forecast App" width="100%" />
                        <h2>Real-time Global GDP Explorer & Forecast</h2>
                    </a>
                    <p>
                        Fetches real-time GDP data from World Bank, IMF, and Trading Economics APIs.
                        Forecasts trends using Prophet and LSTM models. Built with Python and Streamlit.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/Meliodus254/Disease-Outbreak-Detector" target="_blank" rel="noreferrer">
                        <img src={outbreakImg} className="zoom" alt="Disease Outbreak Detector" width="100%" />
                        <h2>Disease Outbreak Detector</h2>
                    </a>
                    <p>
                        Streamlit app scraping global health news and detecting outbreak mentions using NLP (ScispaCy).
                        Maps potential disease spread in real-time with geolocation and Folium.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/Meliodus254/C02-emissions-dashboard" target="_blank" rel="noreferrer">
                        <img src={co2Img} className="zoom" alt="CO2 Emissions Dashboard" width="100%" />
                        <h2>CO2 Emissions Dashboard</h2>
                    </a>
                    <p>
                        Visualizes global and country-specific CO2 and fossil fuel emissions using SQLite, Pandas, and Matplotlib.
                        Interactive Streamlit dashboard helps users explore emissions data trends.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/Meliodus254/MarketAll-Ecommerce-Website-" target="_blank" rel="noreferrer">
                        <img src={marketallImg} className="zoom" alt="MarketAll E-commerce" width="100%" />
                        <h2>MarketAll E-commerce Website</h2>
                    </a>
                    <p>
                        Fully functional e-commerce site with product listings, cart, user authentication, and admin features.
                        Built using modern web development tools with JavaScript and MongoDB.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
