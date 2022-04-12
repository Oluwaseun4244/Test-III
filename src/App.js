import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import DispatchReport from "./Screens/DispatchReport";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details/:dispatch_id" element={<DispatchReport />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
