
import React, { useState, useEffect} from 'react';
import { Card, CardItem, Text, Body, Right, ListItem} from 'native-base';
const CountDown = ({endsAt}) => {
    const calculateTimeLeft = () => {
        const difference = + new Date(endsAt) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <Text>
            {timeLeft[interval]} {interval}{" "}
          </Text>
        );
      });
    
      return timerComponents.length ? timerComponents : <Text>Time's up!</Text>

}
export default CountDown
/*Adapted from https://alligator.io/react/countdown-timer-react-hooks*/