import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';


function graphQLFetcher(graphQLParams) {
  return fetch('http://localhost:3000/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

class Main extends React.Component {
  render() {
    return (
      <GraphiQL fetcher={graphQLFetcher} />
    )
  }
}

export default Main;
