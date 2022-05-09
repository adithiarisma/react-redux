import { connect } from "react-redux";
import { decrementAction, incrementAction } from "./actions";
function App(props) {
  return (
    <div className="App">
      counter : {props.count}
      <button
        onClick={() => {
          props.incrementCount();
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          props.decrementCount();
        }}
      >
        decrement
      </button>
    </div>
  );
}

const mapStateProps = (state) => ({
  count: state.count,
});

const mapDispatchToProos = (dispatch, state) => ({
  incrementCount: () => {
    dispatch(incrementAction);
  },
  decrementCount: () => {
    dispatch(decrementAction);
  },
});

// const mapDispatchToProos2 = (dispatch, state) => ({
//   decrementCount: () => {
//     dispatch(decrementAction);
//   },
// });
export default connect(mapStateProps, mapDispatchToProos)(App);
