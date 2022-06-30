import CustomButton from "../events/CustomButton";
import SelectItem from "../selectItem/SelectItem";
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/router'

const Filter = () => {
    const months = [
        { value: 1, text: "January" },
        { value: 2, text: "February" },
        { value: 3, text: "March" },
        { value: 4, text: "April" },
        { value: 5, text: "May" },
        { value: 6, text: "June" },
        { value: 7, text: "July" },
        { value: 8, text: "Augast" },
        { value: 9, text: "Septamber" },
        { value: 10, text: "October" },
        { value: 11, text: "November" },
        { value: 12, text: "Decamber" },
    ];
    const years = [
        { value: 2010, text: "2010" },
        { value: 2011, text: "2011" },
        { value: 2012, text: "2012" },
        { value: 2013, text: "2013" },
        { value: 2014, text: "2014" },
        { value: 2015, text: "2015" },
        { value: 2016, text: "2016" },
        { value: 2017, text: "2017" },
        { value: 2018, text: "2018" },
        { value: 2020, text: "2020" },
        { value: 2021, text: "2021" },
        { value: 2022, text: "2022" },
        { value: 2023, text: "2023" },
    ];

    const router = useRouter()
    
    const {register , handleSubmit} = useForm()

    const handleSubmitFunction = ({year,month}) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <div className="bg-green-100 flex  items-center justify-center pt-6">
            <form className="flex flex-col gap-2 md:flex-row justify-between w-1/2 min-w-[320px] bg-white items-center p-2 rounded" onSubmit={handleSubmit(handleSubmitFunction)}>
                <SelectItem title="year" data={years} register={register}/>
                <SelectItem title="month" data={months} register={register}/>
                <CustomButton>Find Events</CustomButton>
            </form>
        </div>
    );
};

export default Filter;
