import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });

    const data = await response.json();
    setMessage(data.message);
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '420px', margin: '4rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '12px' }}>
      <h1>DnD Spell Tracker</h1>
      <p>Enter a character name to test the starter flow.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Character name</label>
        <input
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          style={{ display: 'block', width: '100%', padding: '0.7rem', margin: '0.5rem 0 1rem' }}
        />
        <button type="submit" style={{ padding: '0.7rem 1rem' }}>Submit</button>
      </form>
      {message ? <p style={{ marginTop: '1rem' }}>{message}</p> : null}
    </div>
  );
}

export default App;
