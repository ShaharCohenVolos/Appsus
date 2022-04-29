export function KeepPreview({ type, title, content, onDelete, id }) {
  return (
    <article className="keep">
      <h1>{title}</h1>
      <p>
        {type === "note-img" ? (
          <img src={content} />
        ) : type === "note-todos" ? (
          <ul className="keep-todos">
            {content.split(",").map((todo, idx) => {
              return (
                <li key={idx}>{todo.charAt(0) === " " ? todo.substring(1) : todo}</li>
              );
            })}
          </ul>
        ) : (
          content
        )}
      </p>
      <button onClick={() => onDelete(id)} className="del-keep"></button>
    </article>
  );
}
