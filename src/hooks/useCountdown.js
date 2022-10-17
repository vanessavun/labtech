import { useEffect, useState } from 'react';

const useCountdown = (targetTime, data) => {
  const { isTimerActive } = data;
  const [countDown, setCountDown] = useState(targetTime-(Date.now()));
  
  console.log(isTimerActive)
  useEffect(() => {
    if(isTimerActive) {
      if (countDown < 0) return clearInterval(interval);

      const interval = setInterval(() => {
        setCountDown(targetTime-(Date.now()));
      }, 1000);
  
      return () => {
        clearInterval(interval);
      } 
    }
  }, [countDown, isTimerActive]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  console.log(countDown)
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };