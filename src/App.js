import './vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap-5.1.3-dist/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import HelloWorld from "./components/hello-world"; // no .js extension needed
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreScreen from "./components/tuiter/explore screen/ExploreScreen"; // import Route



function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="notifications"
                                   element={<NotificationScreen/>}/>
                            ...
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;

