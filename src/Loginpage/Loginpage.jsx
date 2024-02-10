import React from 'react';
import './Loginpage.css';
import { useState } from 'react';
import Patient from './Patient';
import Doctor from './Doctor';

export default function Loginpage() {
    const [active, setActive] = useState("patient");
    return (
        <div>
            <div class='btn2'>
                <button onClick={() => setActive('patient')}>Patient</button>
                <button onClick={() => setActive('doctor')}>Doctor</button>
            </div>
            {active === 'patient' && <Patient />}
            {active === 'doctor' && <Doctor />}
        </div>
        );
}
