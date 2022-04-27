export class EmailFilter extends React.Component {

  state = {
    filter: {
      search: '',
      option: 'all',
    }
  }


  handleChange = ({ target }) => {
    this.setState(({ filter }) => ({
      filter: { ...filter, [target.name]: target.value }
    }))
    // const urlSrcPrm = new URLSearchParams(this.state.filter)
    // const searchStr = urlSrcPrm.toString()
    // this.props.history.push(`/email?${searchStr}`)
  }

  // onFilter = (filter) => {
  //   this.props.onSetFilter(filter)
  // }

  render() {
    return <section className="email-filter">
      <input name="search" type="Search" placeholder="Search" onChange={this.handleChange} />
      <select name="option" onChange={this.handleChange}>
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
    </section>
  }
}