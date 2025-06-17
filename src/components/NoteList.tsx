'use client'
import { useState } from 'react'
import NoteItem, { Note } from './NoteItem'

export default function NoteList() {
  const [notes, setNotes] = useState<Note[]>([])

  const addRoot = () => {
    setNotes([...notes, { id: Date.now().toString(), title: 'New Note', content: '', children: [] }])
  }

  return (
    <div>
      <button onClick={addRoot}>Add Root Note</button>
      {notes.map((n) => (
        <NoteItem key={n.id} note={n} onChange={setNotes} notes={notes} />
      ))}
    </div>
  )
}
