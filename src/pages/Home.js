import { useState } from "react";
import JobCard from "../components/cards/JobCard";
import Popup from "../components/Popup";
import { Container } from "../components/styles/Container.styled";
import { JBox } from "../components/styles/Jbox.styled";
import { Plain } from "../components/styles/Plain.styled";



export default function Home(props) {
    const jobs = props.jobs;
    const [popupTrigger, setPopupTrigger] = useState(false);
    const cardData = {
        "company": "Google",
        "position": "Senior Software Engineer",
        "location": "New York, NY"
    }
    const triggerPopup = () => {
        console.log("clicked");
        setPopupTrigger(!popupTrigger);
        console.log(popupTrigger);
    }
    console.log(jobs)
    return (
        <Container>
            <h1>Welcome Home</h1>
            <button onClick={triggerPopup}>Add Job</button>
            <Popup trigger={popupTrigger}/>
            
            <div>
                <Plain width="40%">
                    {jobs.map((job) => (
                        <JobCard data={job}/>
                    ))}
                </Plain>
            <Plain width="59%">
                    <JBox bgcolor="white"></JBox>
            </Plain>
            </div>
            
            
        </Container>
        )
}