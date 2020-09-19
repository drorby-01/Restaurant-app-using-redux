import React, { useState, useContext } from "react";
import { Star } from "react-bootstrap-icons";
import {useSelector,useDispatch} from "react-redux"

interface IProps {
  stars: number;
  starsColor?: string;
}

export default function Rating(props: IProps) {
  const starsColor = useSelector((state:any)=>state.configReducer.starsColor)

  if (typeof props.stars !== "number") return <span> No rating</span>;
  const roundedStars: number = Math.ceil(props.stars);
  const numberOfStars = new Array(roundedStars).fill(true, 0);
  return (
    <div>
      {numberOfStars.map((_, index) => (
        <Star
          key={index}
          fill={starsColor || "yellow"}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}
