import React from "react";
import MenuItem from "./MenuItem.jsx";

const MealsList = (props) => {
  const SPECIALS = props.items.filter((item) => item.id.includes("ms"));
  const NIGIRIS = props.items.filter((item) => item.id.includes("mn"));
  const MAKIS = props.items.filter((item) => item.id.includes("mm"));

  const specialsContent = (
    <ul>
      {SPECIALS.map((item) => (
        <MenuItem key={item.id} id={item.id} item={item} />
      ))}
    </ul>
  );
  const nigirisContent = (
    <ul>
      {NIGIRIS.map((item) => (
        <MenuItem key={item.id} id={item.id} item={item} />
      ))}
    </ul>
  );
  const makisContent = (
    <ul>
      {MAKIS.map((item) => (
        <MenuItem key={item.id} id={item.id} item={item} />
      ))}
    </ul>
  );

  return (
    <div>
        <h3>Specials</h3>
        {specialsContent}
        <h3>Nigiri</h3>
        {nigirisContent}
        <h3>Maki</h3>
        {makisContent}
    </div>
  );
};

export default MealsList;
