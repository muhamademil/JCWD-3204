import React, { useState } from 'react'
import styles from './index.module.css'

export default function Home() {
  const [steps, setStep] = useState<number>(0)
  const [isOn, setIsOn] = useState<boolean>(false)

  // simulasi membuat undian
  const [number, setNumber] = useState<number>(0)
  const [prize, setPrize] = useState<string>("")

  function drawNumber() {
    // bikin undian
    const randomNumber = (Math.floor(Math.random() * 50))
    setNumber(randomNumber)

    // bikin rewardnya
    let reward;
    if (randomNumber >= 1 && randomNumber <= 10) {
      reward = "T-Shirt"
    } else if (randomNumber >= 11 && randomNumber <= 20) {
      reward = "Mug"
    } else if (randomNumber >= 21 && randomNumber <= 30) {
      reward = "Voucher Rp50.000"
    } else if (randomNumber >= 31 && randomNumber <= 40) {
      reward = "Smartphone"
    } else {
      reward = "No prize, try again!"
    }

    // simpan reward ke setPrize
    setPrize(reward)
  }


  function addStep() {
    setStep(steps + 1)
  }

  function removeStep() {
    if (steps <= 0) {
      return
    } else {
      setStep(steps - 1)
    }
  }

  function triggerLamp() {
    if (!isOn) {
      setIsOn(true)
    } else {
      setIsOn(false)
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <h3> --- Contoh state untuk menghitung steps --- </h3>
        <h1>Step : {steps}</h1>
        <div className={styles.containerButton}>
          <button className={styles.stepButton} onClick={addStep}> Add Step</button>
          <button className={styles.stepButton} onClick={removeStep}> Remove Step</button>
        </div>
      </div>
      <div className={styles.subContainer}>
        <h3> --- Contoh state untuk mematikan dan menyalakan lampu --- </h3>
        <h3>Keadaan Lampu : {isOn ? 'Lampu Menyala' : 'Lampu Mati'}</h3>
        <button className={styles.lampButton} onClick={triggerLamp}>Click</button>
      </div>
      <div className={styles.subContainer}>
        <h3> --- Contoh state untuk undian --- </h3>
        <h3>Kamu dapat nomor undian : {number}</h3>
        <h4>Hadiah yang kamu dapat kan adalah : {prize}</h4>
        <button className={styles.drawButton} onClick={drawNumber}>Click</button>
      </div>
    </div>
  )
}