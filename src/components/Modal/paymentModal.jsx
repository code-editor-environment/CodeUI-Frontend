import { validateDonate } from "../validateInput/validateInput";
import Validate from "./../validateInput/index";
import { useDispatch } from "react-redux";
import { close } from "../../store/modal/modal-slice";
import { postPayment } from "../../api/account";
import { useIsLogin } from "./../../hooks/useIsLogin";
import { useEffect } from "react";
import { useState } from "react";

const tags = ["10000", "15000", "20000", "25000", "30000", "35000"];
function PaymentModal() {
  const { isLogin } = useIsLogin();
  const dispatch = useDispatch();
  function donate() {
    postPayment({ ...values, url: isLogin.id }).then((data) => {
      if (data.data?.message === "ok") {
        window.location.href = data.data.paymentUrl;
        dispatch(close());
      } else {
        console.log(data);
      }
    });
  }
  const [values, setValues] = useState({
    money: 10000,
    orderDescription: "Deposit money into your account",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        donate();
      }
    },
    // eslint-disable-next-line
    [errors]
  );

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validateDonate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
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
          <div className="flex custom-scrollbar items-start flex-wrap gap-1 mt-3 max-lg:h-[200px] overflow-y-auto">
            {tags.map((tag, index) => (
              <span
                className={`bg-dark-600 cursor-pointer hover:bg-dark-500 text-gray-200 rounded px-2 py-1`}
                key={index}
                onClick={() =>
                  setValues((values) => ({
                    ...values,
                    money: tag,
                  }))
                }
              >
                {tag}
              </span>
            ))}
          </div>
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
