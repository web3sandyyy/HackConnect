import React, { useEffect, useState } from "react";
import { getVisitorId } from "../utils/fingerprint";

const Home = () => {
  const [visitorId, setVisitorId] = useState(null);

  useEffect(() => {
    const fetchVisitorId = async () => {
      const id = await getVisitorId();
      setVisitorId(id);
    };

    fetchVisitorId();
  }, []);

  return (
    <div>
      home
      {visitorId ? (
        <p className="mt-4 text-gray-700">
          Your unique visitor ID: <span className="font-mono">{visitorId}</span>
        </p>
      ) : (
        <p>Loading your visitor ID...</p>
      )}
    </div>
  );
};

export default Home;
