import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function UserRating() {
  const [value, setValue] = useState(2.5);

  return (
    <div>
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
}

export default UserRating;
