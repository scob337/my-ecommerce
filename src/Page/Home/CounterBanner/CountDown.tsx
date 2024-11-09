import React, { useEffect, useState } from 'react';

interface CountdownProps {
    targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <article className="flex space-x-4 text-center text-gray-800 gap-2">
            <article className='flex items-center gap-1'>
                <span className="block text-2xl font-bold ">{timeLeft.days}</span>
                <span>Day</span>
            </article>
            <article className='flex items-center gap-1'>
                <span className="block text-2xl font-bold ">{timeLeft.hours}</span>
                <span>Hour</span>
            </article>
            <article className='flex items-center gap-1'>
                <span className="block text-2xl font-bold ">{timeLeft.minutes}</span>
                <span>Min</span>
            </article>
            <article className='flex items-center gap-1'>
                <span className="block text-2xl font-bold ">{timeLeft.seconds}</span>
                <span>Sec</span>
            </article>
        </article>
    );
};

export default Countdown;
