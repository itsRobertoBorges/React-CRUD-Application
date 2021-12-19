import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    
    this.state ={
      title :  "A Simple ReactJS CRUD Application",
      employeeData : [],
      act : 0,
      index : ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let lname = this.refs.txtLname.value;
    let age = this.refs.txtAge.value

    if(this.state.act === 0){

      let newEmployee = {
        "name": name,
        "lname": lname,
        "age": age
      }
      employeeData.push(newEmployee)
    }
    else{
      let index = this.state.index
      employeeData[index].name = name;
      employeeData[index].lname = lname;
      employeeData[index].age = age;
    }
    
    this.setState({
      employeeData : employeeData,
      act : 0
    })

    this.refs.myForm.reset();
  } 

  handleEdit=(i) =>{
    let data = this.state.employeeData[i];
    this.refs.txtName.value=data.name;
    this.refs.txtLname.value=data.lname;
    this.refs.txtAge.value=data.age;

    this.setState({
     act:1,
     index:i
     })
  }

  handleDelete = (i) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(i,1);

    this.setState({
      employeeData : employeeData
    })
  }
  render() {
    let employeeData = this.state.employeeData;
    return (
      <div>
        <h1>{this.state.title}</h1>
      <form ref="myForm">
        <label>Name</label>
        <input type="text" ref="txtName" placeholder="Enter Name"/>
        <label>Last Name</label>
        <input type="text" ref="txtLname" placeholder="Enter Last Name"/>
        <label>Age</label>
        <input type="text" ref="txtAge" placeholder="Enter Age"/>
        <button onClick={e => this.handleSubmit(e)}>Save</button>
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Last Name</th>
        </tr>
        {
        employeeData.map( (data, i) =>
        <tr key={i}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.lname}</td>
           <td>
              <button onClick={() => this.handleEdit(i)}>Edit</button>
            </td>
            <td>
              <button onClick={() => this.handleDelete(i)}>Delete</button>
            </td>
        </tr>)
        }
      </table>
      </div>
    );
  }
}

export default App;