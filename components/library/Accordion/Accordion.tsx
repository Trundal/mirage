'use client'

import { useState } from 'react'

import H3 from '../Text/H3'
import styles from './Accordion.module.css'

const Accordion = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleTrigger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.root}>
      <hr className={styles.divider} />
      <div className={styles.label} onClick={handleTrigger}>
        <H3>{label}</H3>
        <span className={styles.indicator}>{isOpen ? '-' : '+'}</span>
      </div>

      {isOpen && children}
      {!isOpen && <hr className={styles.divider} />}
    </div>
  )
}

export default Accordion
