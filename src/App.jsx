import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import ShoppingList from "./pages/ShoppingList";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            {/* This is a layout route as it doesnt have a path prop. All child elements are rendered using <Outlet/> */}
            <Route element={<AppLayout />}>
              {/* Now when we navigate to / route we are automatically re-routed to /shopping-list */}
              <Route
                index
                element={<Navigate replace to="shopping-list" />}
              ></Route>
              <Route path="shopping-list" element={<ShoppingList />}></Route>
            </Route>
            <Route
              path="*"
              element={/*<PageNotFound />*/ <h1>Page not found</h1>}
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
