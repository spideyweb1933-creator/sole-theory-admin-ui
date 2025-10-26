import React, { useState } from 'react';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import { isAuthed, logout } from './api';

export default function App() {
  const [authed, setAuthed] = useState(isAuthed());

  if (!authed) return <Login onSuccess={() => setAuthed(true)} />;

  return (
    <div>
      <div className="p-3 flex items-center justify-between bg-neutral-900/60">
        <a
          href="mailto:spideyweb1933@gmail.com"
          className="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition"
          title="Email support"
        >
          Contact&nbsp;Us
        </a>
        <button
          onClick={() => { logout(); setAuthed(false); }}
          className="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition"
        >
          Logout
        </button>
      </div>
      <AdminPanel />
    </div>
  );
}
