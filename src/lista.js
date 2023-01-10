import React from "react";
import firebase from "./firebase";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
 
} from "firebase/firestore";

const Lista = () => {
  const [list, setList] = useState([]);

  const db = getFirestore(firebase);

  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };


  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "formularios"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setList(docs);
        
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, [list]);

  return (
    <>
      <h1 className="text-3xl font-semibold text-center">Formulario</h1>

    {
      (list)&&(
        list.map((item, i) => (
          <form key={i} >
  
            <h2>Respuesta: {i+1}</h2>

            <label >Fecha de nacimiento: {item.birth_date}</label>
            <br/>
            <label >Pais de origen:{item.country_of_origin}</label>
            <br/>
            <label >Email:{item.email}</label>
            <br/>
            <label >Nombre completo: {item.full_name}</label>
            <br/>
            <label >Terminos y condiciones: {item.terms_and_conditions}</label>
            <br/>
            <br/>
            <br/>

          </form>
 
         
        ))
     )
    }
 <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNavigate}
      >
Cuestionario     </button>

    </>
  );
};

export default Lista;
