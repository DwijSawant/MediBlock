import React from 'react'

export default function Patient() {
  return (
      <div className='logincard'>
      <form class="form-control" action="">
          <p class="title">Create Your Profile</p>
          <div class="input-field">
              <input required="" class="input" type="text" />
              <label class="label" for="input">Enter your name</label>
          </div>
          <div class="input-field">
              <input required="" class="input" type="password" />
              <label class="label" for="input">Enter Hoapital's name</label>
          </div>
          <button class="submit-btn">Create</button>
      </form>
</div>
  )
}
