import { useState } from 'hono/jsx'

export default function Counter() {
  const [todo, setTodo] = useState('')
  return (
    <div>
      <p>{todo}</p>
      <input type="text" name="todo" />
      <button onClick={() => setTodo('test')}>Increment</button>
    </div>
  )
}
