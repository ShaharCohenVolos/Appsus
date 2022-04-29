import { keepService } from "../services/note.service.js";
import { KeepAdd } from "../cmps/keep-add.jsx";
import { KeepPreview } from "../cmps/keep-preview.jsx";
import { eventBusService } from "../../../services/event-bus-service.js";

export class AppKeep extends React.Component {
  state = {
    keeps: [],
  };

  componentDidMount() {
    this.loadKeeps();
    eventBusService.on("filter-chng", (filterBy) => {
      this.loadKeeps(filterBy);
    });
  }

  onSetFilterBy = () => {
    const filterBy = this.props.match.params.filter;

    return Promise.resolve(filterBy);
  };

  loadKeeps = (filterBy = null) => {
    keepService.query(filterBy).then((keeps) => {
      this.setState({ keeps });
    });
  };

  onAddKeep = (newKeep) => {
    keepService.saveKeep(newKeep).then(() => this.loadKeeps());
    return Promise.resolve();
  };

  onDeleteKeeps = (id) => {
    console.log(id);
    console.log(this.state.keeps);
    keepService.remove(id).then(() => this.loadKeeps());
  };

  render() {
    const { keeps } = this.state;
    if (!keeps) return <img src="../../../assets/img/loader.gif" />;
    return (
      <section className="keep-app main-layout">
        <KeepAdd onAdd={this.onAddKeep} />
        <section className="keep-container">
          {keeps.map((keep, idx) => (
            <KeepPreview
              key={idx}
              id={keep.id}
              title={keep.title}
              content={keep.content}
              type={keep.type}
              onDelete={this.onDeleteKeeps}
            />
          ))}
        </section>
      </section>
    );
  }
}
