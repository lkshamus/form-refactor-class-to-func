import React, { Component } from "react"
import { navigate } from "gatsby"
import { TextInput, Select, Button } from "terra-one"

import "./index.scss"
import { dropdowns } from "../utils/mockData"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      meal: "",
      food: "",
      name: "",
      status: true,
    }
  }

  handleDropdownSelect = (selection, name) => {
    this.setState({ [name]: selection })
  }

  inputChange = e => {
    this.setState({ name: e.target.value })
  }

  generateDropdowns = () => {
    return dropdowns.map((dropdown, index) => {
      return (
        <div key={`${dropdown.name}-${index}-dropdown`}>
          <Select
            name={dropdown?.name}
            options={dropdown?.options}
            handleSelection={this?.handleDropdownSelect}
            selection={
              this.state[dropdown?.name] ? this.state[dropdown?.name] : ""
            }
            defaultText={dropdown?.defaultText}
            warning={
              this.state.status === false && !this.state[dropdown?.name]
                ? true
                : false
            }
          />
        </div>
      )
    })
  }

  submitForm = e => {
    e.preventDefault()
    if (!this.state.meal || !this.state.food || !this.state.name) {
      this.setState({ status: false })
      return
    } else {
      this.setState({ statue: true })
      navigate("/page-2/")
    }
  }

  render() {
    return (
      <form className="form">
        <div className="form__container">
          <TextInput
            name="name"
            value={this.state.name}
            inputChange={e => this.inputChange(e)}
            label={"Name"}
            required
            status={
              this.state.status === false && !this.state.name
                ? { className: "error" }
                : {}
            }
          />
          {this.generateDropdowns()}
        </div>
        <Button
          className="primary--1"
          text="Submit"
          onClick={e => this.submitForm(e)}
        />
      </form>
    )
  }
}

export default Form
