import React, { useEffect, useState } from "react";
import "../style/header.css";
import asset4 from "../asset/15118.jpg";
import sqlcert from "../asset/SqlCert.png";
import  project1 from '../asset/ramcoMini.jpg'
import  project2 from'../asset/kartimage.jpg'
import { ProgressBar } from "react-bootstrap";


export default function Header() {
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState([]);

  const [isHovered, setIsHovered] = useState([]);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const columns = [
    { id: 1, skills: "SQL", stopValue: 90 },
    { id: 2, skills: "HTML&CSS", stopValue: 100 },
    { id: 3, skills: "ReactJS", stopValue: 90 },
    { id: 4, skills: "BOOTSTRAP", stopValue: 90 },
    { id: 5, skills: "JAVA", stopValue: 85 },
    { id: 6, skills: "C#", stopValue: 90 },
    { id: 7, skills: "VBA", stopValue: 90 },
    { id: 8, skills: "GIT", stopValue: 90 },
    { id: 9, skills: "GITLAB", stopValue: 90 },
    { id: 10, skills: "Java Script", stopValue: 90 },
  ];
   
  useEffect(() => {
    
    const interval = setInterval(() => {
     
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  const handleMouseEnter = (index) => {
    const updatedHovered = [...isHovered];
    const updatedHoveredSkill = [...hoveredSkill]; 
    updatedHovered[index] = true;
    updatedHoveredSkill[index] = columns[index].id; 
    setIsHovered(updatedHovered);
    setHoveredSkill(updatedHoveredSkill); 
  }
  const handleMouseLeave = (index) => {
    const updatedHovered = [...isHovered];
    const updatedHoveredSkill = [...hoveredSkill]; 
    updatedHovered[index] = false;
    updatedHoveredSkill[index] = null; 
    setIsHovered(updatedHovered);
    setHoveredSkill(updatedHoveredSkill); 
  };


  return (
    <div className="container">
      <div className="row">
        <div className="headname">
          <span className="fontstyle" onClick={toggleContent}>
            SRINIVASAN
          </span>
          <br />
          <span>UI developer</span>
        </div>
      </div>
      <div className="row">
        <div className="custom-img" style={{ width: "40%" }}>
          <img src={asset4} alt="profile.img" />
        </div>
        <div className="col-md-6">
          <h1>PROFILE</h1>
          <p className={`para ${showContent ? "show" : "hide"}`}>
            Diligent and self-learned SQL developer and UI developer with 2+
            years’ experience in ERP. Eager to build innovative and cutting-edge
            business solutions for the impressive suite of clients within its
            global reach. In previous roles, Designed and built highly scalable
            systems from scratch, Provided solutions for complex business
            problems.
          </p>
        </div>
      </div>
      <div className="row headingparts" id="section-1">
        <div className="col-md-3 mb-5 bgrad">
          <a href="#section-1" className=" linkinside custom-link">
            Work History
          </a>
        </div>
        <div className="col-md-3 mb-5 bgrad">
          <a href="#section-2" className=" linkinside custom-link">
            Skills
          </a>
        </div>
        <div className="col-md-3 mb-5 bgrad">
          <a href="#section-3" className=" linkinside custom-link">
            Certifications
          </a>
        </div>
        <div className="col-md-3 mb-5 bgrad">
          <a href="#section-4" className=" linkinside custom-link">
            Projects
          </a>
        </div>
      </div>

      <div
        data-spy="scroll"
        data-target="headingparts"
        data-offset="0"
        className="headingparts"
      >
        <div id="section-1" className="workhead">
          <h3>WORK HISTORY</h3>
          <ul>
            <li>
              Proficient in SQL Programming, SSRS Reporting, and Jasper Report.
            </li>
            <li>
              Extensive experience in SQL Server Database design, T-SQL queries,
              stored procedures, UDFs, and triggers.
            </li>
            <li>
              Skilled in Crystal Reports and EDK Reports for custom report
              development.
            </li>
            <li>
              Experienced in addressing Performance Related Issues such as
              indexing activities and logic optimization.
            </li>
            <li>
              Proficient in creating Indexes, Views, Triggers, Functions, and
              Stored Procedures to streamline data manipulation.
            </li>
            <li>
              Proficient in creating Indexes, Views, Triggers, Functions, and
              Stored Procedures to streamline data manipulation.
            </li>
          </ul>
        </div>
        <div id="section-2">
          <h4>Skills</h4>
          <div className="row rwoskills">
            {columns.map((column, index) => (
              <div
                key={column.id}
                className="col-md-12"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <h5>{column.skills}</h5>
                <ProgressBar
                  striped
                  variant="success"
                  animated
                  now={isHovered[index] ? column.stopValue : 0}
                  label={`${isHovered[index] ? column.stopValue : 0}%`}
                />
              </div>
            ))}
          </div>
        </div>
        <div id="section-3">
          <h4>Certifications</h4>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card box" style={{ width: "60%" }}>
                <div className="card-body">
                  <img
                    src={sqlcert}
                    alt="SQL Certification"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h5 className="certtitle">SQL Certification 1</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card box" style={{ width: "60%" }}>
                <div className="card-body">
                  <img
                    src={sqlcert}
                    alt="C# Foundation"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h5 className="certtitle">C# Foundation</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card box" style={{ width: "60%" }}>
                <div className="card-body">
                  <img
                    src={sqlcert}
                    alt="LeaderShipProgram"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h5 className="certtitle">LeaderShipProgram</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card box" style={{ width: "60%" }}>
                <div className="card-body">
                  <img
                    src={sqlcert}
                    alt="In progress"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h5 className="certtitle">FullStackDevlopemnt</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-4">
          <h4>Projects</h4>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card " style={{ width: "60%" }}>
                <div className="card-body">
                  <img
                    src={project1}
                    alt="RamcoMINIProject"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <a
                    className="certtitle"
                    href="https://ramcominiproject--ramconextgen.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RamcoMINIProject
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card " style={{ width: "60%" }}>
                <div className="card-body">
                  <img
                    src={project2}
                    alt="EKARTShopping"
                    style={{ width: "90%", height: "60%" }}
                  />
                  <a
                    className="certtitle"
                    href="https://first--uncommonbeing.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    uncommonbeingEkart Shopping 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
