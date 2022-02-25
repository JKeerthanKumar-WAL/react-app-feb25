import {useState, useEffect} from "react";
import axios from "axios";
const ApiNoProxy = () => {
    let [details, setDetails] = useState([]);
    useEffect(() =>{
        axios.get("https://www.boredapi.com/api/activity")
        .then((res) => {
            setDetails(res.data);
        });
    },[]);
    return(           
        <div className="App-div">
            <h1>Activity Details</h1>
            <b>Activity : </b>{details.activity}<br />
            <b>Type : </b>{details.type}<br />
            <b>Participants : </b>{details.participants}<br />
            <b>Price : </b>{details.price}<br />
            <b>Link : </b>{details.link}<br />
            <b>Key : </b>{details.key}<br />
            <b>Accessibility : </b>{details.accessibility}<br/>
        </div>
    )
}
export default ApiNoProxy;