import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import Event from "./pages/Event";
import RouterManager from "./RouterManager";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <RouterManager />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
