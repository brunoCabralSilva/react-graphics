import React, { useState } from "react";
import { Chart } from "react-google-charts";

export default function Graphics() {
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [data, setData] = useState([
    ["Biblotecas", "Número de Usuários"],
  ]);

  const options = {
    is3D: true,
  };

  const insertData = () => {
    setData((prevState) => ([
      ...prevState,
      [name, Number(value)],
    ]));
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="flex flex-col items-center justify-center w-1/2 p-2 h-1/2">
          <label htmlFor="name" className="w-full m-2">
            <input
              id="name"
              type="text"
              className="w-full p-2 text-center border border-black"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="value" className="w-full m-2">
            <input
              id="value"
              type="number"
              className="w-full p-2 text-center border border-black"
              placeholder="Valor"
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <button
            type="button"
            className="w-full p-2 m-2 text-center bg-gray-200 border border-black"
            onClick={insertData}
          >
            Adicionar
          </button>
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"100vh"}
        />
      </div>
    </div>
  );
}

