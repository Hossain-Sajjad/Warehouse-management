import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'


const CounterSection = () => {
    const [flip, set] = useState(false)
    const { number } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 0 },
        number: 100,
        delay: 1000,
        onRest: () => set(!flip),
    })

    return <animated.div className='text-white text-center'>{number.to(n => n.toFixed(2))}</animated.div>
};

export default CounterSection;