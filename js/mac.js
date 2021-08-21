function priceTotal() {
    const firstPrice = document.getElementById("best-price").innerText;
    const storageFee = document.getElementById("storageFee").innerText;
    const deliveryFee = document.getElementById("deliveryFee").innerText;
    const memoryFee = document.getElementById("memoryFee").innerText;
    const totalAmount = document.getElementById("totalAmount");
  

    const totalCostValue =
      parseFloat(firstPrice) +
      parseFloat(memoryFee) +
      parseFloat(storageFee) +
      parseFloat(deliveryFee);
    totalAmount.innerText = amountValue;
    document.getElementById("total-count").innerText = amountValue;
  }
  

  function costUpdate(priceId, cost) {
    document.getElementById(priceId).innerText = cost;
    priceTotal();
  }
  

  document.getElementById("use-coupon").addEventListener("click", function () {
    const couponCode = document.getElementById("promo-code").value;
    const useCoupon ="james";

    const totalCost = document.getElementById("total-cost");
    const overallTotalAmountText = totalCost.innerText;

    let overallTotalAmount = parseFloat(overallTotalAmountText);
    if (couponCode == useCoupon) {

      overallTotalAmount = overallTotalAmount - overallTotalAmount * 0.2;
      document.getElementById("total-count").innerText = overallTotalAmount;
    }
    
    document.getElementById("promo-code").value = "";
  });
  