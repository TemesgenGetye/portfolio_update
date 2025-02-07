"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import "./style.css";
import Contact from "../Contact";

const ProjectDetail = ({ project }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project);

  return (
    <div className="container">
      <Header customClass="project-details-header" />
      <main className="main">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {project.title}
        </motion.h1>

        <motion.div
          className="project-info"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="info-column">
            <h3>Role / Services</h3>
            <div className="stripe"></div>
            <p>{project.role}</p>
          </div>
          <div className="info-column">
            <h3>Description</h3>
            <div className="stripe"></div>
            <p>{project.desc}</p>
          </div>
          <div className="info-column">
            <h3>Tech Stack</h3>
            <div className="stripe"></div>
            <p>{project.tech}</p>
          </div>
        </motion.div>
        <motion.div
          className="project-infoo"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="info-column">
            <h3>Description</h3>
            <div className="stripe"></div>
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </motion.div>

        <motion.div
          className="laptop-mockup"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src={`/images/${project.src}`}
            alt={`${project.title} website mockup on laptop`}
            width={1000}
            height={600}
            layout="responsive"
          />
        </motion.div>
      </main>
      <div className="space"></div>
      <Contact />

      {project.url !== "" && (
        <button
          className="like-button"
          onClick={() => window.open(project.url)}
        >
          View <br /> Project
        </button>
      )}
    </div>
  );
};

export default ProjectDetail;
