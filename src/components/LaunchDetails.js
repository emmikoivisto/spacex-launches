const LaunchDetails = ({launch, loaded}) => {

    if(!loaded){
        return <p>Loading...</p>
    }

    return (
        <>
            <h3>{launch.mission_name}</h3>
            <p>Rocket: {launch.rocket.rocket_name}</p>
            <p>Flight number: {launch.flight_number}</p>
            <p>Launch year: {launch.launch_year}</p>

        </>
    )

}

export default LaunchDetails;