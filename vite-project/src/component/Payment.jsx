import { React, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import paymentimg from "../assets/paymentcopy.png"

const Payment = () => {
  const history =useNavigate();
  const [product, setproduct] = useState({
    name: "YOGA SUBSCRIPTION",
    price: 500,
    prodcutby: "YOGA",
    currency:"inr"
  });
// <a href="https://buy.stripe.com/test_fZe4j07UucVccQ83cc">Payment</a>
  const makepayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8080/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("response", response);
        const { status } = response;
        console.log("STATUS", status);
        if (status === 200) {
          history("/newpage");
        } else {
          alert(" Enter right detail or check internet conectivity ");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
     <div className="w-[100rem] h-[100rem] bg-black fixed">
           <form className="w-[20rem] h-[25rem] rounded-[3rem]  -z-50 mt-[5rem] ml-[28rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">

            <img src={paymentimg} className=" h-[24rem]"/>
    <StripeCheckout className="bg-amber-500"
      stripeKey="pk_test_51LQDmPSJatPmI7e7Xr3j0tHYPmhZqi7Uy24T5Op28XUx1tpvjzdC5mKWy4eRDksHFkDoi97XoJOjZWaQ6CrQwjw300pCvIecD0"
      token={makepayment}
      name={product.name}
      amount={product.price * 100}
      currency={product.currency}
      ><button type="submit" className="mt-[2rem] p-1 tracking-[0.2rem] ml-[4rem] rounded-[1rem] bg-black text-white w-[12rem]  font-semibold">Pay Now</button></StripeCheckout>

</form>

</div>
  );
};

export default Payment;
