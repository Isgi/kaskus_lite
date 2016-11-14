import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
 
// Task component - represents a single todo item
export default class Thread extends Component {
  render() {
    return (
        <div className="col-xs-6 col-md-3">
            <div className="thumbnail">
                <img src="http://ccspits.org/wp-content/uploads/2015/10/image-coming-soon.png" alt="..."/>
                <Link to="#"><h3>{this.props.thread.judul}...</h3></Link>
            </div>
        </div>
    );
  }
}
 
Thread.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  thread: PropTypes.object.isRequired,
};