import AppDispatcher from "../Dispatcher/dispatcher";

export function filterBySearch(searchParameters) {
	AppDispatcher.dispatch({
		type: "FILTER_SEARCH",
		searchParameters
	});
}

export function filterByLocation(location){
	AppDispatcher.dispatch({
		type: "LOCATION_FILTER_SEARCH",
		location
	});
}

export function filterCinemaInfo(location){
	AppDispatcher.dispatch({
		type: "ABOUT_LOCATION",
		location
	});
}
