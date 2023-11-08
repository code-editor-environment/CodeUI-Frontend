import React, { useEffect, useState } from "react";
import AppButton from "../../../../components/Button";
import SkeletonElement from "../../../../components/Skeleton/skeletonElement";
import RenderElement from "../../../../components/Cards/renderElement";
import { getListElements } from "../../../../api/element";
import { Link } from "react-router-dom";
function Buttons({ category }) {
  const [post, setPost] = useState(0);
  useEffect(() => {
    getListElements({
      category,
      page: 1,
      pageSize: 6,
      filter: null,
      creator: null,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPost(data.data);
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <section className="posts-preview" style={{ width: "100%" }}>
      <div className="posts-header">
        <Link to={`/elements?category=${category}`}>
          <h3 className="preview-heading">{category}s</h3>
        </Link>
      </div>
      {post?.length > 0 ? (
        <div className="content">
          {post.map((post, index) => (
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
