import React from 'react';
const Item = ({val, onAction, itemId, todoId}) => {
  const arrowStyle = {display: "inline-block", width: '30px', textAlign: 'center', cursor: 'pointer'};
  return (
    <div style={{display: 'flex', backgroundColor: '#ddd', alignItems: 'center', margin: '10px 0', padding: '10px'}}>
      <span style={arrowStyle} onClick={() => {
      onAction(todoId, 'move', {id: itemId, next: todoId-1});
      }}>&lt;</span>
      <div style={{width: '100%'}} onClick={() => {
        if (!confirm(`Delete item: ${val} ?`)) return;
        onAction(todoId, 'delete', {id: itemId});
      }}>{val}</div>
    <span style={arrowStyle} onClick={() => {
      onAction(todoId, 'move', {id: itemId, next: todoId+1});
    }}>&gt;</span>
    </div>
  );
};
const Todo = ({id, bg, title, onAction, items}) => {
  let textElement;
  const Items = items.map((item, i) => {
    return <Item val={item} key={i} itemId={i} todoId={id} onAction={onAction}/>
  });
  return (
    <div style={{width: '100%', margin: '15px', color: '#ffffff'}}>
      <h4 style={{textAlign: 'center', backgroundColor: bg, padding: '10px', margin: 0}}>{title}</h4>
      <div style={{color: "#000000", minHeight: '20px', marginTop: '-10px', marginBottom: '-10px'}}>
        {Items}
      </div>
      <div style={{display: 'flex'}}>
        <textarea style={{width: '100%'}} ref={e => textElement = e}></textarea>
        <button style={{width: '100px'}} onClick={() => {
          onAction(id, 'add', {value: textElement.value});
          textElement.value = ''
        }}>Submit</button>
      </div>
    </div>
  );
};
class Kanban extends React.Component {
  constructor(props) {
    super(props); // You must call super whenever you extend
    const todos = JSON.parse(localStorage.getItem('kanban') || "[[],[],[],[]]")
    this.state = { todos };
  }
  action(id, type, data) {
    const newState = [...this.state.todos];
    if (type === 'add') data.value.length > 1 && newState[id].push(data.value);
    if (type === 'delete' || type === 'move') {
      const removedVal = newState[id].splice(data.id, 1);
      if (type==='move') newState[data.next].push(removedVal);
    }
    this.setState({
      todos: newState
    });
    localStorage.setItem('kanban', JSON.stringify(newState));
  }
  render() {
    return (
      <div style={{display: 'flex', padding: '15px'}}>
        <Todo items={this.state.todos[0]} bg={"#35235D"} title="To-Do" id={0} onAction={this.action.bind(this)} />
        <Todo items={this.state.todos[1]} bg={"#CB2402"} title="Doing" id={1} onAction={this.action.bind(this)} />
        <Todo items={this.state.todos[2]} bg={"#4C49A2"} title="Done" id={2} onAction={this.action.bind(this)} />
        <Todo items={this.state.todos[3]} bg={"#A31A48"} title="Approved" id={3} onAction={this.action.bind(this)} />
      </div>
    )
  }
}
export default Kanban;
