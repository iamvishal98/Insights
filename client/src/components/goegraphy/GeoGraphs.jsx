import axios from "axios";
import React, { useEffect, useState } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "./geoData";
import "./geograph.css";
import useWindowDimensions from "../../utils/useWindowDimensions";
const GeoGraphs = () => {
  const [data, setData] = useState([]);
  const { height, width } = useWindowDimensions();

  const fetchLocations = async () => {
    const response = await axios.get("http://127.0.0.1:5050/client/geographs");
    if (response.data) {
      setData(response.data);
      console.log(response.data);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="geograph-container">
      <div className="header">
        <h2 className="header-name">GEOGRAPHY</h2>
        <p>See list of all your customers around the globe</p>
      </div>
      {data ? (
        <div className="map">
          <ResponsiveChoropleth
            data={data}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={width < 950 ? 80 : 120}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="#ffffff"
            enableGraticule={true}
            graticuleLineWidth={1}
            graticuleLineColor="#9a7979"
            isInteractive={width < 950 ? false : true}
          />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default GeoGraphs;
