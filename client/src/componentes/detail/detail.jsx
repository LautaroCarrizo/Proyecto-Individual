//mport { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Detail() {
  const allRecipes = useSelector((state) => state.allRecipes);
  console.log(allRecipes.steps);

  return (
    <div className="conteinerJsxDetails">
      <h1>SOOOY DETAIL</h1>
      <img src={allRecipes.image} alt={allRecipes.name} />
      <h2>{allRecipes.name}</h2>
      <p>{allRecipes.summary}</p>
      <p>{allRecipes.healthScore} </p>
      <p>{allRecipes.diets} </p>

      <div>
        {Array.isArray(allRecipes.steps) ? (
          allRecipes.steps.map((step, index) => (
            <div key={index}>
              <p>
                Step {step.number}: {step.step}
              </p>
            </div>
          ))
        ) : (
          <p> {allRecipes.steps} </p>
        )}
      </div>
    </div>
  );
}
