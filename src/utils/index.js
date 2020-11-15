const checkIfNum = v => {
  if (typeof v == "string") {
    return false;
  } else if (typeof v == "number") {
    return true;
  }
};
const checkOperator = v => {
  let reg = /[+x\/-]/g;
  return reg.test(v);
};
const toggleModal = function() {
  this.setState({ isHideModal: !this.state.isHideModal });
};

export { checkIfNum, checkOperator, toggleModal };
