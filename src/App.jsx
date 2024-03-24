import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ShoppingList from "./pages/ShoppingList";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./App.css";

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
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster />
    </DarkModeProvider>
  );
}

export default App;
