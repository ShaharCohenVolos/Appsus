import { KeepEditBgc } from "./edit-keep-bgc.jsx";
import { KeepToMail } from "./keep-to-mail.jsx";
import { eventBusService } from "../../../services/event-bus-service.js"
import { keepService } from "../services/note.service.js";
import { KeepExpend } from "./keep-expend.jsx"

export class KeepPreview extends React.Component {
  state = {
    keep: null,
  };

  componentDidMount() {
    this.loadKeep();

    eventBusService.on("keep-added", (keep) => {
      this.loadKeep(keep)
    })
  }

  loadKeep = (keep = this.props.keep) => {
    this.setState({ keep });
  };

  onColorChange = ({ target }) => {
    const { value, name} = target;
    const { id } = this.state.keep;
    this.props.onColor(value, id);
  };

  render() {
    const { keep } = this.props;

    return (
      <article className="keep" style={keep.style}>
        <h1>{keep.title}</h1>
        {/* <p> */}
          {keep.type === "note-img" ? (
            <img src={keep.content} />
          ) : keep.type === "note-vid" ? (
            <iframe src={keepService.fixYoutubeUrl(keep.content)} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
          ) : keep.type === "note-todos" ? (
            <ul className="keep-todos">
              {keep.content.split(",").map((todo, idx) => {
                return (
                  <li key={idx}>
                    {todo.charAt(0) === " " ? todo.substring(1) : todo}
                  </li>
                );
              })}
            </ul>
          ) : (
           <p>{keep.content}</p>
          )}
        {/* </p> */}
        <div className="edit-container">
          <button
            onClick={() => this.props.onDelete(keep.id)}
            className="del-keep"
            title="Delete Keep"
          ></button>
          <KeepToMail keep={keep} />
          <KeepEditBgc keep={keep} onColor={this.onColorChange} />
        </div>
        <KeepExpend/>
      </article>
    );
  }
}
