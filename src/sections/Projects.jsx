import Card from "../components/Card";

const Projects = () => {
  return (
    <Card
      className="gw-4 sm:gw-2 md:gw-1 gh-1 flex justify-content-between"
      style={{ color: "#e63946" }}
    >
      <span className="card-header">Projects</span>
      <span>{"->"}</span>
    </Card>
  );
};

export default Projects;
