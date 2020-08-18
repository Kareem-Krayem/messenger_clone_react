import React, { useState, useEffect } from 'react';
import './App.css';

import db from './firebase';
import firebase from 'firebase';

import {
  Input,
  FormControl,
  IconButton,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { Gradient } from 'react-gradient';
import FlipMove from 'react-flip-move';

import Header from './components/Header';
import Message from './components/Message';

function App() {

  const gradients =
    [
      ['#3F51B5', '#FF4B2B'],
      ['#e53935', '#3F51B5'],
    ];

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name.'));
  }, []);

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessages([...messages, { username: username, message: input }]);
    setInput('');
  };
  return (
    <div className="container">
      <div className="App">

        <Header app_name="Messenger" />

        <Gradient
          gradients={gradients}
          property="text"
          element="h4"
          angle="30deg"
          className="welcome_message"
        >Welcome {username}</Gradient>

        <form className="app__form">
          <FormControl className="app__formControl">
            <Input
              className="app__input"
              placeholder="Enter a message.."
              color="primary"
              value={input} onChange={event => setInput(event.target.value)} />
            <IconButton
              disabled={!input}
              variant="contained"
              type='submit'
              color="primary"
              className="app__iconButton"
              onClick={sendMessage}>
              <Send />
            </IconButton>
          </FormControl>
        </form>

        <FlipMove>
          {
            messages.map(({ message, id }) => (
              <Message key={id} username={username} message={message} />
            ))
          }
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
