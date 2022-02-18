import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Tasks from "./Tasks";
import TodoInput from "./TodoInput";


const client = new ApolloClient({
  uri: "https://fair-blowfish-97.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>ToDo App</p>
        </header>
        <br />
        <TodoInput />
        <Tasks />
      </div>
    </ApolloProvider>
  );
}

export default App;
