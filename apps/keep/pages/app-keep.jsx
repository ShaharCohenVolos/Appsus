import { KeepList } from "../cmps/note-list.jsx"
import { keepService } from "../services/note.service.js"

export class AppKeep extends React.Component {
  state = {
    keeps: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadKeeps()
  }

  loadKeeps = () => {
    keepService.query(this.state.filterBy).then((keeps) => {
      this.setState({ keeps })
    })
  };

  render() {
    const { keeps } = this.state
    return (
      <section>
        <KeepList keeps={keeps} />
      </section>
    )
  }
}
