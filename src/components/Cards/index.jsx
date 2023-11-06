import React from "react"
import { useSelector } from "react-redux";
import RenderElement from "./renderElement";
import SkeletonElement from "../Skeleton/skeletonElement";
import Pagination from "../Pagination";

function Cards({ totalPages, page, setPage, loading }) {
  const { elements } = useSelector((state) => state.element);
  return !elements ? (
    <SkeletonElement total={10} />
  ) : (
    <>
      <section className="cards-container cards-container--all">
        {elements?.length > 0
          ? elements.map((post, index) => (
              <RenderElement post={post} key={index} />
            ))
          : "not found"}
      </section>
      {totalPages > 1 && (
        <Pagination value={page} range={totalPages} onChange={setPage} />
      )}
    </>
  );
}

export default Cards;
