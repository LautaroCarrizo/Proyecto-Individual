//mport { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./detail.css";
import ErrorHandler from "../errors/error";
export default function Detail() {
  const allRecipes = useSelector((state) => state.allRecipes);

  return (
    <div className="containerAllDetail">
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "50vh",
          objectFit: "cover",
        }}
      >
        <source src="../../../img/video (2160p).mp4" type="video/mp4" />
      </video>
      <ErrorHandler />
      <div className="titleDetail">
        {" "}
        <h1>Detail</h1>{" "}
      </div>
      <div className="conteinerDetailsInfo">
        <div className="containerImgDetail">
          <img src={allRecipes.image} alt={allRecipes.name} />
          <img src="../../../img/linguini.webp"></img>
        </div>
        <div className="containerInfo">
          <h2>{allRecipes.name}</h2>
          <p>Summary:{allRecipes.summary}</p>
          <p>healthScore:{allRecipes.healthScore} </p>
          <p>Diets: {allRecipes.diets?.join(", ")} </p>
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
              <p> steps: {allRecipes.steps} </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
