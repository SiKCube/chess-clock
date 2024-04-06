export default function ClockBtn({text, onClickDo, colorClass}: {text: string, onClickDo?: any, colorClass: string}) {        
    return (
        <button
            className={`flex justify-center items-center w-full text-6xl ${colorClass}`}
            onClick={() => (onClickDo())}
            type="button">
            {text}
        </button>
    )
}