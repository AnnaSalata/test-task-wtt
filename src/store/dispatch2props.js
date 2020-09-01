import { bindActionCreators } from 'redux';
import {add_city} from "./actionCreator";

function mapDispatchToProps() {
    return function(dispatch) {
        return {
            add_city: bindActionCreators(add_city, dispatch)
        };
    };
}

export default mapDispatchToProps;
