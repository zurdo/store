import { useState } from "react";
import dynamic from "next/dynamic";

export default function FavoriteButton({ id }: { id: number }) {
  const favoritesList = JSON.parse(localStorage.getItem("favorites") || "[]");
  const [fav, setFav] = useState(favoritesList.includes(id));

  const handleClick = () => {
    if (!fav) {
      setFav(true);
      localStorage.setItem("favorites", JSON.stringify([...favoritesList, id]));
    } else {
      setFav(false);
      localStorage.setItem(
        "favorites",
        JSON.stringify(favoritesList.filter((idd: number) => idd !== id)),
      );
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`absolute right-2 top-0 fill-none text-red-600 opacity-20 active:animate-ping ${fav ? "fill-red-600 active:fill-none" : "fill-none active:fill-red-600"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-heart"
        width={25}
        height={25}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    </button>
  );
}

export const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {
  ssr: false,
});
