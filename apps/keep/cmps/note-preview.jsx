import { KeepTxt } from "./keep-type/keep-txt.jsx";
import { KeepImg } from "./keep-type/keep-img.jsx";
import { KeepTodo } from "./keep-type/keep-todo.jsx";
import {keepService} from "../services/note.service.js";
import {eventBusService} from "../../../services/event-bus-service.js";

const { Link } = ReactRouterDOM;

export class KeepPreview extends React.Component {

  sate= {
    keep: null
  }

  // loadKeep = () => {
  //   const {keep} = this.props
  //   this.setState({keep})
  // }

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
        <Link to={`/keep/${keep.id}`}>
          {keep.type === "note-txt" ? (
            <KeepTxt keep={keep} />
          ) : keep.type === "note-img" ? (
            <KeepImg keep={keep} />
          ) : keep.type === "note-todos" ? (
            <KeepTodo keep={keep} />
          ) : (
            ""
          )}
        </Link>

        <div>
          <button onClick={this.onRemoveKeep}>Remove</button>
          <Link to={`keep/edit/${keep.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      </article>
    );
  }
}
