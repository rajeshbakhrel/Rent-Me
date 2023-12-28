import React, { useState, useEffect } from "react";

function FeatureLand() {
  const [nearbyLands, setNearbyLands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://parajuli11.pythonanywhere.com/land/List/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filter the data based on the condition 'near_by === "yes"'
        const nearbyData = data.filter((land) => land.near_by === "yes");
        setNearbyLands(nearbyData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div>
        <h1>Nearby Lands</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {nearbyLands.map((land) => (
              <li key={land.id}>
                {/* Display the data */}
                <p>Name: {land.name}</p>
                <p>Location: {land.location}</p>
                {/* Display other relevant data */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FeatureLand;
