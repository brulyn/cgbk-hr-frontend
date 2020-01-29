import React, { Component } from "react";

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
} from "semantic-ui-react";
import { getDepartments } from "../service/mainService";
import { monthOptions, periodOptions, quarterOptions, style } from "./consts";
const axios = require("axios");

export default class MyFormComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentOptions: ["loading..."],
      department: "",
      userId: "",
      year: "2020",
      month: "",
      quarter: "",
      period: ""
    };

    this.handleDptChange = this.handleDptChange.bind(this);
    this.handleMthChange = this.handleMthChange.bind(this);
    this.handlePdChange = this.handlePdChange.bind(this);
    this.handleQtChange = this.handleQtChange.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleLatenessRpt = this.handleLatenessRpt.bind(this);
    this.handleOvertimeRpt = this.handleOvertimeRpt.bind(this);
  }

  componentDidMount() {
    axios.get("http://172.26.104.241:3670/departments").then(d => {
      let resData = [{ key: "9999", text: "All", value: "9999" }];
      resData.push(d.data.data);
      this.setState({
        departmentOptions: d.data.data
      });
    });
  }

  handlePdChange = (e, { value }) => {
    this.setState({
      period: value
    });
  };

  handleMthChange = (e, { value }) => {
    this.setState({
      month: value
    });
  };

  handleDptChange = (e, { value }) => {
    this.setState({
      department: value
    });
  };

  handleQtChange = (e, { value }) => {
    this.setState({
      quarter: value
    });
  };

  handleIdChange = (e, { value }) => {
    this.setState({
      userId: value
    });
  };

  handleYrChange = (e, { value }) => {
    this.setState({
      year: value
    });
  };

  handleLatenessRpt() {
    console.log(this.state);
    let q_string = "";
    if (this.state.userId !== "") {
      q_string = q_string + `?userid=${this.state.userId}`;
      if (this.state.department !== "") {
        q_string = q_string + `&unitid=${this.state.department}`;
      }
    } else if (this.state.department !== "") {
      q_string = q_string + `?unitid=${this.state.department}`;
    }
    window.open(`http://172.26.104.241:3670/lateness_rpt${q_string}`, "_blank");
  }

  handleOvertimeRpt() {
    console.log(this.state);
    let q_string = "";
    if (this.state.userId !== "") {
      q_string = q_string + `?userid=${this.state.userId}`;
      if (this.state.department !== "") {
        q_string = q_string + `&unitid=${this.state.department}`;
      }
    } else if (this.state.department !== "") {
      q_string = q_string + `?unitid=${this.state.department}`;
    }
    window.open(`http://172.26.104.241:3670/overtime_rpt${q_string}`, "_blank");
  }

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Header as="h3" content="Form" style={style.h3} />
        {/* <Form onSubmit={this.handleLatenessRpt}> */}
        <Form>
          <Grid columns="three" widths="equal" divided>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="userId"
                label="User ID"
                placeholder="xxxx"
                onChange={this.handleIdChange}
                value={this.state.userId}
              />
              <Form.Field
                control={Select}
                options={this.state.departmentOptions}
                onChange={this.handleDptChange}
                name="department"
                label={{
                  children: "Department",
                  htmlFor: "form-select-control-department"
                }}
                placeholder="Department"
                search
                searchInput={{ id: "form-select-control-department" }}
              />
              <Form.Field
                control={Select}
                options={periodOptions}
                onChange={this.handlePdChange}
                name="period"
                label={{
                  children: "Period",
                  htmlFor: "form-select-control-period"
                }}
                placeholder="Period"
                search
                searchInput={{ id: "form-select-control-period" }}
              />
            </Form.Group>
          </Grid>
          <Grid columns="three" divided>
            <Form.Group>
              {this.state.period === "2" && (
                <Form.Field
                  control={Select}
                  options={monthOptions}
                  onChange={this.handleMthChange}
                  name="month"
                  label={{
                    children: "Month",
                    htmlFor: "form-select-control-month"
                  }}
                  placeholder="Month"
                  search
                  // searchInput={{ id: 'form-select-control-month' }}
                />
              )}
              {this.state.period === "3" && (
                <Form.Field
                  control={Select}
                  options={quarterOptions}
                  onChange={this.handleQtChange}
                  name="quarter"
                  label={{
                    children: "Quarter",
                    htmlFor: "form-select-control-quater"
                  }}
                  placeholder="Quarter"
                  search
                  // searchInput={{ id: 'form-select-control-month' }}
                />
              )}

              {this.state.period !== "" && this.state.period !== "1" && (
                <Form.Field
                  id="form-input-control-year"
                  control={Input}
                  label="Year"
                  name="year"
                  placeholder="19xx or 20xx"
                  value={this.state.year}
                  onChange={this.handleYrChange}
                  // error={{
                  //   content: 'Please enter a valid email address',
                  //   pointing: 'below',
                  // }}
                />
              )}
            </Form.Group>
          </Grid>

          <Grid>
            <Form.Button
              id="form-button-control-public"
              control={Button}
              content="Lateness Rpt"
              onClick={this.handleLatenessRpt}
            />
            <Form.Button
              id="form-button-control-public"
              control={Button}
              content="Overtime Rpt"
              onClick={this.handleOvertimeRpt}
            />
          </Grid>
        </Form>
      </Container>
    );
  }
}
