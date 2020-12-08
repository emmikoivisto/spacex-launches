import LaunchSelector from "../components/LaunchSelector";
import LaunchDetails from "../components/LaunchDetails";
import { useEffect, useState } from "react";

const LaunchContainer = () => {

    const [launch, setLaunch] = useState({});  //starts as an empty object
    const [loaded, setLoaded] = useState(false); //this is to set the load to false on first render. Preventing error on load
    const [selectedLaunchId, setSelectedLaunchId] = useState(1);

    const getLaunch = () => {
        console.log("getting launch info")
        fetch(`https://api.spacexdata.com/v3/launches/${selectedLaunchId}`)  //this last one is our state id
        .then(res => res.json())
        .then(data => setLaunch(data))  //sending it to be our launch
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getLaunch();
    }, [selectedLaunchId])  //use effect should only trigger only on mount. Here you specify what to trigger it again with

    const incrementSelectedLaunch = () => {
        if (selectedLaunchId < 90 ) {
        setSelectedLaunchId(selectedLaunchId + 1)
        }
    }

    const decrementSelectedLaunch = () => {
        if (selectedLaunchId > 0 ) {
        setSelectedLaunchId(selectedLaunchId - 1)
        }
    }

    return (
        <>
            <h1>SpaceX Launch details</h1>
            <LaunchSelector 
                increment={incrementSelectedLaunch} 
                decrement={decrementSelectedLaunch}/>
            <LaunchDetails 
                launch={launch}
                loaded={loaded}/>
        </>
    )

}

export default LaunchContainer;