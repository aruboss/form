import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtName : '',
      txtPassword : '',
      txtDesc: '',
      sltGender: 0,
      rdLang: 'vi'
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  //khi bat su kien cua 1 input hoac button -> ham dau vao luon co bien event
  onHandleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  onHandleSubmit(event){
    event.preventDefault();//chặn default submit
    console.log(this.state)
  }

  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit = {this.onHandleSubmit}>
                  <div className="form-group">
                    <label>UserName: </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "txtName"
                        value={this.state.txtName}
                        onChange = {this.onHandleChange}
                    />
                  </div>    
                  <div className="form-group">  
                    <label>Password: </label> 
                    <input 
                        type="password" 
                        className="form-control" 
                        name = "txtPassword"
                        value={this.state.txtPassword}
                        onChange = {this.onHandleChange}
                    />
                  </div>
                  <div className="form-group">  
                    <label>Mô tả: </label> 
                    <textarea 
                        className="form-control" 
                        rows="3"
                        name = "txtDesc"
                        value={this.state.txtDesc}
                        onChange = {this.onHandleChange}
                        ></textarea>
                  </div>
                  <label>Giới tính: </label>
                  <select 
                        className="form-control" 
                        name="sltGender"
                        value={this.state.sltGender}
                        onChange={this.onHandleChange}
                    ><option value={0}>Nữ</option>
                    <option value={1}>Nam</option>
                  </select>
                  <br/>

                  <label>Ngôn ngữ: </label>
                  <div className="radio">
                    <label>
                        <input 
                        type="radio" 
                        name="rdLang" 
                        value="vi" 
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang==='vi'}
                      />
                      Tiếng Việt
                    </label>&nbsp;
                    <label>
                      <input 
                        type="radio" 
                        name="rdLang" 
                        value="en" 
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang==='en'}
                      />
                      Tiếng Anh
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                  <button type="reset" className="btn btn-default">Xóa</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
