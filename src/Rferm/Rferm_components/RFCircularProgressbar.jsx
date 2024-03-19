import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RFCircularProgressbar = () => {
 
  // Define state to hold the percentage value
  const [percentage, setPercentage] = useState(0);

  // Use useEffect to update the percentage value
  useEffect(() => {
    // Your logic to calculate the percentage value
    const calculatedPercentage = calculatePercentage(); // Example function to calculate the percentage
    setPercentage(calculatedPercentage); // Set the percentage value
  }, []); // Dependency array to run the effect only once when the component mounts

  // Function to calculate the percentage value
  const calculatePercentage = () => {
    // Your logic to calculate the percentage value
    return 50; // Example value
  };

  return (
    <div style={{ width: 60, height: 60 }}>
      {/* Render the CircularProgressbar component with dynamic values */}
      <CircularProgressbar
        value={percentage} // Provide the percentage value
        text={`${percentage}%`} // Provide the text to display inside the progress bar
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
    </div>
  );
};

export default RFCircularProgressbar
