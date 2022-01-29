import React, { useRef, useEffect, useState } from 'react';
import '../App.css';

const Countdown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('September 30, 2022 00:00:00:').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60) / (1000)));

            if (distance < 0) {
                // stop timer 
                clearInterval(interval.current);
            } else {
                //update timer
             setTimerDays(days);
             setTimerHours(hours);
             setTimerMinutes(minutes);
             setTimerSeconds(seconds);
            }

        }, 1000);
    };


    // componentDidMount
    useEffect(()=> {
        const someref = interval.current
        startTimer()
        return ()=> {
          clearInterval(someref)
        }
      }, [])



  return (
  <section className='timer-container'>
      <section className='timer'>
        <div>
            <span className='mdi mdi-calendar-clock timer-icon'></span>
            <h2>REGISTRATION DEADLINE!</h2>
            <p>Reserve your spot today by completing the forms on our Register page!</p>
        </div>
        <div>
            <section>
                <p>{timerDays}</p>
                <p><small>DAYS</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{timerHours}</p>
                <p><small>HOURS</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{timerMinutes}</p>
                <p><small>MINUTES</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{timerSeconds}</p>
                <p><small>SECONDS</small></p>
            </section>
        </div>
      </section>
  </section>
  );
};

export default Countdown;
