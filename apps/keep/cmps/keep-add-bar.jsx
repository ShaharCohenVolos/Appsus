

export class KeepAddBar extends React.Component {
  state = {
    keepType: null,
    txt: '',
  };

//   handleChange = ({ target }) => {
//       const {value} = target
//       const field = target.name
//       this.setState({[field]: value})
//   };

  render() {
    return (
      <section>
        <textarea name="info" rows="20" cols="30" onChange={this.props.handleChange}></textarea>
        <div className="edit-container">
          <select onChange={this.props.handleChange} name="keepType">
            <option value="note-txt">Note</option>
            <option value="note-img">Picture</option>
            <option value="note-todos">List</option>
          </select>
         
        </div>
      </section>
    );
  }
}
