"use client"

import { useState, useEffect } from "react"

import timeFormat from "@/lib/timeFormat"
import TimeConfigModal from "./TimeConfigModal"

import Button from "./Button"
import ClockBtn from "./ClockBtn"

export default function ChessClock() {
    const [player1Secs, setPlayer1Secs] = useState(600)
    const [player2Secs, setPlayer2Secs] = useState(600)

    const [showModal, setShowModal] = useState(false)

    const [turn, setTurn] = useState<"NONE" | "PLAYER1" | "PLAYER2">("NONE")

    const classPlayer1 = turn === "PLAYER1" ? null : "opacity-70"
    const classPlayer2 = turn === "PLAYER2" ? null : "opacity-70"

    useEffect(() => {
        if (turn === "PLAYER1") {
            const interval = setInterval(() => {
                if (player1Secs > 0) {
                    setPlayer1Secs(prev => prev - 1)
                }
            }, 1000)

            return () => clearInterval(interval)

        } if (turn === "PLAYER2") {
            const interval = setInterval(() => {
                if (player2Secs > 0) { 
                    setPlayer2Secs(prev => prev - 1)
                }
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [turn, player1Secs, player2Secs])

    useEffect(() => {
        setPlayer1Secs(localStorage.getItem("playersSecs") ? Number(localStorage.getItem("playersSecs")) : 600)
        setPlayer2Secs(localStorage.getItem("playersSecs") ? Number(localStorage.getItem("playersSecs")) : 600)
    }, [localStorage.getItem("playersSecs")])

    return (
        <>
            {
                showModal && <TimeConfigModal
                    setShowModal={setShowModal}
                />
            }
            <Button
                text="Time Config"
                onClickDo={() => (setShowModal(true))}
            />
            <Button
                text="Reset"
                onClickDo={() => {
                    setTurn("NONE")
                    setPlayer1Secs(localStorage.getItem("playersSecs") ? Number(localStorage.getItem("playersSecs")) : 600)
                    setPlayer2Secs(localStorage.getItem("playersSecs") ? Number(localStorage.getItem("playersSecs")) : 600)
                }}
            />
            <Button
                text="Pause"
                onClickDo={() => (setTurn("NONE"))}
            />
            <div className="grid grid-cols-1 grid-rows-2 h-full">
                <ClockBtn
                    text={timeFormat(player1Secs)}
                    onClickDo={() => (setTurn("PLAYER2"))}
                    colorClass={`bg-red-500 ${classPlayer1}`}
                />
                <ClockBtn
                    text={timeFormat(player2Secs)}
                    onClickDo={() => (setTurn("PLAYER1"))}
                    colorClass={`bg-blue-500 ${classPlayer2}`}
                />
            </div>
        </>
    )
}