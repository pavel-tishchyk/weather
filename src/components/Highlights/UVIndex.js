import React from "react";
import Fade from "../Fade";
import Card from "../Card";
import Progress from "../Progress";

function UVIndex({uv}) {
  return(
    <Fade transitionKey={uv}>
      <Card className="uv-card" title="UV Index">
        <div className="card-body">
          <Progress value={uv}/>
        </div>
      </Card>
    </Fade>
  );
}

export default UVIndex;
