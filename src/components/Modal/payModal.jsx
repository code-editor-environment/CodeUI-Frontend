import { useEffect } from "react";
import { postConfirmPayment } from "../../api/account";

function PayModal({ url, datas, setData }) {
  useEffect(
    () => {
      postConfirmPayment(url).then((data) => {
        setData(datas + data.data.amount);
      });
    }, // eslint-disable-next-line
    []
  );
  return (
    <div className="customModal--sign-in options-modal">
      <img
        src="https://img.icons8.com/?size=480&id=pIPl8tqh3igN&format=png"
        alt=""
        style={{ width: "200px" }}
      />
      <h3 className="heading">Payment successfully</h3>
    </div>
  );
}

export default PayModal;
