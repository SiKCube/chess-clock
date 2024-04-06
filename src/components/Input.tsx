import { InputProps } from "@/types";

export default function Input({ placeholder, minValue, maxValue, name, icon }: InputProps) {
    return (
        <div className="flex justify-center items-center w-full bg-slate-300 px-2 gap-2"> 
            {
                icon &&
                <span className="flex justify-center items-center">
                    {icon}
                </span>
            }
            <input
                className="w-full outline-none bg-transparent py-3"
                type="number"
                min={minValue}
                max={maxValue}
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    )
}