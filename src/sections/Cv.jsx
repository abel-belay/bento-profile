import Card from "../components/Card";
import ResumePng from "../assets/resume.png";
import ArrowIcon from "../assets/ArrowIcon";

const Now = () => {
  return (
    <Card className="gw-4 sm:gw-1 gh-2 flex flex-col cursor-pointer">
      <div className="flex justify-between items-start">
        <span className="card-header">My CV</span>
        <ArrowIcon />
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
