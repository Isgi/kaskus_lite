import React, { Component } from 'react';
// import { Link } from 'react-router'
import Thread from './Thread';

class Forum extends Component {
    getThread(){
        return [
            {_id:1, title: 'Presiden Gaul', content:'If you are using navs to provide a navigation bar, be sure to add a role="navigation" to the most logical parent container of the <ul>, or wrap a <nav> element around the whole navigation. Do not add the role to the <ul> itself, as this would prevent it from being announced as an actual list by assistive technologies.'},
            {_id:2, title: 'Aksi 4 11', content:'If you are using navs to provide a navigation bar, be sure to add a role="navigation" to the most logical parent container of the <ul>, or wrap a <nav> element around the whole navigation. Do not add the role to the <ul> itself, as this would prevent it from being announced as an actual list by assistive technologies.'},
            {_id:3, title: 'Diulang lagi', content:'If you are using navs to provide a navigation bar, be sure to add a role="navigation" to the most logical parent container of the <ul>, or wrap a <nav> element around the whole navigation. Do not add the role to the <ul> itself, as this would prevent it from being announced as an actual list by assistive technologies.'}
        ]
    }
    renderThread(){
        return this.getThread().map((thread) => (
            <Thread key={thread._id} thread={thread} />
        ));
    }
    render() {
        // const { courses } = this.props

        return (
        <div className="row">
            {this.renderThread()}
        </div>
        )
    }
}

export default Forum;
