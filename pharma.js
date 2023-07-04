// take information from below objects and input each person's values
// apply the appropriate discounts (subscription and/or coupon)
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false, 
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = { // Rocky has both a subscription and a coupon
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// Create a function to calculate Timmy's subtotal
const timmyTotal = (num1, num2, num3) => {
  return num1 * num2 - num3;
};
// Timmy does not have a subscription but has the coupon. Subtract $10
const timmySum = timmyTotal(25, 3, 10);
console.log(`Timmy, your total is $${timmySum}`);
// const newTimmySum = timmyTotal (timmySum, -10)
// Declare function to calculate Sarah's subtotal

// Create a fuction to calculate Sarah's subtotal
const sarahTotal = (num1, num2) => {
  // Sarah has a subscription and no coupon. Apply 25% subscription discount
  return num1 * num2 * 0.75;
};
const sarahSum = sarahTotal(50, 1);
console.log(`Sarah, your total is $${sarahSum}`); 

// Declare function to calculate Rocky's subtotal
const rockyTotal = (num1, num2, num3) => {
  // Rocky has both a subscription and coupon. Apply 25% discount and $10 coupon
  return num1 * num2 * 0.75 - num3;
};
const rockySum = rockyTotal(30, 5, 10);
console.log(`Rocky, your total is $${rockySum}`);
