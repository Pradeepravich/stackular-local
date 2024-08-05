import React, { FC, useState } from "react";
import "../style/style.css";

interface CityDetails {
  name: string;
  address: string;
  backgroundUrl: string;
}

interface Props {
  data: any;
}

const CityLocations: FC<Props> = ({ data }) => {
  const cityData: CityDetails[] = [
    {
      name: data?.elements?.city_name1?.value.replace(/(<([^>]+)>)/gi, ""),
      address: data?.elements?.city_address1?.value.replace(
        /(<([^>]+)>)/gi,
        ""
      ),
      backgroundUrl: data?.elements?.city_img1?.value[0]?.url,
    },
    {
      name: data?.elements?.city_name2?.value.replace(/(<([^>]+)>)/gi, ""),
      address: data?.elements?.city_address2?.value.replace(
        /(<([^>]+)>)/gi,
        ""
      ),
      backgroundUrl: data?.elements?.city_img2?.value[0]?.url,
    },
    {
      name: data?.elements?.city_name3?.value.replace(/(<([^>]+)>)/gi, ""),
      address: data?.elements?.city_address3?.value.replace(
        /(<([^>]+)>)/gi,
        ""
      ),
      backgroundUrl: data?.elements?.city_img3?.value[0]?.url,
    },
    {
      name: data?.elements?.city_name4?.value.replace(/(<([^>]+)>)/gi, ""),
      address: data?.elements?.city_address4?.value.replace(
        /(<([^>]+)>)/gi,
        ""
      ),
      backgroundUrl: data?.elements?.city_img4?.value[0]?.url,
    },
  ];

  const [cityName, setCityName] = useState<string | null>(null);
  const openGrid = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    serviceName: string
  ) => {
    setCityName(serviceName);
  };

  const handleMouseLeave = () => {
    setCityName(null);
  };

  return (
    <div className="image-part">
      <div className="options">
        {cityData.map((city, index) => (
          <div
            key={index}
            onMouseOver={(event) => openGrid(event, city.name)}
            className={`city_details ${cityName === city.name ? "active" : ""}`}
            onMouseLeave={handleMouseLeave}
            style={
              {
                "--optionBackground": `url(${city.backgroundUrl})`,
              } as React.CSSProperties
            }
          >
            <div className="office_places">
              <h2>{city.name}</h2>
            </div>
            <div
              className={`city_address ${
                cityName === city.name ? "show" : "hide"
              }`}
            >
              {city.address}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityLocations;
