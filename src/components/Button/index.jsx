import cls from "classnames";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

function AppButton({
  type,
  children,
  btnType,
  isSizeLarge,
  Icon,
  img,
  isLoading,
  loadingPosition,
  htmlType,
  onClick,
  disabled,
  url,
  ...restProps
}) {
  const classes = cls(styles.button, {
    [styles.button_0]: btnType === "button_0",
    [styles.button_1]: btnType === "button_1",
    [styles.button_2]: btnType === "button_2",
  });

  if (htmlType === "a") {
    return (
      <>
        <a
          className={classes}
          {...restProps}
          onClick={onClick}
          disabled={disabled}
        >
          {Icon && Icon} {img && <img src={img} alt="" />}
          {children}
        </a>
      </>
    );
  }

  if (htmlType === "link") {
    return (
      <Link to={url} className={classes} {...restProps}>
        {Icon && Icon}
        {img && <img src={img} alt="" />} {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...restProps}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && Icon} {children}
    </button>
  );
}

export default AppButton;
