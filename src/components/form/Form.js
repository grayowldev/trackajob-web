import './form.css';
import Button from '../buttons/Button';
import { JForm } from '../styles/JForm.styled';
import Inputt from '../Input';
import { JInput } from '../styles/JInput.styled';
import { useState } from 'react';
import api from '../../services/api';

function Form(props) {
    const initData = {
        company:"",
        position:"",
        location:"",
        url:""
    }
    const [data, setData] = useState(initData)
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value.trim()
        });
        console.log(data);
    };
    const f = [
        {
            labelName: "Company name",
            valueName: 'company'
        },
        {
            labelName: "Position",
            valueName: 'position'
        },
        {
            labelName: "Location",
            valueName: 'location'
        }, 
        {
            labelName: 'Job URL',
            valueName: 'url'
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault()
        const dammyData = {
            company:"fake Comp",
            position:"123 eng",
            location:"NY",
            url:"link"
        }
        console.log("submit clicked", dammyData, data);
        const respose = api.post("/job/", data)
    }
    return (
        <JForm>
                <form>
                    {f.map(e => (
                        <>
                            <label>
                                {e.labelName}  
                                <JInput 
                                    type="text"
                                    name={e.valueName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </>                  
                    ))}
                    <Button func={handleSubmit} text="Submit"></Button>
                </form>
        </JForm>      
    )
}

export default Form;