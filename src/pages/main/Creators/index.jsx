import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import points from "../../../assets/images/logoCover.png";
import useQuery from "../../../hooks/useQuery";
function Creators() {
  const query = useQuery();
  const text = query.get("text");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      fetch(
        `${process.env.REACT_APP_API_URL}/users?page=1&perPage=10&name=${
          text || ""
        }`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result.list);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    fetchData();
  }, [text]);
  return (
    <div className="creators-page">
      <div>
        <div class="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div class="absolute inset-x-0 top-0 h-[32rem] bg-[url('/images/background-gradient/1-light.jpg')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/images/background-gradient/1-dark.png')]"></div>
      </div>
      <h1 className="heading">Top Creators</h1>
      <section className="creators">
        {data.length > 0 ? (
          <>
            {data.map((user, index) => (
              <article className="creator" key={index}>
                <span className="rank">{index + 1}</span>
                <img className="avatar" src={user.avatar_url} alt="" />
                <span className="username">{user.name}</span>
                <Link to={`/profile/${user.login}`} className="number-of-posts">
                  <span className="span-gradient-lighterMain">
                    Visit profile
                  </span>
                </Link>
                <div className="points-tag">
                  <img src={points} alt="" /> 100
                </div>
              </article>
            ))}
          </>
        ) : (
          "not found"
        )}
      </section>
      <button className="button cre-button">See all Creator</button>
    </div>
  );
}

export default Creators;
