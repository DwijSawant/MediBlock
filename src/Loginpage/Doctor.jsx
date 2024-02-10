import React from 'react';
import './Doctor.css';
import upload from './upload.jpeg'

export default function Doctor() {
    return (
        <div className='logincard'>
            <form class="form-control" action="">
                <p class="title">Create your profile</p>
                <div className='profilepic'>
                <img src={upload} alt='upload' id='pic'/>
                <label for='file' id='labelforpic'>Update Image</label>
                <input type='file' accept='image/jpeg,image.png,image.jpg'/>
                </div>
                    <div class="input-field">
                    <input required="" class="input" type="text" />
                    <label class="label" for="input">Enter Name</label>
                </div>
                <div class="input-field">
                    <input required="" class="input" type="password" />
                    <label class="label" for="input">Enter your age</label>
                </div>
                <div class="input-field">
                    <input required="" class="input" type="password" />
                    <label class="label" for="input">Enter your Blood Group</label>
                </div>
                <button class="submit-btn">Create</button>
            </form>
        </div>
    )
}
