import React, { useMemo } from "react";
import AppButton from "../../../../components/Button";
import SkeletonElement from "../../../../components/Skeleton/skeletonElement";
import RenderElement from "../../../../components/Cards/renderElement";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useTimeBasedRandom from "../../../../core/useTimeBasedRandom";
function Buttons({ category }) {
   const { elements } = useSelector((state) => state.element);
  const filteredElements = useMemo(() => {
    return elements
      ?.filter((element) => element.category === category);
  }, [elements, category]);
  const { randomizedArray } = useTimeBasedRandom(filteredElements);
  const renderElements = useMemo(() => {
    return randomizedArray
      .filter((post) => {
        return post.status === "APPROVED";
      })
      .slice(0, 6);
  }, [randomizedArray]);
  return (
    <section className="posts-preview" style={{ width: "100%" }}>
      <div className="posts-header">
        <Link to={`/elements?category=${category}`}>
          <h3 className="preview-heading">{category}</h3>
        </Link>
      </div>
      {renderElements?.length > 0 ? (
        <div className="content">
          {renderElements.map((post, index) => (
            <RenderElement post={post} key={index} />
          ))}
        </div>
      ) : (
        <SkeletonElement total={6} />
      )}
      <AppButton
        children={`See all ${category}s`}
        btnType="button_2"
        htmlType="link"
        url={`/elements?category=${category}`}
      />
    </section>
  );
}

export default Buttons;
