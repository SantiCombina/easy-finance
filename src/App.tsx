import {Route, Routes} from "react-router-dom";

import {Home} from "./pages/home";
import {Layout} from "./components/layout/layout";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route element={<Home />} path="/" />
            </Route>
        </Routes>
    );
}

export default App;
