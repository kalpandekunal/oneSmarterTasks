import { useState } from "react";
import StarRating from "./StarRating";

import "./Ratings.css";

import React from 'react'

export const Ratings = () => {
    const [rating, setRating] = useState(4);

  return (
     <div className="rate">
      {/* Display rating component, passing rating and setRating */}
      <StarRating rating={rating} setRating={setRating} />
    </div>
  )
}
