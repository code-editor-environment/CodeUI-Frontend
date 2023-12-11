export function validateLogin(values) {
  let errors = {};
  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}
export function validateDonate(values) {
  let errors = {};
  if (!values.money) {
    errors.money = "Money is required";
  } else if (values.money < 1000) {
    errors.money = "Money must be greater than 1000";
  }
  if (!values.orderDescription) {
    errors.orderDescription = "orderDescription is required";
  }
  return errors;
}
export function validateRegister(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 5) {
    errors.username = "Username must be 5 or more characters";
  }
  if (!values.fullName) {
    errors.fullName = "fullName is required";
  } else if (values.fullName.length < 5) {
    errors.fullName = "FullName must be 5 or more characters";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (
    !/\d/.test(values.password) ||
    !/[!@#$%&?.]/g.test(values.password) ||
    !/[A-Z]/g.test(values.password)
  ) {
    errors.password =
      "Password must contains at least 1 number, at least 1 capital character, 1 special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password do not match";
  }
  return errors;
}
export function validateForgotPassword(values) {
  let errors = {};
  if (!values.forgotPassword) {
    errors.forgotPassword = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.forgotPassword)) {
    errors.forgotPassword = "Email address is invalid";
  }
  return errors;
}
export function validateResetPassword(values) {
  let errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (
    !/\d/.test(values.password) ||
    !/[!@#$%&?.]/g.test(values.password) ||
    !/[A-Z]/g.test(values.password)
  ) {
    errors.password =
      "Password must contains at least 1 number, at least 1 capital character, 1 special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password does not match.";
  }
  return errors;
}

export function validateChangePassword(values) {
  let errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (
    !/\d/.test(values.password) ||
    !/[!@#$%&?.]/g.test(values.password) ||
    !/[A-Z]/g.test(values.password)
  ) {
    errors.password =
      "Password must contains at least 1 number, at least 1 capital character, 1 special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password does not match.";
  }
  return errors;
}

export function validateUpdateProfile(values) {
  let errors = {};
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 5) {
    errors.username = "Username must be 5 or more characters";
  }
  if (!values.firstName) {
    errors.firstName = "firstName is required";
  } else if (values.firstName.length < 5) {
    errors.firstName = "fullName must be 5 or more characters";
  }
  return errors;
}
export function validateRequest(values) {
  let errors = {};
  if (!values.categoryName) {
    errors.categoryName = "categoryName is required";
  }
  if (!values.reward) {
    errors.reward = "reward is required";
  }
  //  else if (values.reward < 1000) {
  //   errors.reward =
  //     "Money must be greater than 10.000 and smaller than 10.000.000";
  // }
  if (!values.name) {
    errors.name = "name is required";
  }
  if (!values.deadline) {
    errors.deadline = "deadline is required";
  }
  return errors;
}