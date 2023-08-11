import React from "react";

export default function Movie({ movie }) {
  const { Poster, Title, Year, Type, imdbID } = movie;
  return (
    <article key={imdbID} className="w-[350px] h-[450px] bg-gray-900  rounded">
      <div className="hover:opacity-40">
        <img
          className="w-full h-[400px] rounded-t"
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div className="text-center">
        <span className="text-gray-400">
          {Type} ({Year})
        </span>
        <h2 className="text-yellow-600">{Title}</h2>
      </div>
    </article>
  );
}
