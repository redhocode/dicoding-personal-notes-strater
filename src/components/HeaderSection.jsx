/* eslint-disable react/prop-types */
import React from 'react'



class HeaderSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      showSearchForm: true
    }
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
    this.props.handleSearch(e.target.value)
  }
  toggleSearchForm = () => {
    this.setState({
      ...this.state,
      showSearchForm: !this.state.showSearchForm
    })
  }
  render() {
    return (
      <div className='note-app__header-wrapper'>
        <div className='note-app__header'>
          <h1>Notes</h1>
          {
            (this.state.showSearchForm) ? (
              <div className="note-search">
                <input
                  type="text"
                  placeholder="Cari catatan ..."
                  value={this.state.search}
                  onChange={this.handleChange}
             
                />
               
              </div>
            ) : ''
          }
          
      
        </div>
      </div>
    )
  }
}

export default HeaderSection