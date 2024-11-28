
import React from 'react';
import { useParams } from 'react-router-dom';

function FeatureDetail() {
  const { id } = useParams(); 

  return <h1>Feature Details for Feature {id}</h1>;
}

export default FeatureDetail;
