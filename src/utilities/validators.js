function emailValidator(value) {
  return (
    (value &&
      !!value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) ||
    false
  );
}

function nameValidator(value) {
  return (
    (value && !!value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)) ||
    false
  );
}

function requiredValidator(value) {
  return (value !== undefined && value !== null && value !== "") || false;
}

export { emailValidator, nameValidator, requiredValidator };
