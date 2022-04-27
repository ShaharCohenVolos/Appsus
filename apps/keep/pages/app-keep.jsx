import { KeepList } from "../cmps/note-list.jsx"
import { keepService } from "../services/note.service.js"
import {KeepFilter} from "../cmps/keep-filter.jsx"

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

  onFilter = (filterBy) => {
    this.setState({filterBy}, () => {
      this.loadKeeps()
    })
  }



  render() {
    const { keeps } = this.state
    return (
      <section className="keep-app">
        <KeepFilter onFilter={this.onFilter}/>
        <KeepList keeps={keeps} />
      </section>
    )
  }
}
