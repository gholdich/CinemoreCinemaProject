import { Dispatcher } from "flux";

var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = (action) => {
	this.dispatch({
		source: "VIEW_ACTION",
		action
	});
}

export default AppDispatcher;