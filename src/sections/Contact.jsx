import Card from "../components/Card";

const Intro = () => {
  return (
    <Card className="flex gw-4 sm:gw-2 md:gw-1 gh-2">
      <div className="w-full flex flex-col">
        <p className="card-header">Let's get in touch</p>
        <p className="mt-2">Contact Details</p>
        <p>abel.belay01@gmail.com</p>
      </div>
    </Card>
  );
};

export default Intro;
