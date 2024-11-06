import { useCounter } from "../../hooks";

export const Counter = () => {
    const { count, increment, decrement, reset, expensiveCalculation, previousCount } = useCounter();

    return (
        <div>
            <h1>Counter</h1>
            <h2>Counter current: {count}</h2>
            <h2>Counter previous: {previousCount}</h2>
            <h2>Expensive calculation: {expensiveCalculation}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}