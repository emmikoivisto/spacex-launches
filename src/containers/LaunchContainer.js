import LaunchSelector from "../components/LaunchSelector";
import LaunchDetails from "../components/LaunchDetails";
import { useEffect, useState } from "react";

const LaunchContainer = () => {

    const [launch, setLaunch] = useState({});  //starts as an empty object
    const [selectedLaunchId, setSelectedLaunchId] = useState(1);

    const getLaunch = () => {
        console.log("getting launch info")
        fetch(`https://api.spacexdata.com/v3/launches/${selectedLaunchId}`)  //this last one is our state id
        .then(res => res.json())
        .then(data => setLaunch(data))  //sending it to be our launch
    }

    useEffect(() => {
        getLaunch();
    }, [])  //use effect should only trigger only on mount

    return (
        <>
            <h1>SpaceX Launch details</h1>
            <LaunchSelector />
            <LaunchDetails />
        </>
    )

}

export default LaunchContainer;