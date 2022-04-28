import { KeepList } from "../cmps/note-list.jsx";
import { keepService } from "../services/note.service.js";
import { KeepNavList } from "../cmps/keep-nav.jsx";
import { KeepAdd } from "../cmps/keep-add.jsx";
import { eventBusService } from "../../../services/event-bus-service.js";

const { NavLink, Route } = ReactRouterDOM;

export class AppKeep extends React.Component {
  state = {
    keeps: [],
    filterBy: null,
  };

  componentDidMount() {
    this.getFilterFromParams().then(() => {
      this.loadKeeps();
    })
    eventBusService.on('filter-chng', (filterBy) => {
      this.loadKeeps(filterBy)
    })
  }

  getFilterFromParams = () => {
    const filterBy = this.props.match.params.filter;
    this.setState({ filterBy });
    return Promise.resolve()
  };

  loadKeeps = (filterBy = this.state.filterBy) => {
    keepService.query(filterBy).then((keeps) => {
      this.setState({ keeps });
    });
  };



  render() {
    const { keeps } = this.state;
    return (
      <section className="keep-app main-layout">

        <KeepAdd />
        <KeepList
          filter={this.state.filterBy}
          keeps={keeps}
          loadKeeps={this.loadKeeps}
        />
      </section>
    );
  }
}
