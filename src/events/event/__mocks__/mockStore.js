import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

export default (thunkArgs) => configureMockStore([
  thunk.withExtraArgument(thunkArgs)
]);
