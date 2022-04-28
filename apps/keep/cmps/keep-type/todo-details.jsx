

export function TodoDetails({keep}){

    
    return <section className="keep-prev-dets" style={{backgroundColor: keep.style.bgc}}>
    <h2>{keep.subject ? keep.subject : 'Subject'}</h2>
    <div>{keep.info.label}
    <ul>
        {keep.info.todos.map((todo,idx) => {
            return  <li key={idx} className={todo.doneAt ? 'todo done' : 'todo'}>
                {todo.txt}
            </li>
        })}
    </ul>
        </div>
</section>
}