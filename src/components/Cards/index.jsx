import React from "react";
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
        {elements?.length > 0 ? (
          elements.map((post, index) => (
            <RenderElement post={post} key={index} />
          ))
        ) : (
          <div className="flex items-center justify-center col-span-full border-dashed border-gray-500 border-2  min-h-[300px] rounded-2xl">
            <div className="flex flex-col items-center font-semibold text-gray-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mb-4 text-gray-500"
              >
                <path
                  d="M9.33333 19.7435C7.75238 20.0082 6.15473 20.0683 4.58027 19.9226C4.44521 19.9101 4.32574 19.8519 4.23691 19.7631C4.14808 19.6743 4.08989 19.5548 4.0774 19.4197C3.93174 17.8453 3.99179 16.2476 4.25652 14.6667M14.6667 19.7435C16.2476 20.0082 17.8453 20.0683 19.4197 19.9226C19.5548 19.9101 19.6743 19.8519 19.7631 19.7631C19.8519 19.6743 19.9101 19.5548 19.9226 19.4197C20.0683 17.8453 20.0082 16.2476 19.7435 14.6667M4.25652 9.33333C3.99179 7.75238 3.93174 6.15473 4.0774 4.58027C4.08989 4.44521 4.14808 4.32574 4.23691 4.23691C4.32574 4.14808 4.44521 4.08989 4.58027 4.0774C6.15473 3.93174 7.75238 3.99179 9.33333 4.25652M14.6667 4.25652C16.2476 3.99179 17.8453 3.93174 19.4197 4.0774C19.5548 4.08989 19.6743 4.14808 19.7631 4.23691C19.8519 4.32574 19.9101 4.44521 19.9226 4.58027C20.0683 6.15473 20.0082 7.75238 19.7435 9.33333"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Nothing here, try to tweak your filters or adjust the search query
            </div>
          </div>
        )}
      </section>
      {totalPages > 1 && (
        <Pagination value={page} range={totalPages} onChange={setPage} />
      )}
    </>
  );
}

export default Cards;
