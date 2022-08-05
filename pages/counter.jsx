import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../components/events/CustomButton";
import { increment, decrement } from "../store/counter/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counterSlice.value);

    return (
        <>
            <div>counter is {counter}</div>
            <CustomButton onClick={()=> dispatch(increment())}>increment</CustomButton>
            <CustomButton onClick={()=> dispatch(decrement())}>decrement</CustomButton>
        </>
    );
};

export default Counter;
