import { eventBusService } from "../../../services/event-bus-service";

const { NavLink } = ReactRouterDOM;

export class KeepNavList extends React.Component {
  state = {
    filterBy: null,

  };

  onSetFilterBy = (filt) => {
    // const filterBy = this.props.match.params.filter
    // this.setState({filterBy})
    eventBusService.emit('filter-chng', filt)
  };

  render() {
    const { activeBtn } = this.state;
    return (
      <aside className="keep-nav">
        <div className="space-container"></div>
        {/* <button value="" onClick={this.onSetFilterBy}>
          All Keeps
        </button>
        <button value="note-txt" onClick={this.onSetFilterBy}>
          Notes
        </button>
        <button value="note-img" onClick={this.onSetFilterBy}>
          Pictures
        </button>
        <button value="note-todos" onClick={this.onSetFilterBy}>
          Todo-Lists
        </button> */}
        <nav className="folder-nav">
          <NavLink to="/keep/all" onClick={() => this.onSetFilterBy('all')}>
            All Keeps</NavLink>
          <NavLink to="/keep/note-txt" onClick={() => this.onSetFilterBy('note-txt')}>
            Note</NavLink>
          <NavLink to="/keep/note-img" onClick={() => this.onSetFilterBy('note-img')}>
            Pictures</NavLink>
          <NavLink to="/keep/note-todos" onClick={() => this.onSetFilterBy('note-todos')}>
            Todo-Lists</NavLink>
        </nav>
      </aside>
    );
  }
}
