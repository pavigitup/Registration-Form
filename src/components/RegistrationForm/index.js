import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErrMsg: '',
    lastNameErrMsg: '',
    submitted: false,
  }

  formSubmits = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    // Reset error messages
    this.setState({
      firstNameErrMsg: firstName.trim() === '' ? '*Required' : '',
      lastNameErrMsg: lastName.trim() === '' ? '*Required' : '',
    })

    // If both fields are filled, set submitted to true
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      this.setState({submitted: true})
    }
  }

  anotherResponse = () => {
    // Reset form state for another response
    this.setState({
      firstName: '',
      lastName: '',
      firstNameErrMsg: '',
      lastNameErrMsg: '',
      submitted: false,
    })
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    // Add blur class if the field is empty
    if (firstName.trim() === '') {
      this.setState({firstNameErrMsg: '*Required'})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    // Add blur class if the field is empty
    if (lastName.trim() === '') {
      this.setState({lastNameErrMsg: '*Required'})
    }
  }

  onFocusFirstName = () => {
    // Reset error message when field is focused
    this.setState({firstNameErrMsg: ''})
  }

  onFocusLastName = () => {
    // Reset error message when field is focused
    this.setState({lastNameErrMsg: ''})
  }

  render() {
    const {
      firstName,
      lastName,
      firstNameErrMsg,
      lastNameErrMsg,
      submitted,
    } = this.state

    return (
      <div className="reg-con">
        <h1>Registration</h1>
        {submitted ? (
          <div className="main-con">
            <div className="another-page">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="img-icon"
              />
              <p>Submitted Successfully</p>
              <button type="button" onClick={this.anotherResponse}>
                Submit Another Response
              </button>
            </div>
          </div>
        ) : (
          <form className="main-con" onSubmit={this.formSubmits}>
            <div className="each-con">
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={this.onChangeFirstName}
                onBlur={this.onBlurFirstName}
                onFocus={this.onFocusFirstName}
                className={firstNameErrMsg ? 'add-blur' : ''}
              />
              <p>{firstNameErrMsg}</p>
            </div>
            <div className="each-con">
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={this.onChangeLastName}
                onBlur={this.onBlurLastName}
                onFocus={this.onFocusLastName}
                className={lastNameErrMsg ? 'add-blur' : ''}
              />
              <p>{lastNameErrMsg}</p>
            </div>
            <div className="btn-con">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
