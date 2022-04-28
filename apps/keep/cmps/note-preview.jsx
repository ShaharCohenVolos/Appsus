import { KeepTxt } from "./keep-type/keep-txt.jsx";
import { KeepImg } from "./keep-type/keep-img.jsx";
import { KeepTodo } from "./keep-type/keep-todo.jsx";
import {keepService} from "../services/note.service.js";
import {eventBusService} from "../../../services/event-bus-service.js";

const { NavLink, Link } = ReactRouterDOM;

export class KeepPreview extends React.Component {

  sate= {
    keep: null,
  }

  onRemoveKeep = () => {
    keepService.remove(this.props.keep.id)
      .then(() => {
        this.props.loadKeeps()
      })
  }

  



  render() {
    const {keep} =this.props

    return (
      <article
        className="keep-preview"
        style={{ backgroundColor: keep.style.bgc }}
      >
        <NavLink to={`/keep/${keep.id}`} className="keep-body">
          {keep.type === "note-txt" ? (
            <KeepTxt keep={keep} />
          ) : keep.type === "note-img" ? (
            <KeepImg keep={keep} />
          ) : keep.type === "note-todos" ? (
            <KeepTodo keep={keep} />
          ) : (
            ""
          )}
        </NavLink>

        <div className="btns">
          <button className="delete-btn" onClick={this.onRemoveKeep}></button>
          <Link to={`keep/edit/${keep.id}`}>
            <button className="edit-btn">Edit</button>
          </Link>
        </div>
      </article>
    );
  }
}
