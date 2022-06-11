import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from '../actions/index.js'

export default function Button() {
    const count = useSelector(state => state.buttonCount);

    const dispatch = useDispatch();

  return (
    <div>
      <h1>I want {count} scoops of ice cream!</h1>
      <button onClick={() => dispatch(increment(5))}>More!</button>
      <button onClick={() => dispatch(decrement(5))}>Less!</button>
    </div>
  );
}
