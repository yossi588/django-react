import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from "react";
import reportWebVitals from './reportWebVitals';
import {useNavigate} from "react-router-dom";

export default function Register() {
    const [FirstName, FirstNameHandler] = useState('');
    const [LastName, LastNameHandler] = useState('');
    const [BirthDay, BirthDayHandler] = useState('');
    const [Address, AddressHandler] = useState('');
    const [City, CityHandler ] = useState('');
    const [ZipCode, ZipCodeHandler] = useState('');
    const [LandLine, LandLineHandler] = useState('');
    const [Phone, PhoneHandler] = useState('');
    const [IfInfected, IfInfectedHandler] = useState(false);
    const [Other, OtherHandler] = useState('');
    const navigate = useNavigate();

    const submitHandler =async e =>{
        e.preventDefault();
        const dataForm = {
            FirstName, LastName, BirthDay, Address, City, ZipCode,LandLine, Phone, IfInfected, Other
        }

        fetch('http://localhost:8000/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataForm),
        })
            .then(response => response.json())
            .then(data => {
                navigate('/summary');
                console.log('Success:', data);
            })
            .catch((error) => {
                alert("Server Problem,try again! OR check Server");
                console.error('Error:', error);
            });
    }

    return (
        
        <form action="http://localhost:8000/register/" method="post">
            <center>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
crossorigin="anonymous"></script>
<div class="input-group mb-3">
            <h1>Registration</h1> 
            <div class="container">
            

            <div className="form-Data">
                <label >First Name:</label>
                <input type="text" id="FirstName" className="form-control" autoComplete="off"
                       placeholder="First Name" value={FirstName} onChange={(e) => FirstNameHandler(e.target.value)}
                       required/>
             {}
             <br/>
             <br/>
                <label>Last Name:</label>
                <input type="text" id="LastName" class="form-control" className="form-control" autoComplete="off"
                       placeholder="Enter Last Name" value={LastName} onChange={(e) => LastNameHandler(e.target.value)}required
                       />
             {}
             <br/>
             <br/>
                <label htmlFor="Date-of-birth" className="form-label fw-normal h5">
                    Date of birth:
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="Date-BirthDay-birth"
                    aria-describedby="emailHelp"
                    name="BirthDay"
                    value={BirthDay}
                    onChange={(ev) => {
                        const value = ev.target.value;
                        BirthDayHandler(value);
                    }}
                    required />
<br/>
<br/>
                <label>Address:</label>
                <input type="text" id="Address" className="form-control" autoComplete="off"
                       placeholder="Enter Address" value={Address} onChange={(e) => AddressHandler(e.target.value)}required/>
               {}
               <br/>
               <br/>
                <label htmlFor="city" className="form-label fw-normal h5">
                    City: </label>
                <select className="form-select" aria-label="Default select example"
                        name="City" value={City} onChange={(e)=>CityHandler(e.target.value)}>
                    <option selected>Tel Aviv</option>
                    <option value="">Jerusalem</option>
                    <option value="">Haifa</option>
                    <option value="">Ashdod</option>
                </select>

                <label>Zip Code:</label>
                <input type="number" id="ZipCode" className="form-control" autoComplete="off"
                       placeholder="Enter ZipCode" value={ZipCode} onChange={(e) => ZipCodeHandler(e.target.value)}/>
                {}

                <label>Land Line:</label>
                <input type="number" id="LandLine" className="form-control" autoComplete="off"
                       placeholder="Enter LandLine" value={LandLine} onChange={(e) => LandLineHandler(e.target.value)}/>
                {}
            <br/>
            <br/>
                <label>Phone Number:</label>
                <input type="number" id="Phone" className="form-control" autoComplete="off"
                       placeholder="Enter Phone" value={Phone} onChange={(e) => PhoneHandler(e.target.value)}/>
                {}
            <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="IfInfected" autoComplete="off"
                value={IfInfected} onChange={(e)=> IfInfectedHandler(!IfInfected)}/>
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Have been infected by COVID-19 before?
                </label>
            </div>
            <br/>
            <br/>
                <label>Other:</label>
                <input type="text" id="Other" className="form-control" autoComplete="off"
                       value={Other} onChange={(e) => OtherHandler(e.target.value)}/>
                {}
            </div>
            <input type="submit" value="Submit"/>
            </div>
            </div>
            </center>

        </form>
    );

}
