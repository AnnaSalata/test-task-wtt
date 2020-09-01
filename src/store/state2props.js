export function mapStateToProps() {
    return function (state) {
        return {
            cities: state.cities,
            APPID: state.APPID
        };
    }
}
