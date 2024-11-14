import React from "react";
import { useParams } from "react-router-dom";

function EventDetail() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail</h1>
      <h2>{params.id}</h2>
    </>
  );
}

export default EventDetail;
