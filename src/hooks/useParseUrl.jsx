import { useLocation } from "react-router-dom";

export const useParseUrl = () => {
  const location = useLocation();
  const search = {};
  const pathname = location.pathname.slice(1);
  var params = location.search.substring(1).split("&");

  for (var i in params) {
    if (params[i] === "") continue;
    var pair = params[i].split("=");
    search[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return { search, pathname };
};
