import React from 'react'
import {
  Container,
  Grid,
  Header,
  Segment,
  Form,
  Input,
  Button,
  Select,
  TextArea
} from 'semantic-ui-react'
import {getDepartments} from '../service/mainService'



const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]
const departmentOptions = [
  { key: '1', text: 'IT', value: '1' },
  { key: '2', text: 'HR', value: '2' },
  { key: '3', text: 'Legal', value: '3' },
]
const periodOptions = [
  { key: '1', text: 'Current', value: '1' },
  { key: '2', text: 'Monthly', value: '2' },
  { key: '3', text: 'Quarterly', value: '3' },
  { key: '4', text: 'Yearly', value: '4' },
]
const monthOptions = [
  { key: '1', text: 'Jan', value: '1' },
  { key: '2', text: 'Feb', value: '2' },
  { key: '3', text: 'Mar', value: '3' },
  { key: '4', text: 'Apr', value: '4' },
  { key: '5', text: 'May', value: '5' },
  { key: '6', text: 'Jun', value: '6' },
  { key: '7', text: 'Jul', value: '7' },
  { key: '8', text: 'Aug', value: '8' },
  { key: '9', text: 'Sep', value: '9' },
  { key: '10', text: 'Oct', value: '10' },
  { key: '11', text: 'Nov', value: '11' },
  { key: '12', text: 'Dec', value: '12' },
]
const quarterOptions = [
  { key: '1', text: 'Quarter 1', value: '1' },
  { key: '2', text: 'Quarter 2', value: '2' },
  { key: '3', text: 'Quarter 3', value: '3' },
  { key: '4', text: 'Quarter 4', value: '4' }
]
const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}


function getDepartments2(){
  getDepartments.then((d)=>{
    console.log(d)
  })
}

const MyForm = () => ( 
  <Container>
    <Header
      as='h3'
      content='Form'
      style={style.h3}
    />
    <Form>
      <Grid columns="three" divided>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='User ID'
            placeholder='xxxx'
          />
          <Form.Field
            control={Select}
            options={departmentOptions}
            label={{ children: 'Department', htmlFor: 'form-select-control-department' }}
            placeholder='Department'
            search
            searchInput={{ id: 'form-select-control-department' }}
          />
          <Form.Field
            control={Select}
            options={periodOptions}
            label={{ children: 'Period', htmlFor: 'form-select-control-period' }}
            placeholder='Period'
            search
            searchInput={{ id: 'form-select-control-period' }}
          />
        </Form.Group>
      </Grid>
      <Grid columns="three" divided>
        <Form.Group>
          <Form.Field
            control={Select}
            options={monthOptions}
            label={{ children: 'Month', htmlFor: 'form-select-control-month' }}
            placeholder='Month'
            search
          // searchInput={{ id: 'form-select-control-month' }}
          />
          <Form.Field
            control={Select}
            options={quarterOptions}
            label={{ children: 'Quarter', htmlFor: 'form-select-control-quater' }}
            placeholder='Quarter'
            search
          // searchInput={{ id: 'form-select-control-month' }}
          />

          <Form.Field
            id='form-input-control-year'
            control={Input}
            label='Year'
            placeholder='1928 or 2001'
          // error={{
          //   content: 'Please enter a valid email address',
          //   pointing: 'below',
          // }}
          />

        </Form.Group>
      </Grid>

      <Grid>
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Confirm'
          

        />
      </Grid>
    </Form>
  </Container>
)

export default MyForm