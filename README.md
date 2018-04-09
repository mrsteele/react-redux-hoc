# react-redux-hoc

> WIP!!!

A basic HOC to plug react into your application

### About

This plugin was made to create a basic react-redux container with save-able features.

Lets say you have an `Email` component like so:

```js
// Email.js
import React from 'react'
import { SubjectLine, MessageBody, Button } from 'components'
import { submitEmail, saveEmail } from 'services'

class Email extends React.Component {
  onChange = (e) => this.setState({ [e.target.name]: e.target.value})
  onSubmit = (e) => {
    e.preventDefault()

    const { subject, body } = this.state
    submitEmail(subject, body).then(result => {
      console.log(result)
      // { subject: 'here', body: 'here' }

      this.setState(result)
    }).catch(err => {
      console.log('some error occurred', err)
    })
  }
  render () {
    const { subject, body } = this.state
    return (
      <Form onSubmit={this.submit}>
        <SubjectLine value={subject} name='subject' onChange={this.onChange} />
        <MessageBody value={body} name='body' onChange={this.onChange} />
        <Button onClick={this.save}>Save Draft</Button>
        <Button onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}
```
