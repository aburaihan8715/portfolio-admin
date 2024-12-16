import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/section-heading';
import { IProduct } from '@/interface/product.interface';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Link } from 'react-router';

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);
  // console.log(cart);
  return (
    <section className="px-1 py-10 md:px-10 md:py-20">
      <div className="flex justify-center">
        <SectionHeading heading="Your Bag" />
      </div>
      <div className="mb-5">
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <ul className="flex flex-[4] flex-col justify-center rounded border">
          {cart.products.length > 0 &&
            cart.products?.map((product) => (
              <CartProduct key={product._id} product={product} />
            ))}

          {cart.products.length < 1 && (
            <div className="flex justify-center">
              <h3 className="sm:2xl title-font max-w-max border-primary bg-gradient-to-r from-orange-600 via-green-700 to-fuchsia-700 bg-clip-text text-center text-3xl font-bold text-gray-900 text-transparent md:text-3xl">
                No Product Added Yet!!
              </h3>
            </div>
          )}
        </ul>

        <div className="flex-[1]">
          <div className="space-y-2 rounded-md border p-1 md:p-5">
            <h4 className="text-2xl font-medium text-gray-700">
              Order Summary
            </h4>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$ {cart.total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span>$ 00.0</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping Charge</span>
              <span>$ 00.0</span>
            </div>

            <div className="flex justify-between text-xl font-medium">
              <span>Total</span>
              <span>$ {cart.total.toFixed(2)}</span>
            </div>

            <div>
              {cart.products.length < 1 ? (
                <div className="w-full cursor-not-allowed">
                  <Button disabled className="w-full cursor-not-allowed">
                    Go For Payment
                  </Button>
                </div>
              ) : (
                <Link to={`/payment-options`} className="w-full">
                  <Button className="w-full">Go For Payment</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

const CartProduct = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();

  const handleIncrement = (id: string) => {
    if (id) {
      dispatch(incrementQuantity(id));
    }
  };

  const handleDecrement = (id: string) => {
    if (id) {
      dispatch(decrementQuantity(id));
    }
  };

  const handleRemoveProduct = (id: string) => {
    if (id) {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <li className="flex h-full flex-col items-center justify-between gap-10 border-b md:flex-row">
      <div className="">
        <img
          className="h-[200px] w-full rounded object-cover md:w-[200px]"
          src="https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={`product`}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <h4 className="text-xl font-medium md:text-3xl">
          {`product name`}
        </h4>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDecrement(product._id)}
            className="text-2xl"
          >
            -
          </button>
          <span className="flex h-10 w-10 items-center justify-center border">
            {product.quantity || 1}
          </span>
          <button
            onClick={() => handleIncrement(product._id)}
            className="text-2xl"
          >
            +
          </button>
        </div>
        <div className="text-xl text-gray-700 md:text-3xl">$ 25</div>
      </div>

      <div className="w-full md:w-auto">
        <Button
          className="mr-1 w-full md:mr-20 md:w-auto"
          onClick={() => handleRemoveProduct(product._id)}
        >
          Remove
        </Button>
      </div>
    </li>
  );
};
