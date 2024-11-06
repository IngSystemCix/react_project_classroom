import { useEffect, useMemo, useRef, useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(0);
    const previousCount = useRef(count);

    useEffect(() => {
        previousCount.current = count;
    }, [count]);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const expensiveCalculation = useMemo(() => {
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        return result;
    }, []);

    return {
        count,
        increment,
        decrement,
        reset,
        expensiveCalculation,
        previousCount: previousCount.current,
    };
}