import React from "react";
import { useParams } from "react-router-dom";
import ArticleContent from "./ArticleContent.js";

const Article = () => {
  const { name } = useParams();
  const article = ArticleContent.find((article) => article.name === name);
  if (!article) return <h1>Article does not exist</h1>;
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        This is {name} Article
        {article.title}
      </h1>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Aute minim magna velit ut occaecat occaecat. Non sunt est laboris
        consectetur ut est velit. Aliqua Lorem eiusmod deserunt et laborum non
        reprehenderit incididunt voluptate sint in culpa est do.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Enim aute do dolore id magna proident nulla laboris amet deserunt quis
        esse sint magna. Irure officia commodo quis laborum irure officia
        eiusmod veniam excepteur cupidatat anim. Ea aute elit quis Lorem dolore
        ipsum. Pariatur consequat est sit eiusmod voluptate est ea.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Velit laborum velit dolore nisi sunt anim dolor sunt ad Lorem tempor
        excepteur est ad. Occaecat et est est nostrud velit. Esse occaecat
        veniam ipsum aliquip esse laboris incididunt ut aute nisi sit minim
        ipsum nulla. Nisi fugiat anim deserunt aliqua ea velit excepteur
        excepteur. Ad laborum elit ex amet irure culpa deserunt quis est non
        fugiat est velit. In qui fugiat mollit tempor cupidatat nostrud. Dolor
        reprehenderit ex sunt non in aliquip sit sunt elit nulla. Anim irure
        Lorem amet pariatur aute amet commodo. Amet amet pariatur incididunt
        consectetur cillum aute velit est. Lorem laborum laborum pariatur
        voluptate Lorem minim ipsum aute quis enim cillum deserunt id officia.
        Irure magna cillum magna deserunt esse non sit sint Lorem quis
        excepteur. Anim sunt velit ea esse amet deserunt esse esse ullamco
        proident eu exercitation sunt pariatur. Cillum deserunt ipsum pariatur
        duis irure elit enim.
      </p>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Article;
