import { useEffect, useState } from "react";
import { storeImageToFireBase } from "../../utils/storeImageToFirebase.";
function ImageHost({elementById}) {
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(elementById?.image);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const uploadImage = async () => {
        setIsLoading(true);
        if (!selectedFile) {
          setIsLoading(false);
          return;
        }
        const { isSuccess, imageUrl, message } = await storeImageToFireBase(
          selectedFile
        );
        if (isSuccess) {
          setImage([imageUrl, ...image]);
          setIsLoading(false);
          return imageUrl;
        } else {
          console.log(message);
        }
        setIsLoading(false);
      };
      uploadImage();
    },
    // eslint-disable-next-line
    [selectedFile]
  );
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="options-modal">
      <h3 className="heading">Your Image</h3>
      <div
        className="cards-container"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}
      >
        {image?.length > 0 &&
          image.map((img, i) => (
            <img
              src={img}
              alt=""
              key={i}
              style={{ height: "150px", width: "150px" }}
            />
          ))}
        <div
          style={{
            position: "relative",
          }}
        >
          {image?.length <= 2 && !isLoading && (
            <input
              type="file"
              name="profileImageUrl"
              accept="image/*"
              onChange={onSelectFile}
              id="upload"
              style={{
                cursor: "pointer",
                position: "absolute",
                left: "0",
                width: "100%",
                height: "100%",
                opacity: " 0",
              }}
            />
          )}
          <img
            src="https://cdn-icons-png.flaticon.com/512/10054/10054290.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ImageHost;
