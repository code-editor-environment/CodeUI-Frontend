import useForm from "./../../hooks/useForm";
import { validateDonate } from "../validateInput/validateInput";
import Validate from "./../validateInput/index";
import { useDispatch } from "react-redux";
import { close } from "../../store/modal/modal-slice";
import { postPayment } from "../../api/account";
import { useIsLogin } from './../../hooks/useIsLogin';

function PaymentModal() {
  const { isLogin } = useIsLogin();
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleSubmit } = useForm(
    donate,
    validateDonate
  );
  function donate() {
    postPayment({ ...values, url: isLogin.id}).then((data) => {
      if (data.data?.message === "ok") {
        window.location.href = data.data.paymentUrl;
        dispatch(close());
      } else {
        console.log(data);
      }
    });
  }
  // const formatCurrency = (value) => {
  //   if (value) {
  //     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  //   }
  // };
  return (
    <div className="customModal--sign-in options-modal">
      <h3 className="heading">Payment</h3>
      <form className="form-login" onSubmit={handleSubmit} noValidate>
        <div className="form-label grid-cols-6 relative">
          <label>Money VND</label>
          <input
            type="number"
            name="money"
            placeholder="Enter your money"
            onChange={handleChange}
            value={values.money}
            required
          />
          <Validate errors={errors.money} />
        </div>
        <div className="form-label grid-cols-6 relative">
          <label>description</label>
          <input
            type="text"
            name="orderDescription"
            placeholder="Enter your order description"
            onChange={handleChange}
            value={values.orderDescription}
            required
          />
          <Validate errors={errors.orderDescription} />
        </div>
        <div
          className="form-label grid-cols-6"
          style={{ display: "grid", justifyContent: "end" }}
        >
          <button className="button sup-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentModal;
