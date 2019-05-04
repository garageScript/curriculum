import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query, Mutation } from "react-apollo";
import gql from 'graphql-tag';
import React from 'react';
import Stars from './stars';

const FILES_QUERY = gql`{files{name,value}}`;
const RATE_QUERY = gql`
  mutation RateFile($name: String, $value: Int) {
    rateFile(file: $name, value: $value) {
      name
    }
  }
`;

const client = new ApolloClient({uri: "/graphql"});

const File = ({info}) => (
  <Mutation mutation={RATE_QUERY}>
    {(rateFile, {data}) => {
      const sendData = (value) => {
        rateFile({variables: {name: info.name, value}});
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
    }}
  </Mutation>
);

const Files = () => (
  <ApolloProvider client={client}>
    <Query query={FILES_QUERY}>
      {({loading, error, data}) => {
        if (loading) return <h3>Loading...</h3>;
        if (error) return <h3>Error</h3>;
        const files = data.files.map( (f, i) => {
          return <File info={f} key={i} />
        });
        return (
          <div>
            {files}
          </div>
        )
      }}
    </Query>
  </ApolloProvider>
);

export default Files;
