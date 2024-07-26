import Card from "../components/Card";

const data = [
  {
    title: "Software Engineer",
    company: "Rolling Wave",
    time: "2022 - Current",
  },
  {
    title: "Software Engineer",
    company: "BRRIDGE",
    time: "2021 - 2022",
  },
  {
    title: "Team Lead",
    company: "iGEM Lethbridge",
    time: "2019 - 2020",
  },
];

const Experience = () => {
  return (
    <Card className="gw-4 sm:gw-2 md:gw-1 gh-4">
      <p className="card-header mb-2">Experience</p>
      {data.map((position, i) => (
        <div style={{ margin: "0.8rem 0" }} key={i}>
          <p className="card-header">{position.title}</p>
          <p style={{ fontSize: "0.9rem", color: "#e63946" }}>
            {position.company}
          </p>
          <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.5)" }}>
            {position.time}
          </p>
        </div>
      ))}
    </Card>
  );
};

export default Experience;
