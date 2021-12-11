import Ticket from "components/Ticket";
import { Suspense, lazy } from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

const RocketPage = lazy(() => import("./components/Rocket"));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/*" element={<RocketPage />} />
            <Route path="/:siteNameParam" element={<RocketPage />} />
          </Routes>
        </Suspense>
        <Ticket />
      </Layout>
    </Router>
  );
}

export default App;
