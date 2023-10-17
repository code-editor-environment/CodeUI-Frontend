import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListElementById } from "../api/element";
import { getElementById } from "../store/element/elements-slice";
function Integration() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { elementById } = useSelector((state) => state.element);
  useEffect(
    () => {
      window.scrollTo({ top: 0 });
      getListElementById(postId).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          dispatch(getElementById(data));
        }
      });
    },
    // eslint-disable-next-line
    [postId]
  );

  return (
    <main className="wrapper">
      {elementById && (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `.prefix123 ${elementById.css}`,
            }}
          />
          <div
            className="preview prefix123"
            dangerouslySetInnerHTML={{
              __html: elementById.html,
            }}
          ></div>
        </div>
      )}
    </main>
  );
}

export default Integration;
