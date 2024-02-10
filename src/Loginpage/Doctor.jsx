import React from 'react';
import './Doctor.css'

export default function Patient() {
    return (
        <div className='logincard'>
            <form class="form-control" action="">
                <p class="title">Create Your Profile</p>
                <div class="input-field">
                    <input required="" class="input" type="text" />
                    <label class="label" for="input">Enter Name</label>
                </div>
                <div class="input-field">
                    <input required="" class="input" type="password" />
                    <label class="label" for="input">Enter Hospital's Name</label>
                </div>
                <button class="submit-btn">Create</button>
            </form>
        </div>
    )
}
