import { useEffect, useState } from "react";
import { storeImageToFireBase } from "../../utils/storeImageToFirebase.";
import { db, storage } from "../../configs/firebase.configs";
import { doc, updateDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
function ImageHost({ elementById, postId }) {
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(
    elementById?.image ? elementById?.image : []
  );
  const [isLoading, setIsLoading] = useState(false);
    const [copy, setCopy] = useState(false);
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
          updateDoc(doc(db, "elements", postId), {
            image: [imageUrl, ...image],
          });
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
  const deleteImg = (img) => {
    deleteObject(ref(storage, img))
      .then(() => {
          setImage(image.filter((e) => e !== img));
          updateDoc(doc(db, "elements", postId), {
            image: image.filter((e) => e !== img),
          });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.error("Error deleting file: ", error);
      });
  }
    const copyImg = (img) => {
      navigator.clipboard.writeText(img);
      setCopy(true);
      setTimeout(function () {
        setCopy(false);
      }, 1000);
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
            <div className="text-center">
              <div className="relative">
                <img
                  src={img}
                  alt=""
                  key={i}
                  className="inline"
                  style={{ height: "150px", width: "150px" }}
                />
                <span
                  className="absolute text-red-400 points-tag p-2 h-6 rounded-lg inline-flex top-[-13px] right-0"
                  onClick={() => deleteImg(img)}
                >
                  x
                </span>
              </div>
              <span
                className="points-tag mt-3 pl-3.5 pr-4 rounded-lg inline-flex"
                onClick={() => copyImg(img)}
              >
                {copy ? "✔" : "copyImg"}
              </span>
            </div>
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
                zIndex: "1",
              }}
            />
          )}
          <div class="relative h-[200px] flex items-center justify-center cursor-pointer false w-full border-2 border-gray-600 bg-transparent border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="flex items-center gap-3 mt-2 font-sans font-semibold text-gray-600 text-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-auto text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageHost;
