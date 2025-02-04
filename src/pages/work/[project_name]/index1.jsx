import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../../components/ProjectDetail/style.module.scss";
import projects from "../../../components/Projects/projectsData"; // Assuming you have a separate file for project data

const ProjectDetail = ({ project }) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.projectContainer}>
      <main className={styles.main}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.projectInfo}>
          <div className={styles.column}>
            <h3>ROLE / SERVICES</h3>
            <p>Design & Development</p>
          </div>
          <div className={styles.column}>
            <h3>DESCRIPTION</h3>
            <p>{project.desc}</p>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={`/images/${project.src}`}
            alt={project.title}
            className={styles.image}
            layout="fill"
          />
        </div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: {
      project_name: project?.title?.toLowerCase()?.replace(/\s+/g, "-"),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find(
    (proj) =>
      proj?.title?.toLowerCase()?.replace(/\s+/g, "-") === params?.project_name
  );

  return { props: { project } };
}

export default ProjectDetail;
