import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import {Threads} from '../../../collections/Threads';
// import { Link } from 'react-router'

class NewThread extends Component {
  handleSubmit(event){
    event.preventDefault();
    const judul = ReactDOM.findDOMNode(this.refs.judul).value.trim();
    const isi = ReactDOM.findDOMNode(this.refs.isi).value.trim();
    

    Meteor.call('thread.insert',judul,isi);
  }
  render() {
    return (
      <div className="col-sm-6">
        <h2>Bikin Thread</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label for="InputTitle">Judul</label>
            <input type="text" ref="judul" required className="form-control" id="InputTitle" placeholder="Judul Thread"/>
          </div>
          <div className="form-group">
            <label for="InputContent">Isi</label>
            <textarea className="form-control" ref="isi" required id="InputContent" rows="15"></textarea>
          </div>
          <div className="form-group">
            <div className="pull-right">
              <button type="submit"  className="btn btn-primary">Simpan</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default NewThread;
