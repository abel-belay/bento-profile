import Card from "../components/Card";
import ArrowIcon from "../assets/ArrowIcon";

const Projects = () => {
  return (
    <Card
      className="gw-4 sm:gw-2 md:gw-1 gh-1 flex justify-content-between align-items-start cursor-pointer"
      style={{ color: "#e63946" }}
    >
      <span className="card-header">Projects</span>
      <ArrowIcon style={{ fill: "#e63946" }} />
    </Card>
  );
};

export default Projects;
