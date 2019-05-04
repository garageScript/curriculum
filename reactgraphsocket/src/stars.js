import React from 'react';

const Star = ({id, selected, update, lock}) => {
  const cname = id <= selected ? 'fas' : 'far'; 
  let starStyle = {
    fontSize: '30px',
    cursor: 'pointer'
  };
  if (cname === 'fas') {
    starStyle = {
      color: 'yellow',
      fontSize: '30px',
      cursor: 'pointer',
      textStrokeWidth: '3px',
      textStrokeColor: 'black',
      WebkitTextStrokeWidth: '3px',
      WebkitTextStrokeColor: 'black',
    };
  }
  return (
    <i
      className={`${cname} fa-star`}
      style={starStyle}
      onMouseEnter={() => update(id)}
      onClick={() => lock(id)}
    ></i>
  )
};

class Stars extends React.Component {
  constructor(props) {
    super(props); // You must call super whenever you extend
    this.state = {
      selected: this.props.value > -1 ? this.props.value : -1,
      lock: false
    };
  }
  update(id) {
    if (this.state.lock) return;
    this.setState({selected: +id});
  }
  lock(id) {
    this.setState({
      selected: +id,
      lock: true
    });
    this.props.select && this.props.select(+id);
  }
  render() {
    const stars = [0,1,2,3,4].map( i =>
      <Star id={i} key={i} lock={this.lock.bind(this)} selected={this.state.selected} update={this.update.bind(this)} />
    );
    const prefix = this.state.lock ? 'have given' : 'are giving';
    return (
      <div>
        <div onMouseEnter={() => this.setState({lock: false})}>
        {stars}
        </div>
        <p>You {prefix} {this.state.selected + 1} stars</p>
      </div>
    )
  }
}

export default Stars;
