import React from 'react'
import { Form } from 'react-advanced-form'
import Button from '@examples/shared/Button'
import Datepicker from './Datepicker'

export default class ReactDatepickerExample extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>react-datepicker</h1>

        <Form onSubmitStart={this.props.onSubmitStart}>
          <Datepicker name="birthDate" />

          <Button>Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}
