import { useEffect, useState } from "react";
import Card from "../components/Card";

const Time = () => {
  const [time, setTime] = useState(new Date());

  let options = {
    timeZone: "Canada/Mountain",
    hour: "numeric",
    minute: "numeric",
  };
  let formatter = new Intl.DateTimeFormat([], options);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className="gw-4 sm:gw-2 gh-2">
      <p className="card-header">Time zone</p>
      <p
        className="my-auto"
        style={{ fontSize: "3rem", fontFamily: "Times New Roman" }}
      >
        {formatter.format(time)} MST, Canada
      </p>
    </Card>
  );
};

export default Time;
