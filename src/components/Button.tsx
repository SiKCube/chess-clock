export default function Button({ text, onClickDo }: { text: string, onClickDo?: any }) {
    const handleClick = () => {
        if (onClickDo) {
            onClickDo()
        }
    }


    return (
        <button
            onClick={handleClick}
            className="flex justify-center items-center w-full bg-slate-400 py-4 px-7" type="submit">
            {text}
        </button>
    )
}