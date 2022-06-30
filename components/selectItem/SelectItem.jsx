const SelectItem = ({title,data,register}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-2 items-center">
            <p>{title}</p>
            <select className="md:min-w-[130px] min-w-[210px] border border-black p-1 rounded-lg" {...register(title)} >
                {data.map(({value, text}) => (
                    <option className="bg-slate-800 text-white" key={value} value={value}>{text}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectItem;
