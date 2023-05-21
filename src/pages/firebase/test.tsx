import React from "react";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./module";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

require("dotenv").config();

const Test = () => {
  const db = getFirestore();

  if (!initializeApp.length) {
    initializeApp(firebaseConfig);
  }

  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const GetData = async () => {
      const docs = await getDocs(collection(db, "randomFormId"));
      console.log(docs);
    };
    GetData();
  }, []);

  return (
    <div>
      <h1>this is firebase T pages</h1>
    </div>
  );
};

export default Test;
