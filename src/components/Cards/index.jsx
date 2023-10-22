import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { doc, getDoc } from "firebase/firestore";
// import { ref, onValue, update } from "firebase/database";
// import { database } from "../../configs/firebase.configs";
import RenderElement from "./renderElement";
import SkeletonElement from "../Skeleton/skeletonElement";
import Pagination from "../Pagination";

function Cards({ category }) {
  // const [state, setState] = useState(false);
  // const [test, setTest] = useState(null);
  const [totalPages, setTotalPages] = useState(10);
  const [page, setPage] = useState(4);
  const { elements } = useSelector((state) => state.element);
  // var dataReal;
  // const data = {
  //   stateId: state,
  // };
  // set(ref(database, "state/" + state), data)
  //   .then(() => {
  //     console.log("Success");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // const testUp = () => {
  //   setState(!state);
  //   const updates = {};
  //   updates["state/" + 1] = {
  //     check: !state,
  //   };
  //   update(ref(database), updates)
  //     .then(() => {
  //       // Success
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const getUserData = () => {
  //   const cartRef = ref(database, "/state/" + 1);
  //   onValue(cartRef, (snapshot) => {
  //     const data = snapshot.val();
  //     if (!!data) {
  //       console.log("data", data);
  //       dataReal = data.check;
  //       setTest(data.check);
  //     } else {
  //       console.log("Data not found");
  //     }
  //   });
  // };
  // const writeUserData = () => {
  //     set(ref(database, "state/" + 1), {
  //       check: true,
  //     });
  // };
        // set(ref(database, "state/" + 1), {
        //   check: true,
        // });
  // useEffect(
  //   () => {
  //     //  writeUserData();
  //     getUserData();
  //   },
  //   // eslint-disable-next-line
  //   []
  // );

  return elements?.length === 0 ? (
    <SkeletonElement total={10} />
  ) : (
    <>
      <section className="cards-container cards-container--all">
        {elements?.length > 0
          ? elements.map((post, index) => (
              <article
                className="card card--checkbox dark-background h-full"
                key={index}
              >
                <RenderElement post={post} />
              </article>
            ))
          : "not found"}
      </section>
      <Pagination value={page} range={totalPages} onChange={setPage} />
    </>
  );
}

export default Cards;
