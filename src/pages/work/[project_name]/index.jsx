import ProjectDetail from "../../../components/ProjectDetail";
import projects from "../../../components/Projects/projectsData";

const ProjectDetailPage = ({ project }) => {
  return <ProjectDetail project={project} />;
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: {
      project_name: project?.slug?.toLowerCase()?.replace(/\s+/g, "-"),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find(
    (proj) =>
      proj?.slug?.toLowerCase()?.replace(/\s+/g, "-") === params.project_name
  );

  return { props: { project } };
}

export default ProjectDetailPage;
