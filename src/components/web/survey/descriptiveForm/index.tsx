import React from 'react'
import Image from 'next/image'
import * as icon from '@public/images/survey'
import styles from './styles.module.scss'


export const Description = ({data}:{data:any})=>{
    return(
        <div className={styles.questionContainer}>
            <div className={styles.question}>
                {data.question}
            </div>
            <input className={styles.answerContainer} />
        </div>
)}