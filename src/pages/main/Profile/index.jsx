import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { actLogout, getProfile } from "../../../store/profile/profile-slice";
import {
  getProfiles,postFollowCreator,
} from "../../../api/account";
import AppButton from "../../../components/Button";
import { open } from "../../../store/modal/modal-slice";
import UpdateProfileModal from "../../../components/Modal/updateProfileModal";
import ElementView from "./elementView";
import DonationModal from "../../../components/Modal/donationModal";
// import styles from "./profile.module.scss";
// import Element from './../Element/index';
function Profile() {
  const { accountID } = useParams();
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const { profiles } = useSelector((state) => state.profile);
  // const [postReview, setPostReview] = useState([]);
  const [follow, setFollow] = useState(false);
  // const [loading, setLoading] = useState(false);
  useEffect(
    () => {
      window.scrollTo({ top: 0 });
      // setLoading(true);
      getProfiles(accountID).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.data);
          dispatch(getProfile(data.data));
          setFollow(data.data.isFollow);
        }
        // setLoading(false);
      });
      // getFollower(username).then((data) => {
      //   if (data.error) {
      //     console.log(data.error);
      //   } else {
      //     setFollower(data.metadata?.total);
      //   }
      // });
      // getFollowing(username).then((data) => {
      //   if (data.error) {
      //     console.log(data.error);
      //   } else {
      //     setFollowing(data.metadata?.total);
      //   }
      // });
    },
    // eslint-disable-next-line
    [accountID]
  );
  const onUpdateProfileModal = () => {
    dispatch(open(<UpdateProfileModal />));
  };
  const onDonationModal = () => {
    dispatch(open(<DonationModal />));
  };
  function handleLogout(e) {
    e.preventDefault();
    dispatch(actLogout());
  }
      const onFollow =() => {
        setFollow(!follow);
      const timeout = setTimeout(() => {
        postFollowCreator(profiles.username);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  return (
    <main className="profile-page">
      {!profiles ? (
        ""
      ) : (
        <>
          <section className="profile justify-between items-start mr-5">
            <div className="flex justify-between">
              <img
                className="profile-image"
                src={profiles.imageUrl}
                alt={profiles.username}
              />
              <aside>
                <h1 className="username">
                  {profiles.firstName || profiles.username}
                </h1>
                <h4 className="profile-name">@{profiles.username}</h4>
                <div className="bio">{profiles.description}</div>
                <div className="details">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1v2zm-5-2h2v-8h-6v8h2v-6h2v6zm0-10V5H5v14h6V9h6zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm0-8h2v2H7V7z"
                      />
                    </svg>
                    {profiles.company}
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                      />
                    </svg>
                    {profiles.location}
                  </span>
                  <Link to={profiles.html_url} target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                      />
                    </svg>
                    {profiles.login}
                  </Link>
                </div>
                <div className="details">
                  <div className="detailTag">
                    <span>
                      {follow
                        ? profiles.totalFollower + 1
                        : profiles.totalFollower}
                    </span>
                    <span>Follower</span>
                  </div>
                  <div className="detailTag">
                    <span>{profiles.totalFollowing}</span>
                    <span>Following</span>
                  </div>
                  <div className="detailTag">
                    <span>{profiles.totalApprovedElement}</span>
                    <span>Total Elements</span>
                  </div>
                  {/* <div className="detailTag">
                  <span>100</span>
                  <span>favorited </span>
                </div> */}
                </div>
              </aside>
            </div>
            {isLogin &&
              (isLogin.id === accountID ? (
                <div className="buttons">
                  <AppButton
                    children="Edit profile"
                    btnType="button_0"
                    Icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"
                        ></path>
                      </svg>
                    }
                    onClick={onUpdateProfileModal}
                  />
                  <AppButton
                    children="Log out"
                    btnType="button_2"
                    onClick={handleLogout}
                    Icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"
                        />
                      </svg>
                    }
                  />
                </div>
              ) : (
                <div className="buttons">
                  <AppButton
                    children={follow ? "UnFollow" : "Follow"}
                    btnType="button_0"
                    Icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                        />
                      </svg>
                    }
                    onClick={onFollow}
                  />
                  <AppButton
                    children="Donate"
                    btnType="button_1"
                    Icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z"
                        />
                      </svg>
                    }
                    onClick={onDonationModal}
                  />
                </div>
              ))}
          </section>
          <ElementView />
        </>
      )}
    </main>
  );
}

export default Profile;
