import Card from "../components/Card";

const AboutMe = () => {
  return (
    <Card className="gw-4 sm:gw-2 md:gw-1 gh-6" style={{ fontSize: "0.9rem" }}>
      <p className="card-header">About me</p>
      <p>Hi, I'm Abel, a full-stack software developer from Canada.</p>
      <p>My primary tools of choice includes:</p>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
      </ul>
      <p>
        While I have some preferred tools, I always choose the best one for the
        job, even if it's not on my usual list. My goal is to find the right
        solution for each project.
      </p>
    </Card>
  );
};

export default AboutMe;
