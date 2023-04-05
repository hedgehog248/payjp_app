const pay = () => {
  const payjp = Payjp(process.env.PAYJP_PUBLIC_KEY);
  const elements = payjp.elements();
  const numberElement = elements.create('cardNumber');
  const expiryElement = elements.create('cardExpiry');
  const cvcElement = elements.create('cardCvc');

  numberElement.mount('#number-form');
  expiryElement.mount('#expiry-form');
  cvcElement.mount('#cvc-form');
};

window.addEventListener("load", pay);
