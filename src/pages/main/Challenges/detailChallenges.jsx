import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getRequestListById,
  getFulfillmentByRequestId,
  getProcessFulfillment,
} from "../../../api/account";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { storeImageToFireBase } from "../../../utils/storeImageToFirebase.";
import { cancelRequestElement, createRequestElement, giveUpRequestElement } from "../../../api/element";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../configs/firebase.configs";
import point from "../../../assets/images/logoCover.png";
import { useDispatch } from "react-redux";
import { open } from "../../../store/modal/modal-slice";
import ConfirmModal from "../../../components/Modal/confirmModal";
import { toast } from "react-toastify";
import Fulfillment from "./fulfillment";
import CheckLoginModal from "../../../components/Modal/checkLoginModal";
import { loadingMoney } from "../../../store/profile/profile-slice";
function DetailChallenges() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { requestId } = useParams();
  const { isLogin, profileRes } = useIsLogin();
  const [selectedFile, setSelectedFile] = useState();
  const [data, setData] = useState(null);
  const [dataFulfillment, setDataFulfillment] = useState(null);
  const [dataFulfillmentPro, setDataFulfillmentPro] = useState(null);
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    getRequestListById(requestId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData(data.data);
      }
    });
    getFulfillmentByRequestId(requestId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setDataFulfillment(data.data);
      }
    });
    getProcessFulfillment(requestId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setDataFulfillmentPro(data.data);
      }
    });
  }, [requestId]);
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
          setImage([...image, imageUrl]);
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
  const submit = () => {
    createRequestElement(requestId).then((datas) => {
      if (!datas) {
        toast.error("Wallet is not enough!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      } else {
        const currentDate = new Date();
        setDoc(
          doc(db, "request", datas.data.fulfillmentResponse.id.toString()),
          {
            requestId: requestId,
            accountID: isLogin.id,
            createBy: data.createBy,
            background: "#212121",
            category: data.categoryName,
            createDate: currentDate.toISOString(),
            css: "",
            html: "",
            status: "DRAFT",
            subscription: "normal",
            theme: "dark",
            typeCSS: data?.typeCss || "css",
            imageUrl: profileRes.imageUrl,
            usernameCreator: profileRes.username,
          }
        );
        navigate(`/requestElement/${datas.data.fulfillmentResponse.id}`);
        dispatch(loadingMoney(datas.data.id));
      }
    });
  };
  const giveUpRequest = () => {
    giveUpRequestElement(requestId).then((data) => {
      if (data.statusCode) {
        console.log(data.error);
      } else {
        navigate("/request");
        toast.success("successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
        dispatch(loadingMoney(data.data.deposit));
      }
    });
  };

    const cancelRequest = () => {
      cancelRequestElement(requestId).then((data) => {
        if (!data) {
          toast.error("someone has accepted this request!", {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
          });
        } else {
          navigate("/request");
          toast.success("successfully!", {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
          });
        }
      });
    };
        const ViewStatus = ({ item }) => {
          const currentView = {
            AVAILABLE: (
              <div
                className="flex items-center gap-3 flex-wrap"
                onClick={() =>
                  dispatch(
                    open(
                      <ConfirmModal
                        title={"Accept request"}
                        onClick={() => submit()}
                        type="package"
                      />
                    )
                  )
                }
              >
                <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-yellow-600 text-yellow-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="w-5 h-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    ></path>
                  </svg>{" "}
                  Request started
                </div>
              </div>
            ),
            CANCELED: (
              <div className="flex items-center gap-3 flex-wrap">
                <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-dark-600 text-white">
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 36 36"
                    data-testid="close-icon"
                    fill="#ddd"
                  >
                    <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />
                  </svg>
                  Canceled
                </div>
              </div>
            ),
            PROCESSING: (
              <div className="flex items-center gap-3 flex-wrap">
                <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-blue-500 text-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    strokeWidth={2}
                  >
                    <path d="m4 12.374 5.351 5.346.428-.748a30.506 30.506 0 0 1 9.278-10.048L20 6.28" />
                  </svg>
                  Processing
                </div>
              </div>
            ),
            COMPLETED: (
              <div className="flex items-center gap-3 flex-wrap">
                <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-dark-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    strokeWidth={2}
                  >
                    <path d="m4 12.374 5.351 5.346.428-.748a30.506 30.506 0 0 1 9.278-10.048L20 6.28" />
                  </svg>
                  Finished
                </div>
              </div>
            ),
          }[item];
          return <> {currentView} </>;
        };
  return (
    data && (
      <div className="challenges-page pt-[40px] pb-[100px]">
        <section className="relative w-full group rounded-3xl overflow-hidden mb-10 transition-transform duration-300 flex bg-dark-800 m-auto flex-wrap-reverse min-h-[400px] max-w-[1200px] gap-10">
          <div className="absolute inset-0 flex items-start ms:justify-end">
            <div
              className="challenge-cover scale-105 group-hover:scale-110 transition-transform challenge-cover-shift"
              // style={{
              //   backgroundImage: `url(${data.avatar})`,
              // }}
            >
              <img src={data.avatar} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="pt-[65%] p-10 ms:pt-10 relative z-40 flex flex-col items-start flex-1 ms:max-w-[65%]">
            {isLogin ? (
              isLogin.id === data.createBy ? (
                <div
                  className="flex items-center gap-3 flex-wrap"
                  onClick={() =>
                    dispatch(
                      open(
                        <ConfirmModal
                          title={"Cancel request"}
                          onClick={() => cancelRequest()}
                        />
                      )
                    )
                  }
                >
                  <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-red-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="m16 7-1.106-2.211a3.236 3.236 0 0 0-5.788 0L8 7M4 7h16M6 7h12v8c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.165C14.796 21 13.864 21 12 21s-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C6 17.796 6 16.864 6 15V7Z" />
                    </svg>
                    Cancel request
                  </div>
                </div>
              ) : data.receiveBy === isLogin.id &&
                data.status === "PROCESSING" ? (
                <div
                  className="flex items-center gap-3 flex-wrap"
                  onClick={() =>
                    dispatch(
                      open(
                        <ConfirmModal
                          title={"Give up request"}
                          onClick={() => giveUpRequest()}
                          type="package"
                        />
                      )
                    )
                  }
                >
                  <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-dark-600 text-white">
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 36 36"
                      data-testid="close-icon"
                      fill="#ddd"
                    >
                      <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />
                    </svg>
                    Give up request
                  </div>
                </div>
              ) : (
                <ViewStatus item={data.status} />
              )
            ) : (
              <div
                className="flex items-center gap-3 flex-wrap"
                onClick={() => dispatch(open(<CheckLoginModal />))}
              >
                <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-yellow-600 text-yellow-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="w-5 h-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    ></path>
                  </svg>{" "}
                  Request started
                </div>
              </div>
            )}
            <div className="mt-6 mb-4 text-4xl font-bold">
              {data.categoryName}
            </div>
            <div className="mb-2 text-lg italic font-semibold transition-colors group-hover:text-fuchsia-400">
              {data.name}
            </div>
            <p className="text-base text-gray-400">{data.description}</p>
            <footer className="flex flex-wrap items-end flex-1 gap-6 mt-8 font-semibold">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M8 2v2.128M8 6V4.128M16 2v2.128M16 6V4.128M20.96 10c.04.788.04 1.755.04 3 0 2.796 0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 22 14.796 22 12 22c-2.796 0-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 17.194 3 15.796 3 13c0-1.245 0-2.212.04-3m17.92 0c-.05-.982-.163-1.684-.417-2.296a6 6 0 0 0-3.247-3.247A5.136 5.136 0 0 0 16 4.127M20.96 10H3.04m0 0c.05-.982.163-1.684.417-2.296a6 6 0 0 1 3.247-3.247A5.135 5.135 0 0 1 8 4.127m0 0C8.941 4 10.172 4 12 4c1.828 0 3.059 0 4 .128" />
                </svg>
                <span className="item__text">
                  {new Date(data.startDate).toDateString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={point} alt="" style={{ width: "24px" }} />
                <span className="item__text">{data.reward}</span>
              </div>
            </footer>
          </div>
        </section>
        <section className="max-w-[1200px] w-full my-14 mx-auto">
          <div
            className="cards-container"
            style={{
              gridTemplateColumns: "repeat(auto-fill,minmax(294px,1fr))",
            }}
          >
            {image.length > 0 &&
              image.map((item, index) => (
                <img
                  src={item}
                  alt=""
                  style={{ width: "390px", height: "300px" }}
                  key={index}
                />
              ))}
            {data.createBy === isLogin.id && image.length !== 3 && (
              <div className="relative h-[300px] flex items-center justify-center cursor-pointer false w-full border-2 border-gray-600 bg-transparent border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {!isLoading && (
                  <input
                    type="file"
                    name="profileImageUrl"
                    accept="image/*"
                    onChange={onSelectFile}
                    id="upload"
                    style={{
                      cursor: "pointer",
                      height: "100%",
                      position: "absolute",
                      opacity: " 0",
                    }}
                  />
                )}

                <span className="flex items-center gap-3 mt-2 font-sans font-semibold text-gray-600 text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-auto text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
                  </svg>
                  {isLoading ? "loading" : "add image!"}
                </span>
              </div>
            )}
          </div>
        </section>
        <section className="max-w-[1200px] w-full my-14 mx-auto">
          <div className="mt-8">
            <h2 className="text-gray-300 text-[30px] text-gray font-bold mb-5">
              Join request
            </h2>
            <div
              className="cards-container w-full"
              style={{
                gridTemplateColumns: "repeat(auto-fill,minmax(294px,1fr))",
              }}
            >
              {dataFulfillment?.length > 0 &&
                dataFulfillment.map((item, index) => (
                  <Fulfillment item={item} index={index} />
                ))}
              {dataFulfillmentPro?.length > 0 &&
                dataFulfillmentPro.map((item, index) => (
                  <Fulfillment item={item} index={index} />
                ))}
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default DetailChallenges;
