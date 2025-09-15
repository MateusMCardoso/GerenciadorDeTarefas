import PropTypes from "prop-types";

function Input(props) {
  return (
    <input
      className="w-full p-4 rounded-md bg-slate-800 text-white"
        {...props}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;