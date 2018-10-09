import React from 'react';
import Stars from './stars';
// Helper function so I don't have to call fetch over and over again
const post = (query) => {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({query})
  }).then(r=>r.json())
};
const File = ({info}) => {
  const sendData = (value) => {
    post(`
      mutation {
        rateFile(file: "${info.name}", value: ${value}) {
            name
          }
      }
    `);
  };
  const initialValue = info.value > -1 ? info.value : -1;
  return (
    <div>
      <h3>
        {info.name}
      </h3>
      <Stars select={sendData} value={initialValue} locked={initialValue > -1}/>
      <hr />
    </div>
  );
};
class Files extends React.Component {
  constructor(props) {
    super(props); // You must call super whenever you extend
    this.state = {files: []};
    post(` {files{name,value}} `).then( ({data}) => {
      this.setState({files: data.files});
    });
  }
  render() {
    const files = this.state.files.map( (f, i) => {
      return <File info={f} key={i} />
    });
    return (
      <div>
        {files}
      </div>
    );
  }
};
export default Files;
