const LaunchSelector = ({increment, decrement}) => {

    return (
        <>
            <button onClick={decrement}>Previous Launch</button>
            <button onClick={increment}>Next Launch</button>
        </>
    )
}

export default LaunchSelector;