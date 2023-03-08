import classes from './CartButton.module.css';
import { UiActions } from '../store/Cart-slice';
import {useDispatch} from 'react-redux'

const CartButton = (props) => {

    const toggleCartHandler =()=>{

    };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
