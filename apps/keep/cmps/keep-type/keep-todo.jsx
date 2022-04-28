

export function KeepTodo({keep}) {

    const todos = keep.info.todos
    return <ul className="keep-todo">
        {todos.map(todo => {
            return <li key={todo.txt}>{todo.txt}</li>
        })}
    </ul>
}