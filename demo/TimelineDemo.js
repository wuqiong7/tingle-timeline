/**
 * Timeline Component Demo for tingle
 * @author shane.wuq
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

var classnames = require('classnames');

var Timeline = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "time": "2015-11-11",
                    "title": "我是标题",
                    "desc": "我是描述，我是描述，我是描述，我是描述"
                },{
                    "time": "2015-11-11",
                    "title": "我是标题",
                    "desc": "我是描述，我是描述，我是描述，我是描述"
                }
            ]
        }
    }

    render() {
        return <div>
            <Timeline data={this.state.data}/>
        </div>
    }
};

module.exports = Demo;
