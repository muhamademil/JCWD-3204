"use client"
import { useState } from "react";

export function useToggle(initialState: boolean = false) {
    const [toggle, setToggle] = useState<boolean>(initialState)

    function triggerToggle() {
        setToggle((prev) => !prev)
    }

    return { toggle, triggerToggle }
}