const LaunchSelector = ({incrementSelectedLaunch, decrementSelectedLaunch}) => {

    return (
        <>
            <button onClick={decrementSelectedLaunch}>Previous Launch</button>
            <button onClick={incrementSelectedLaunch}>Next Launch</button>
        </>
    )
}

export default LaunchSelector;