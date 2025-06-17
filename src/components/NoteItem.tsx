'use client'
import { useState } from 'react'

export interface Note {
  id: string
  title: string
  content: string
  children: Note[]
}

type Props = {
  note: Note
  notes?: Note[]
  onChange?: (notes: Note[]) => void
}

export default function NoteItem({ note, notes = [], onChange }: Props) {
  const [open, setOpen] = useState(true)

  const addChild = () => {
    note.children.push({ id: Date.now().toString(), title: 'Child', content: '', children: [] })
    onChange && onChange([...notes])
  }

  const deleteSelf = () => {
    const remove = (arr: Note[]): boolean => {
      const idx = arr.findIndex((n) => n.id === note.id)
      if (idx !== -1) {
        arr.splice(idx, 1)
        return true
      }
      return arr.some((n) => remove(n.children))
    }
    remove(notes)
    onChange && onChange([...notes])
  }

  return (
    <div style={{ marginLeft: '1rem', borderLeft: '1px solid #ccc', paddingLeft: '1rem' }}>
      <div>
        <input
          value={note.title}
          onChange={(e) => {
            note.title = e.target.value
            onChange && onChange([...notes])
          }}
        />
        <button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'}</button>
        <button onClick={addChild}>Add Child</button>
        <button onClick={deleteSelf}>Delete</button>
      </div>
      {open && (
        <div>
          <textarea
            value={note.content}
            onChange={(e) => {
              note.content = e.target.value
              onChange && onChange([...notes])
            }}
          />
          {note.children.map((child) => (
            <NoteItem key={child.id} note={child} notes={notes} onChange={onChange} />
          ))}
        </div>
      )}
    </div>
  )
}
