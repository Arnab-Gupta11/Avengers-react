import PropTypes from "prop-types";
const Cart = ({ cart }) => {
  const { name } = cart;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.object,
};
export default Cart;
