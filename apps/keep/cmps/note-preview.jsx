import { KeepTxt } from "./keep-txt.jsx";
import { KeepImg } from "./keep-img.jsx";
import { KeepTodo } from "./keep-todo.jsx";


export function KeepPreview({ keep }) {
  return (
    <article className="keep-preview" style={{backgroundColor: keep.style.bgc}}>
      {keep.type === "note-txt" ? (
        <KeepTxt keep={keep} />
      ) : keep.type === "note-img" ? (
        <KeepImg keep={keep} />
      ) : keep.type === "note-todos" ? (
        <KeepTodo keep={keep} />
      ) : (
        ""
      )}
    </article>
  );
}
