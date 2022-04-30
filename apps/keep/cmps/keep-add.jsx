import {utilService} from '../../../services/util.service.js'


export class KeepAdd extends React.Component {
  state = {
    keep: {
      id: '',
      type: "note-txt",
      title: "",
      content: "",
      style: {
        backgroundColor: '#fff'
      }
    },
    isExpended: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState((prevState) => ({
      keep: { ...prevState.keep, [name]: value },
    }));
  };

  handleExpended = () => {
    this.setState({ isExpended: true });
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    const { type, title, content, style } = this.state.keep;
    if(!title) {
      alert('enter title')
      return;
    }
    const keep = {
      id: utilService.makeId(),
      type,
      title,
      content,
      style,
    };

    this.props
      .onAdd(keep)
      .then(() => {
        this.setState({
          keep: {
            id: '',
            type: "keep-txt",
            title: "",
            content: "",
            style: {
              backgroundColor: '#fff'
            }
          },

          isExpended: false,
        });
      })
  };

  render() {
    const { isExpended } = this.state;
    const { title, content, type } = this.state.keep;
    return (
      <section className="keep-add">
        <form onSubmit={this.onSubmit} id="add-form">
          {isExpended && (
            <input
              value={title}
              type="text"
              placeholder="Title..."
              name="title"
              onChange={this.handleChange}
            />
          )}

          <div className="btn-cont on-add">
            <p>
              <textarea
                value={content}
                onClick={this.handleExpended}
                name="content"
                placeholder={
                  (type === 'note-img') ? "Enter URL..." : 
                  (type === 'note-todos') ? "Enter tasks seperated by commas" :
                  "Make a keep..."
                }
                onChange={this.handleChange}
                rows={isExpended ? 3 : 1}
              ></textarea>
            </p>
            <button
              name="type"
              value="note-img"
              onClick={this.handleChange}
              type="button"
              className="add-pic"
              title="add pic"
            >
            </button>
            <button 
            name="type"
            value="note-todos"
            onClick={this.handleChange}
            type="button"
            className="add-list"
            title="add-list">
            </button>
          </div>

          <button className="submit" 
          type="submit" 
          form="add-form"
          title="Submit">
            Submit
          </button>
        </form>
      </section>
    );
  }
}
