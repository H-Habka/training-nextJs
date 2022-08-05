import CustomButton from "../events/CustomButton";

const Registre = () => {
    return (
        <div className="flex flex-col gap-5 items-center mt-5">
            <div className="text-2xl  text-gray-600 font-bold">Signup to stay updated!</div>
            <div className="flex items-center justify-center h-[40px] rounded overflow-hidden">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="h-full pl-2"
                />
                <CustomButton className='h-full'>Register</CustomButton>
            </div>
        </div>
    );  
};

export default Registre;
