import { Suspense, lazy } from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

const RocketPage = lazy(() => import("./components/Rocket"));
const Ticket = lazy(() => import("./components/Ticket"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<RocketPage />} />
            <Route path="/:siteNameParam" element={<RocketPage />} />
          </Routes>
          <Ticket />
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
