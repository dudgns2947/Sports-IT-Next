import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import NextButton from '../button/NextButton'
import { Multiple } from './multiple'
import { Description } from './descriptiveForm'
import { DummyData } from './dummyData'
export const SurveyContainer = () => {
    return(
    <div className={styles.container}>
        <div className={styles.surveyContainer}>
            <div className={styles.boldFont}>
                ✏️ 설문지를 작성해주세요.
            </div>
            {
                DummyData.map((item)=>{
                    return(
                    item.type==="multiple"?
                        <Multiple data={item} key={item.question}/>
                        :<Description data={item} key={item.question}/>
                    )
                })
            }
        </div>
        <Link href="/participate/check-weight-sector" style={{marginBottom: 20}}>
            <NextButton />
        </Link>
    </div>)
}