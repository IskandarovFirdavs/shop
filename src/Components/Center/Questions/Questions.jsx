import React from "react";
import styled from "styled-components";

const Question = styled("div")`
  display: flex;
  justify-content: center;
  height: 1950px;
  align-items: end;
`;

const TextDiv = styled("div")`
  display: flex;
  width: 78%;
  height: 98%;
  justify-content: space-around;
  flex-direction: column;
`;

const Ahref = styled("a")`
  text-decoration: none;
`;
const Questions = () => {
  return (
    <Question>
      <TextDiv>
        <h1>Questions</h1>
        <p>
          Account registration is required to place and pay for orders. Thanks
          to it, you will not need to constantly fill out data when placing an
          order. Registration will take no more than three minutes.
        </p>
        <h1>How to register in the web-site?</h1>
        <p>
          Visit our website
          <Ahref href=" https://iskandarovfirdavs.github.io/shop/ ">
            {"  "}
            https://iskandarovfirdavs.github.io/shop/{"  "}
          </Ahref>
          In the top right corner you will see a “Login” button. Click on it,
          and then in the window that opens, enter your phone number and then
          click the “Get code” button. You will receive an SMS with a 4-digit
          code, after entering which you will be transferred to your personal
          account.
        </p>
        <h1>Placing an order</h1>
        <h3>How to order?</h3>
        <p>1. Add items to cart.</p>
        <p>
          2. Check the quantity and characteristics of the product, such as size
          and color.
        </p>
        <p>3. Click "Checkout".</p>
        <p>
          4. In the checkout section, indicate the delivery method - to the
          pick-up point or by courier.
        </p>
        <p>
          5. Enter and check the details of the order recipient*. Why is it
          important? Because the order code will be sent to your phone number.
          Your first and last name will be needed to verify with your passport
          if you ordered a product with an age restriction or used a promotional
          code.
        </p>
        <p>
          *When placing an order in installments, the recipient of the order may
          be installment plan provider only.
        </p>
        <p>
          6. Enter a promotional code if you have one. Current promotional codes
          can be found at website
          <Ahref href=" https://iskandarovfirdavs.github.io/shop/ ">
            {" "}
            https://iskandarovfirdavs.github.io/shop/{" "}
          </Ahref>
          , in our social networks, push notifications or SMS .
        </p>
        <p>
          7. Choose a payment method convenient for you: - pay online: by card
          Uzcard, Humo; - arrange Uzum Nasiya in installments; - pay when
          receiving in cash or by Uzcard, Humo card
        </p>
        <p>
          8. If you decide to pay for your order online, or place an installment
          plan later, the order will be reserved for 30 minutes. More details in
          the section: How does the order reserve and promotional code work?
        </p>
        <p>
          9. When paying for an order online by card or in installments, a
          payment receipt will appear in your personal account under the order;
          after receiving the order, an “Electronic Receipt” will appear.
        </p>
        <p>Electronic purchase receipt:</p>
        <li>
          When paying online, an electronic purchase receipt will be available
          after receiving the order in the application under the order number;
        </li>
        <li>
          When paying for an order in installments, an electronic purchase
          receipt will be available after receiving the order and activating the
          contract in the application under the order number;
        </li>
        <li>
          When paying via Fast Pay/QR-pass, an electronic purchase receipt will
          be available after receiving the order in the application under the
          order number;
        </li>
        <li>
          When paying for an order upon receipt, the electronic purchase receipt
          will not be displayed in the application, since a paper receipt will
          be issued on the spot.
        </li>
        <p>
          To see how to place an order quickly and conveniently, click here.
        </p>
        <h1>How does the order reserve and promotional code work?</h1>
        <p>
          If you decide to pay for your order online or place an installment
          plan later, your order will be reserved for 30 minutes. At this time,
          the selected products and the entered promotional code become
          unavailable for other orders.
        </p>
        <p>
          In the “My Orders” section, you can select an unplaced order, then
          complete payment for the order or payment in installments, or cancel
          the order in the application.
        </p>
        <p>
          If you cancel your order, the reserved items and promotional code will
          be available again.
        </p>
        <h1>How to add or remove a product from a completed order?</h1>
        <p>
          We collect and ship orders very quickly - only a couple of minutes
          pass between placing and starting to assemble your order. Therefore,
          we are technically unable to add or remove items from a completed
          order.
        </p>
        <p>
          If you want to re-order items, place them separately and pick them up
          along with your first order. If you want to delete, discard the
          unnecessary ones when you receive your order.
        </p>
        <h1>How long is an order stored?</h1>
        <p>5 calendar days at the point of issue from the date of receipt.</p>
        <p>
          If you are unable to pick up your order, please contact our{" "}
          <Ahref href="https://iskandarovfirdavs.github.io/shop/">
            support team.
          </Ahref>{" "}
          We will extend the shelf life to 12 days from the date of order.
        </p>
        <h1>How to cancel a placed order?</h1>
        <p>
          We collect and ship orders very quickly, so cancel your order at the
          system is possible only within 5 minutes from the moment of its
          registration. By After 5 minutes, we can cancel the order only after
          it has been received point of issue or destination city.
        </p>
        <p>
          Contact our
          <Ahref href="https://iskandarovfirdavs.github.io/shop/">
            {" "}
            support team{" "}
          </Ahref>
          to find out if you can cancel your order.
        </p>
        <h1>Delivery</h1>
        <h3>What delivery methods are there?</h3>
        <p>
          <span style={{ fontWeight: "700" }}>
            Delivery to the pick-up point :
          </span>
          the cost of delivery to the Uzum Market pick-up point will be
          displayed when placing an order. Also, delivery will be free if you
          place an order for the required amount specified when placing the
          order.
        </p>
        <p>
          <span style={{ fontWeight: "700" }}>Courier delivery:</span> delivery
          by courier costs 30,000 sum, but if the order amount is above
          1,000,000 sum, the order will be delivered free of charge to any
          accessible point in the city where our delivery point is open.
        </p>
        <p>When will the order be delivered?</p>
        <h4>Order pick-up point -</h4>
        <p>
          The delivery date of the order is displayed at the checkout stage, and
          in profile of the order itself.*
        </p>
        <p>
          *Large items are delivered by courier to your home. Unfortunately, it
          will not be delivered to the pick-up point.
        </p>
        <p>
          <span style={{ fontWeight: "700" }}>Couriers</span> deliver orders
          from 10:00 to 22:00; when placing an order, the available delivery
          interval will be indicated.*
        </p>
        <p>
          If, when arranging courier delivery, you indicate an address outside
          your city, we will contact you to clarify a new address within the
          city.*
        </p>
        <h1>How to change the pick-up point for an already placed order?</h1>
        <p>
          We collect and ship orders very quickly, so you can change the
          delivery point address only within 5 minutes from the moment the order
          is placed. Contact our support service and immediately provide the
          order number and the address of the pickup point from which it will be
          convenient for you to pick up the order - we will redirect it there.
        </p>
        <p>
          If you didn’t make it in 5 minutes, place a new order with delivery to
          the desired pick-up point, and you can cancel the old one through the
          support service.
        </p>
      </TextDiv>
    </Question>
  );
};

export default Questions;
