import React, { Suspense } from "react";
// import { Manager, UserIdPage } from "./Pages";
import Loading from "./Pages/Loading";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Manager = React.lazy(() => import("./Pages/Manager"));
const UserIdPage = React.lazy(() => import("./Pages/UserId"));


function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={ROUTER.Home} element={<Manager />} />
          <Route path={`${ROUTER.Detail}/:id`} element={<UserIdPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
