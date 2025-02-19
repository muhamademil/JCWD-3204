import React from 'react'
import style from "./test.component.module.css"

export interface IPerson {
    name: string;
    age: number
}
export default function TestComponent({ name, age }: IPerson) {
    return (
        <div className={style.testContainer}>
            <h2 className={style.content}>Nama saya adalah : {name}</h2>
            <h3 className={style.content}>Umur saya : {age} tahun</h3>
        </div>
    )
}
