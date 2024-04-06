"use client"

import Button from "./Button"
import Input from "./Input"

export default function TimeConfigModal({ setShowModal }: { setShowModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <>
            <div
                className="z-10 h-[100vh] w-[425px] bg-black opacity-50 fixed  bottom-0 top-0 left-0 right-0"
                onClick={() => (setShowModal(false))}
            />

            <div className="z-20 fixed right-0 bottom-0 top-0 m-auto w-[70%] h-[50%] bg-slate-800 p-10 rounded-l-3xl">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        const formData = new FormData(e.target as HTMLFormElement)

                        const min = Number(formData.get("min"))
                        const seg = Number(formData.get("seg"))

                        localStorage.setItem("playersSecs", String(min * 60 + seg))

                        setShowModal(false)
                    }}
                    className="flex h-full flex-col justify-between items-center">
                    <Input
                        name="min"
                        placeholder="Minutes"
                        minValue={1}
                        maxValue={30}
                        icon={
                            <svg className="size-6 text-slate-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                            </svg>
                        }
                    />
                    <Input
                        name="seg"
                        placeholder="Seconds"
                        minValue={0}
                        maxValue={59}
                        icon={
                            <svg className="size-6 text-slate-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                            </svg>
                        }
                    />
                    <Button
                        text="Set Time"
                    />
                </form>
            </div>
        </>
    )
}