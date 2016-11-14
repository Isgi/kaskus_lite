import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Kaskus <small>lite</small></Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><Link to="/forum" activeClassName="active">Forum</Link></li>
                    <li><Link to="/jubel" activeClassName="active">Jual Beli</Link></li>
                </ul>
                <form className="navbar-form navbar-left">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/newthread" activeClassName="active">Bikin Thread</Link></li>
                    <li><Link to="/newlapak" activeClassName="active">Bikin Lapak</Link></li>
                    <li><Link to="/login" activeClassName="active"><small>Login | Register</small></Link></li>
                </ul>
                </div>
            </div>
        </nav>
    )
  }
}
export default Navbar;
