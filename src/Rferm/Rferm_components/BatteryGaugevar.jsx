import React, { useState, useEffect } from 'react';
import BatteryGauge from 'react-battery-gauge';

const BatteryGaugevar = ({size}) => {
  const [batteryValue, setBatteryValue] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryValue(prevValue => {
        if (prevValue === 10) return 50;
        else if (prevValue === 50) return 100;
        else return 10;
      });
    }, 2000); // Change this value to control the interval in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <BatteryGauge size={size} value={batteryValue} />
    </div>
  );
};

export default BatteryGaugevar;
