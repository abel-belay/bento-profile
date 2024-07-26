import Card from "../components/Card";
import ResumePng from "../assets/resume.png";

const Now = () => {
  return (
    <Card className="gw-4 sm:gw-1 gh-2 flex flex-column">
      <div className="flex justify-content-between">
        <span className="card-header">My CV</span>
        <span>{"->"}</span>
      </div>
      <div
        className="w-full h-full mt-3"
        style={{
          backgroundImage: `url(${ResumePng})`,
          backgroundSize: "cover",
          borderRadius: "0.25rem 0.25rem 0px 0px",
        }}
      />
    </Card>
  );
};

export default Now;
