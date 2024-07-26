import ProfilePng from "../assets/profile.png";
import Card from "../components/Card";
import GithubPng from "../assets/github-mark-white.png";

const Intro = () => {
  return (
    <Card className="flex gw-4 lg:gw-3 gh-4 lg:gh-4">
      <div className="w-full flex flex-column ">
        <p>welcome</p>
        <p>
          Hi, I'm <b>Abel Belay</b>, a software developer with strong focus on
          building frontends and backends for the web.
        </p>
        <p>
          Feel free to reach out to me if you have any projects in mind, or just
          to say hello.
        </p>
        <div className="mt-auto flex">
          <button className="intro-button">
            <img src={GithubPng} alt="github" />
          </button>
          <button className="intro-button">
            <img src={GithubPng} alt="github" />
          </button>
          <button className="intro-button">
            <img src={GithubPng} alt="github" />
          </button>
          <button className="intro-button">
            <img src={GithubPng} alt="github" />
          </button>
        </div>
      </div>
      <img
        src={ProfilePng}
        className="mt-auto"
        style={{ width: "300px", height: "fit-content" }}
      />
    </Card>
  );
};

export default Intro;
