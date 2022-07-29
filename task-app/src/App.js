import React, { Component } from 'react';
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        input: '',
        id: Date.now(),
        num: 0
      }, 
      taskArr: [],
      text: 'Edit'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange(event) {
    this.setState({
      task: {
        input: event.target.value,
        id: this.state.task.id,
        num: this.state.taskArr.length + 1
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      taskArr: [...this.state.taskArr, this.state.task],
      task: {
        input: '',
        id: Date.now()
      }
    });
  }

  deleteTask(event) {
    const targetID = parseInt(event.target.parentElement.getAttribute('data-id'));
    this.setState({taskArr: this.state.taskArr.filter(item => item.id !== targetID)},
    () => this.updateNum());
  }

  updateNum() {
    this.setState({taskArr: this.state.taskArr.map((item, i) => {
      return {
        input: item.input,
        id: item.id,
        num: i + 1
      }
    })});
  }

  render() {
    const { taskArr, task } = this.state;
    return (
      <div>
        <Overview tasks={taskArr} deleteClicked={this.deleteTask} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="input">
            Enter Task Name:
            <input type="text" value={task.input} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" id="input"/>
        </form>
      </div>
    );
  }
}

export default App;
