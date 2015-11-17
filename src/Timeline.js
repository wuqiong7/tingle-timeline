/**
 * Timeline Component for tingle
 * @author shane.wuq
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
class Timeline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        let t = this;

        return <ol>
        {
            t.state.data.map(function(item) {
                let y = item.time.slice(0,4);
                    y = !isNaN(y) ? y : '';
                let m = !isNaN(y) ? item.time.slice(5) : item.time
                return (
                    <li>
                        <div className="tfl-time">
                            <span className="tFS16">{m}</span>
                            <span className="tFS14">{y}</span>
                        </div>
                        <div className="tfl-icon">
                            <i></i>
                        </div>
                        <div className="tfl-label">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </li>)
            })
        }
        </ol>
    }
}

Timeline.defaultProps = {
    data: []
}

// http://facebook.github.io/react/docs/reusable-components.html
Timeline.propTypes = {
    data: React.PropTypes.array
}

Timeline.displayName = 'Timeline';

module.exports = Timeline;
