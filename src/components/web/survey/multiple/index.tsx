import React,{useState} from 'react'
import Image from 'next/image'
import * as icon from '@public/images/survey'
import styles from './styles.module.scss'


export const Multiple = ({data}:{data:any})=>{
    const [selectedItem, setSelectedItem]= useState<string>("")
    return(
        <div className={styles.questionContainer}>
            <div className={styles.question}>
                {data.question}
            </div>
            {
                data.imageOption && 
                <Image 
                    src={icon.dummyImage} 
                    alt=""
                    className={styles.image}
                />
            }
        
            {
                data.option.map((item:any)=>{
                    return(
                        <div className={styles.answerContainer} key={item}>
                            <Image 
                                src={selectedItem===item?icon.coloredButton:icon.radioButton}
                                alt="라디오버튼"
                                onClick={()=>{
                                    setSelectedItem(item);
                                }}
                            />
                            <div 
                                className={styles.answer}
                            >
                                {item}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )}