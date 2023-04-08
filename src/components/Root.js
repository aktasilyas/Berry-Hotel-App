import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import DropDown from "./DropDown";
import { allData } from "../data/index";
import Table from "./Table";
import ImageCard from "./ImageCard";
const Root = () => {
  const [languageData, setLanguageData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const handleLanguageClick = (item) => {
    setImageData([]);
    const filteredData = allData.languageTableData.filter(
      (x) => x.type === item.type
    );
    setLanguageData(filteredData);
  };
  const handleImageClick = (item) => {
    setLanguageData([]);
    const filteredData = allData.imageTableData.filter(
      (x) => x.type === item.type
    );
    setImageData(filteredData);
  };
  return (
    <div className="d-flex w-100 justify-content-start align-items-start p-5">
      <Card className="w-100 mx-5">
        <CardHeader>Filter</CardHeader>
        <CardBody className="p-5 d-flex justify-content-center align-items-center flex-column">
          <div className="d-flex gap-2">
            <DropDown
              text={"Bilgi Formu"}
              data={allData.languageDropdownData}
              handleClick={handleLanguageClick}
            />
            <DropDown
              text={"Resimler"}
              data={allData.imageDropdownData}
              handleClick={handleImageClick}
            />
          </div>
          <hr />
          <div style={{ maxHeight: "400px", overflow: "auto" }}>
            {languageData.length > 0 && <Table data={languageData} />}
            {imageData.length > 0 && <ImageCard data={imageData} />}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Root;
