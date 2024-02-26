/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from 'react-bootstrap';

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        title: '',
        body: ''
      },
      titleLimit: 50
    }
  }

  handleChange = (e) => {
    const form = {...this.state.form}
    if (e.target.name === 'title' && e.target.value.length > 50) {
      return false
    }
    form[e.target.name] = e.target.value
    this.setState({
      form,
      titleLimit: 50 - form.title.length
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      form: {
        title: '',
        body: ''
      },
      titleLimit: 50
    })
    this.props.tambahNote(this.state.form)
  }
  render() {
    return (
      <div className='note-input-wrapper'>
        <div className='note-input'>
          <h2>Buat catatan</h2>
          <form onSubmit={this.handleSubmit}>
            <p className="note-input__title__char-limit">
              Sisa karakter: { this.state.titleLimit }
            </p>
            <input
              className="note-input__title"
              type="text"
              placeholder="Ini adalah judul ..."
              required=""
              value={this.state.form.title}
              name="title"
              onChange={this.handleChange}
            />
            <textarea
              className="note-input__body"
              type="text"
              name="body"
              placeholder="Tuliskan catatanmu di sini ..."
              required=""
              value={this.state.form.body}
              onChange={this.handleChange}
            >
            </textarea>
            <Button
              type="submit"
            >
              Buat
            </Button>
        
          </form>
        </div>
      </div>
    )
  }
}
export default NoteForm