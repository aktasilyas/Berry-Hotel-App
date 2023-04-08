import React from "react";
import { Card, CardBody, CardFooter, Button } from "reactstrap";
import * as Icon from "react-feather";
import image from "../assets/all.jpg";
const ImageCard = ({ data }) => {
  const downloadImage = async (imageName) => {
    const response = await fetch(require(`../assets/${imageName}`));
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // const resizeImage = (imagePath, width, height, imageName) => {
  //   // Yeni bir Image nesnesi oluşturun ve resim dosyasının yolunu ayarlayın.
  //   var img = new Image();
  //   img.src = imagePath;

  //   // Resim yüklendiğinde çalışacak bir fonksiyon tanımlayın.
  //   img.onload = function () {
  //     // Yeni bir canvas elementi oluşturun.
  //     var canvas = document.createElement("canvas");

  //     // Resmi canvas üzerine çizin.
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     var ctx = canvas.getContext("2d");
  //     ctx.drawImage(img, 0, 0);

  //     // Resmin boyutunu küçültün.
  //     var resizedCanvas = document.createElement("canvas");
  //     resizedCanvas.width = width;
  //     resizedCanvas.height = height;
  //     var resizedCtx = resizedCanvas.getContext("2d");
  //     resizedCtx.drawImage(canvas, 0, 0, width, height);

  //     // Küçültülmüş resmi indirin.
  //     var downloadLink = document.createElement("a");
  //     downloadLink.download = imageName;
  //     downloadLink.href = resizedCanvas.toDataURL("image/jpeg", 0.8);
  //     downloadLink.click();
  //   };
  // };
  function resizeImage(url) {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const link = document.createElement("a");
      link.download = "image.jpg";
      link.href = canvas.toDataURL("image/jpeg", 0.5); // Kaliteyi buradan ayarlayabilirsiniz.
      link.click();
    };
    img.src = url;
  }
  return (
    <div className="d-flex justify-content-center gap-2 flex-wrap">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <CardBody>
              <img
                src={require(`../assets/${item.image}`)}
                width={200}
                height={100}
              />
            </CardBody>
            <CardFooter className="d-flex gap-2">
              <button
                className="btn btn-primary"
                style={{ fontSize: 12 }}
                onClick={() => downloadImage(item.image)}
              >
                <Icon.Download size={15} />
                <span>Yüksek Çözünürlük</span>
              </button>
              <button
                className="btn btn-dark"
                style={{ fontSize: 12 }}
                onClick={() => resizeImage(require(`../assets/${item.image}`))}
              >
                <Icon.Download size={15} />
                <span>Düşük Çözünürlük</span>
              </button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ImageCard;
