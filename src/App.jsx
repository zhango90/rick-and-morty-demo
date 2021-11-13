/** @jsx jsx */
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Characters from "screens/Characters";
import { Global, jsx } from "@emotion/react";
import { globalCss, appCss } from "global-css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalCss} />
      <div css={appCss}>
        <Characters />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
