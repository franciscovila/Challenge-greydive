import React from "react";
import Items from "./Items.json";
import firebase from "./firebase";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";

function App() {
  const guardarDatos = async (e) => {
    e.preventDefault();
    console.log({ ...user });
    try {
      await setDoc(doc(collection(db, "formularios")), {
        ...user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/lista");
  };

  const db = getFirestore(firebase);

  const [country, setCountry] = useState("");
  useEffect(() => {});

  const write = (params) => {};

  const handleSelectChange = (event) => {
    setCountry(event.target.value);
  };

  const [user, setUser] = useState("");

  const [list, setList] = useState([]);

  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
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

      {Items.items.map((item, i) => (
        <form key={i} onSubmit={guardarDatos}>
          {item.type != "submit" && item.type != "select" && (
            <div className="p-4 items-center mb-3 flex-col">
              <label className="p-4">{item.label}</label>
              <input
                onChange={capturarInputs}
                type={item.type}
                name={item.name}
                required={item.required}
              />
            </div>
          )}

          {item.type == "select" && (
            <>
              <div className="p-4 items-center mb-3 flex-col">
                <label>{item.label}</label>
                <select
                  name={item.name}
                  onChange={handleSelectChange}
                  onInput={capturarInputs}
                  defaultValue="elija una opcion"
                >
                  <option disabled value="elija una opcion">
                    Seleccione...
                  </option>
                  {item.options.map((subItem) => {
                    {
                      write(subItem);
                    }

                    return (
                      <option key={subItem.value} value={subItem.value}>
                        {subItem.label}
                      </option>
                    );
                  })}
                </select>{" "}
              </div>
            </>
          )}
          <div className="p-4 items-center mb-3 flex-col">
            {item.type == "submit" && (
              <button className="bg-slate-700 text-white rounded-full font-sans">
                {item.label}
              </button>
            )}
          </div>
        </form>
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNavigate}
      >
        Ir a lista
      </button>
    </>
  );
}

export default App;
