import {useEffect, useState} from "react";
import {getLaunches} from "../../src/servies/SpaceServis";
import {Launch} from "./SpaceLaunch";
import {getLaunchesAxios} from "../../src/servies/SpaceServisAxios";


export function Launches() {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunches().then(value => {
            setLaunches(value);
        })

        getLaunchesAxios().then(value => {
            setLaunches(value.data);
        })
    }, []);




    return (
        <div>
            {launches.length?launches.filter(value => value.launch_year !== '2020').map(value => <Launch launch={value} key={value.flight_number}/>):<div>Waiting response from 'api.spacexdata.com'</div>}
        </div>
    );



}