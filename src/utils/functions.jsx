function separateCountryCodeAndPhoneNumber(phoneNumber, countryCode) {
  for (let i = 0; i < countryCode.length; i++) {
    const { code } = countryCode[i];

    if (phoneNumber?.startsWith(code)) {
      const codeCountry = code;
      const phoneNumberWithoutCode = phoneNumber.slice(code.length);
      return {
        phoneNumberCode: codeCountry,
        phoneNumberValue: phoneNumberWithoutCode,
      };
    }
  }

  return {
    phoneNumberCode: "+84",
    phoneNumberValue: "",
  };
}

const joinCodePhoneNumber = (code, phoneNumberValue) => {
  let phoneNumberValid = phoneNumberValue;
  if (phoneNumberValid.startsWith("0")) {
    phoneNumberValid = phoneNumberValid.substring(1);
  }
  phoneNumberValid = phoneNumberValid.replace(/[\s-]/g, "");
  return code + phoneNumberValid;
};

const cloneObjectWithChildPropertyValues = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const clonedObj = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Check if the property is an object with a "value" property
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        "value" in obj[key]
      ) {
        clonedObj[key] = obj[key].value;
      } else {
        clonedObj[key] = cloneObjectWithChildPropertyValues(obj[key]);
      }
    }
  }

  return clonedObj;
};

export {
  separateCountryCodeAndPhoneNumber,
  joinCodePhoneNumber,
  cloneObjectWithChildPropertyValues,
};
