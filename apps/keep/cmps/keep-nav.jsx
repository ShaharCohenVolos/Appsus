const { NavLink } = ReactRouterDOM;

export class KeepNav extends React.Component {
  state = {
    filterBy: null,
    activeBtn: {
      btn1: 'nav-btn',
      btn2: 'nav-btn',
      btn3: 'nav-btn',
      btn4: 'nav-btn',
    }
  };

  onSetFilterBy = ({ target }) => {
    const val = target.value;
    this.setState({ filterBy: target.value }, () => {
      this.props.onFilter(this.state.filterBy);
    });
  };

  render() {
    const { activeBtn } = this.state;
    return (
      <aside className="keep-nav">
        <ul>
          <li>
              <button value=""  onClick={this.onSetFilterBy}>
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
