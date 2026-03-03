import { useEffect, useState } from "react";

export default function Countdown() {

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {

    const eventDate =
      new Date("April 1, 2026 09:00:00").getTime();

    const timer = setInterval(() => {

      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance/(1000*60*60*24)),
        hours: Math.floor((distance%(1000*60*60*24))/(1000*60*60)),
        minutes: Math.floor((distance%(1000*60*60))/(1000*60)),
        seconds: Math.floor((distance%(1000*60))/1000),
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <div className="flex gap-6 justify-center mt-8 text-grey-400">

      {Object.entries(timeLeft).map(([label,value]) => (
        <div
          key={label}
          className="bg-white/70 px-6 py-4 border border-grey-400 rounded"
        >
          <h2 className="text-3xl font-bold">
            {value || 0}
          </h2>
          <p className="uppercase text-sm">
            {label}
          </p>
        </div>
      ))}

    </div>
  );
}