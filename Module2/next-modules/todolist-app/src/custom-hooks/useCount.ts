"use client"
import { useState } from "react";

export function useCount() {
    const [count, setCount] = useState<number>(0)

    function addCount() {
        setCount(count + 1)
    }

    function decreaseCount() {
        if (count <= 0) {
            alert("Nomor tidak boleh kurang dari 0")
        } else {
            setCount(count - 1)
        }
    }

    return { count, addCount, decreaseCount }
}