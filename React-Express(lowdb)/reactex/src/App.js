import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { animateScroll as scroll } from 'react-scroll'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data1: []
    }
  }


  postFunc = () => {
    axios.post('http://localhost:3027/api', {
      nama: this.refs.nama.value,
      usia: this.refs.usia.value
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getFunc = () => {
    axios.get('http://localhost:3027/api').then((getData) => {
      console.log(getData);
      this.setState({
        data1: getData.data
      })
    })
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    const data = this.state.data1.map((item, index) => {
      let id = item.id;
      let nama = item.nama;
      let usia = item.usia;
      // console.log(id)
      return <tr key={index}><td>{id}</td><td >{nama}</td><td >{usia}</td></tr>;
    })
    return (
      <div>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header text-center">
              <h1>React Express</h1>
            </div>

            <div className="modal-body">

              <div className="form-group">
                <input type="text" ref="nama" placeholder="Masukan nama" className="form_control input-lg" ></input>
              </div>

              <div className="form-group">
                <input type="text" ref="usia" placeholder="Masukan usia" className="form_control input-lg"></input>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={() => { this.postFunc() }} >Post</button>
                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={() => { this.getFunc() }} >Get</button>
              </div>

              <div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Usia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data}
                  </tbody>
                </table>
              </div>

            </div>

            <div className="modal-footer">
              <a href="#" onClick={this.scrollToTop}>Back to top</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;


