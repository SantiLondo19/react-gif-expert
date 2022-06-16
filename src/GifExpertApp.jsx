import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
  const [category, setCategory] = useState(["Ricky Morty"]);

  const onAddCategory = (newCategory) => {
    if (category.includes(newCategory)) {
      alert("Categoria ya existe");
      return;
    }

    setCategory([newCategory, ...category]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* No solo podemos enviar strings,booleanos o demas
        Tambien podemos enviar funciones */}
      {/* <AddCategory setCategory={setCategory}/> */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <div>
        {category.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
