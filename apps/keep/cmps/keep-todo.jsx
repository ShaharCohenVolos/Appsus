

export function KeepTodo({keep}) {
    console.log(keep.info.todo)

    const todos = keep.info.todos
    return <ul className="keep-todo">
        {todos.map(todo => {
            return <li>{todo.txt}</li>
        })}
    </ul>
}