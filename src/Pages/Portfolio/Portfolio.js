import React, { useState, useEffect } from "react";
import "./Portfolio.css";

// Importing images directly since they are in the same folder as Portfolio.js
import FashionCollection from "./FashionCollections.png";
import website2 from "./Website1.jpg";
import Websitet1 from "./Website1.jpg";
import mobile1 from "./FashionCollections.png";
import mobile2 from "./FashionCollections.png";
import graphic1 from "./FashionCollections.png";
import marketing1 from "./FashionCollections.png";
import website3 from "./FashionCollections.png";
import website4 from "./FashionCollections.png";
import website5 from "./FashionCollections.png";
import website6 from "./FashionCollections.png";
import website7 from "./FashionCollections.png";

const portfolioData = [
  { id: 1, category: "Website", img: FashionCollection, details: "Details about Fashion Collection" },
  { id: 2, category: "Website", img: Websitet1, details: "Details about Website 2" },
  { id: 3, category: "Website", img: website3, details: "Details about Website 3" },
  { id: 4, category: "Website", img: website4, details: "Details about Website 4" },
  { id: 5, category: "Website", img: website5, details: "Details about Website 5" },
  { id: 6, category: "Website", img: website6, details: "Details about Website 6" },
  { id: 7, category: "Website", img: website7, details: "Details about Website 7" },
  { id: 8, category: "Website", img: FashionCollection, details: "Details about Fashion Collection" },
  { id: 9, category: "Website", img: website2, details: "Details about Website 2" },
  { id: 10, category: "Mobile", img: mobile1, details: "Details about Mobile 1" },
  { id: 11, category: "Mobile", img: mobile2, details: "Details about Mobile 2" },
  { id: 12, category: "Mobile", img: mobile1, details: "Details about Mobile 1" },
  { id: 13, category: "Mobile", img: mobile2, details: "Details about Mobile 2" },
  { id: 14, category: "Mobile", img: mobile1, details: "Details about Mobile 1" },
  { id: 15, category: "Mobile", img: mobile2, details: "Details about Mobile 2" },
  { id: 16, category: "Mobile", img: mobile1, details: "Details about Mobile 1" },
  { id: 17, category: "Mobile", img: mobile2, details: "Details about Mobile 2" },
  { id: 18, category: "Graphic", img: graphic1, details: "Details about Graphic 1" },
  { id: 19, category: "Graphic", img: graphic1, details: "Details about Graphic 1" },
  { id: 20, category: "Graphic", img: graphic1, details: "Details about Graphic 1" },
  { id: 21, category: "Graphic", img: graphic1, details: "Details about Graphic 1" },
  { id: 22, category: "Graphic", img: graphic1, details: "Details about Graphic 1" },
  { id: 23, category: "Graphic", img: graphic1, details: "Details about Graphic 1" },
  { id: 24, category: "Graphic", img: graphic1, details: "Details about Graphic 1" },
  { id: 25, category: "Graphic", img: graphic1, details: "Details about Graphic 1" },
  { id: 26, category: "Marketing", img: marketing1, details: "Details about Marketing 1" },
  { id: 27, category: "Marketing", img: marketing1, details: "Details about Marketing 1" },
  { id: 28, category: "Marketing", img: marketing1, details: "Details about Marketing 1" },
  { id: 29, category: "Marketing", img: marketing1, details: "Details about Marketing 1" },
  { id: 30, category: "Marketing", img: marketing1, details: "Details about Marketing 1" },
  { id: 31, category: "Marketing", img: marketing1, details: "Details about Marketing 1" },
  { id: 32, category: "Marketing", img: marketing1, details: "Details about Marketing 1" },
  { id: 33, category: "Marketing", img: marketing1, details: "Details about Marketing 1" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  const filteredProjects =
    filter === "All"
      ? portfolioData
      : filter === "Graphic"
      ? portfolioData.filter((item) => item.category === filter).slice(0, 6)
      : filter === "Mobile"
      ? portfolioData.filter((item) => item.category === filter).slice(0, 7)
      : filter === "Marketing"
      ? portfolioData.filter((item) => item.category === filter).slice(0, 7)
      : portfolioData.filter((item) => item.category === filter);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setCurrentImage(project.img);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImage(null);
  };

  useEffect(() => {
    let timer;
    if (selectedProject) {
      timer = setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = portfolioData.findIndex((item) => item.img === prevImage);
          const nextIndex = (currentIndex + 1) % portfolioData.length;
          return portfolioData[nextIndex].img;
        });
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [selectedProject, currentImage]);

  return (
    <div className="portfolio-container">
      <h1 className="main-heading">My Portfolio</h1>

      {/* Navbar */}
      <div className="portfolio-navbar">
        {["All", "Website", "Mobile", "Graphic", "Marketing"].map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Gallery */}
      <div className={`portfolio-gallery ${filter === "Graphic" ? "graphic-gallery" : ""} ${filter === "Mobile" ? "mobile-gallery" : ""} ${filter === "Marketing" ? "marketing-gallery" : ""} ${filter === "Website" ? "website-gallery" : ""}`}>
        {filteredProjects.map((project, index) => (
          <div key={project.id} className={`portfolio-item portfolio-item-${index % 9}`} onClick={() => handleImageClick(project)}>
            <img src={project.img} alt={project.category} />
            <div className="overlay">
              <p>{project.category} Project</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={currentImage} alt={selectedProject.category} className="modal-image" />
            <div className="modal-separator"></div>
            <div className="modal-details">
              <h2>{selectedProject.category} Project</h2>
              <p>{selectedProject.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;