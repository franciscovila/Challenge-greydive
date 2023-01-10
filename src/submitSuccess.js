import React from "react";
import { useNavigate } from "react-router-dom";


const SubmitSuccess = () => {
  let navigate = useNavigate();

  const handleNavigateCuestionario = () => {
    navigate("/")
  };

  const handleNavigateListado = () => {
    navigate("/lista")
  };

  return (
    <>
      <h1>Su cuestionario fue enviado exitosamente</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNavigateCuestionario}
      >
        Volver al cuestionario
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNavigateListado}
      >
        Listado de respuestas
      </button>
    </>
  );
};

export default SubmitSuccess;
