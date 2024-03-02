import { fetchGreetings } from "../redux/slices/greetingsSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Greetings = () => {
  const dispatch = useDispatch();
  const { randomGreeting } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchGreetings());
  }

  return (
    <div id="greetings-ctr">
      <h2 id="greeting">{randomGreeting.text}</h2>
      <button type="button" onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Greetings;