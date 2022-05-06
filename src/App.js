import logo from './logo.svg';

// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';

import './App.css';

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UserList from "./components/user-list";
import Signup from "./screens/signup";
import Profile from "./screens/profile";
import Signin from "./screens/signin";
import {ProfileProvider} from "./contexts/profile-context";
import SecureRoute from "./components/secure-route";
import SearchArt from "./screens/search-art";
import DetailsArt from "./screens/details-art";
import HomeScreen from "./screens/home-screen";

function App() {
    return (
        <ProfileProvider>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/">
                            <Route path="/profile" element={
                                <SecureRoute>
                                    <Profile/>
                                </SecureRoute>
                            }/>
                            <Route path="/home" element={<HomeScreen/>}/>
                            <Route path="/signin" element={<Signin/>}/>
                            <Route path="/signup" element={<Signup/>}/>

                            <Route path="/art" element={<SearchArt/>}/>
                            <Route path="art/:searchString" element={<SearchArt/>}/>
                            <Route path="art/details/:objectnumber" element={<DetailsArt/>}/>
                            <Route path="users"
                                   element={<UserList/>}/>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </ProfileProvider>
    );
}

export default App;