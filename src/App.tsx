
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import UserLayout from "./components/layout/userLayout/UserLayout";
import Search from "./pages/Search";

const App: React.FC = () => {
  return (

<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/user" element={<UserLayout />}>
    <Route path="home" element={<Home />} />
    <Route path="test" element={<TestPage />} />
    <Route path="search" element={<Search />} />
  </Route>
</Routes>
  );
};

export default App;