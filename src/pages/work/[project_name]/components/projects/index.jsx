"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

const ProjectDetail = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="projectContainer">
      <motion.header
        className="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/" className="logo">
          © Code by Dennis
        </Link>
        <nav>
          <Link href="/work" className="active">
            Work
          </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </motion.header>

      <main className="main">
        {/* <motion.h1
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Damai
        </motion.h1> */}

        <motion.div
          className="projectInfo"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          {/* <div className="column">
            <h3>ROLE / SERVICES</h3>
            <p>Design & Development</p>
          </div>
          <div className="column">
            <h3>CREDITS</h3>
            <p>Design: Christy Lammersink</p>
            <p>Design: Tom de Koning</p>
            <p>Photography: Nike Schuurmans</p>
          </div>
          <div className="column">
            <h3>LOCATION & YEAR</h3>
            <p>Bali, Indonesia © 2024</p>
          </div> */}
        </motion.div>

        <motion.div
          className="heroImage"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src="/placeholder.svg"
            alt="The Damai entrance"
            width={1200}
            height={800}
            className="image"
          />
        </motion.div>

        <motion.div
          className="deviceMockup"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/placeholder.svg"
            alt="Website mockup on laptop"
            width={1000}
            height={600}
            className="mockupImage"
          />
        </motion.div>

        <div className="mobileScreens">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="mobileScreen"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg"
                alt={`Mobile screen ${index}`}
                width={300}
                height={600}
                className="screenImage"
              />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
