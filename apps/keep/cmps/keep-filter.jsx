export class KeepFilter extends React.Component {
  state = {
    filterBy: null,
  };

  onSetFilterBy = ({ target }) => {
    const val = target.value;
    this.setState({filterBy: target.value}, 
      () => {this.props.onFilter(this.state.filterBy)})


  };

  render() {
    return (
      <aside className="filter-bar">

        <ul>
          <li>
            <button value="" onClick={this.onSetFilterBy}>
              All Keeps
            </button>
          </li>
          <li>
            <button value="note-txt" onClick={this.onSetFilterBy}>
              Notes
            </button>
          </li>
          <li>
            <button value="note-img" onClick={this.onSetFilterBy}>
              Pictures
            </button>
          </li>
          <li>
            <button value="note-todos" onClick={this.onSetFilterBy}>
              Todo-Lists
            </button>
          </li>
        </ul>
      </aside>
    );
  }
}
