
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import UserLayout from "./components/layout/userLayout/UserLayout";
import Search from "./pages/Search";
import ResetPassword from "./components/forms/ResetPassword";
import Booking from "./pages/Booking";
import AdminLayOut from "./components/layout/adminLayOut/AdminLayOut";
import NotFound from "./components/notFound/NotFound";
import ControlPanel from "./pages/ControlPanel";
import AddCar from "./components/cars-control/AddCar";
import DeleteCar from "./components/cars-control/DeleteCar";
import UpdateCar from "./components/cars-control/UpdateCar";
import ViewCar from "./components/cards/ViewCar";
import HomeAdmin from "./pages/HomeAdmin";
import UserPage from "./pages/UserPage";
import BookingManagement from "./pages/BookingManagement";
import ListAllBookings from "./components/Booking/ListAllBookings";
import { UserLiksContextProvider } from "./context/userLiks";

const App: React.FC = () => {
  return (
    <UserLiksContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/user" element={<UserLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="booking/:id" element={<Booking />} />
          <Route path="search" element={<Search />} />
          <Route path="viewcar/:id" element={<ViewCar />} />
          <Route path="page/:username" element={<UserPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayOut />} >
          <Route path="home" element={<HomeAdmin />} />
          <Route path="controlpanel" element={<ControlPanel />}>
            <Route path="add-car" element={<AddCar />} />
            <Route path="delete-car" element={<DeleteCar />} />
            <Route path="update-car" element={<UpdateCar />} />
          </Route>
          <Route path="viewcar/:id" element={<ViewCar />} />
          <Route path="bookingmanagement" element={<BookingManagement />}>
            <Route path="list-all-bookings" element={<ListAllBookings />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserLiksContextProvider>
  );
};

export default App;
