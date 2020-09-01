import mapDispatchToProps from "./dispatch2props";
import App from "../App";
import {connect} from "react-redux";
import {mapStateToProps} from "./state2props";
import {Home} from "../components/home";

export const HOME_W =
    connect(mapStateToProps(),
        mapDispatchToProps())(Home);

export const APP_W =
    connect(mapStateToProps(),
        mapDispatchToProps())(App);


