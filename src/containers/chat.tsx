import React from 'react'

import '../styles/chat.scss'
import Message from '../components/message'

function Chat() {
  return (
  <div className="main-general__container">
    <div className="main-content__container">
      <div className="search__container">
        <select name="type_subject" id="type" className='subject_select'>
          <option value="" disabled selected>Subject</option>
          <option value="school">School</option>
          <option value="other">Other</option>
          <option value="life">Life</option>
        </select>
        <input type="text" name="message" id="message_post" className='message_input' />
        <input type="submit" value="Send" className='submit__button' />
      </div>
      <div className="messages__container">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  </div>
  )
}

export default Chat