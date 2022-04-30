import { KeepEditBgc } from "./edit-keep-bgc.jsx"
import { KeepToMail } from "./keep-to-mail.jsx"

export class KeepPreview extends React.Component {
  state = {
    keep: null,
  };

  componentDidMount() {
    this.loadKeep()
  }



  loadKeep = () => {
    const { keep } = this.props
    this.setState({ keep })
  };

  onColorChange = ({ target }) => {
    const { value, name } = target
    const { id } = this.state.keep
    this.props.onColor(value, id)
  };

  render() {
    const { keep } = this.props

    return (
      <article className="keep" style={keep.style}>
        <h1>{keep.title}</h1>
        <p>
          {keep.type === "note-img" ? (
            <img src={keep.content} />
          ) : keep.type === "note-todos" ? (
            <ul className="keep-todos">
              {keep.content.split(",").map((todo, idx) => {
                return (
                  <li key={idx}>
                    {todo.charAt(0) === " " ? todo.substring(1) : todo}
                  </li>
                )
              })}
            </ul>
          ) : (
            keep.content
          )}
        </p>
        <div className="edit-container">
          <button
            onClick={() => this.props.onDelete(keep.id)}
            className="del-keep"
            title="Delete Keep"
          ></button>
          <KeepToMail keep={keep} />
          <KeepEditBgc keep={keep}
            onColor={this.onColorChange}
          />
        </div>
      </article>
    )
  }
}
