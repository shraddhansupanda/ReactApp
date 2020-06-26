import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Booking  from "./booking"

class Authentication extends Component {
  state = { name: '', email: '', submittedName: '', submittedEmail: '' ,hide:true}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email})
    console.log(this.state)
  }
  submit=()=>{
    if (this.state.name!=="" && this.state.email!==""){
    this.setState({hide:false})
    }
  }

  render() {
    const { name, email, submittedName, submittedEmail } = this.state
    
    return (
      <div>
        {this.state.hide?
                <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Input
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                  />
                  <Form.Button onClick={this.submit}  content='Submit' />
                </Form.Group>
              </Form>
              :<Booking name = {this.state}/>
        }
        {/* <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre> */}
      </div>
    )
  }
}

export default Authentication