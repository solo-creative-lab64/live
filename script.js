// Project Calculator Script
document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculateBtn');
  const complexitySelect = document.getElementById('complexity');
  const projectDesc = document.getElementById('projectDesc');
  const quoteResult = document.getElementById('quoteResult');
  const basePriceEl = document.getElementById('basePrice');
  const discountedPriceEl = document.getElementById('discountedPrice');

  // Base prices based on complexity
  const basePrices = {
    low: 5000,
    medium: 15000,
    high: 35000
  };

  // Discounts: low 20%, medium 40%, high 60%
  const discounts = {
    low: 0.2,
    medium: 0.4,
    high: 0.6
  };

  calculateBtn.addEventListener('click', function() {
    const complexity = complexitySelect.value;
    const desc = projectDesc.value.trim();

    if (!complexity || !desc) {
      alert('Please fill in all fields.');
      return;
    }

    const basePrice = basePrices[complexity];
    const discount = discounts[complexity];
    const discountedPrice = basePrice * (1 - discount);

    basePriceEl.textContent = `Base Price: $${basePrice.toLocaleString()}`;
    discountedPriceEl.textContent = `Discounted Price: $${discountedPrice.toLocaleString()} (${(discount * 100)}% off)`;

    quoteResult.style.display = 'block';
    quoteResult.scrollIntoView({ behavior: 'smooth' });
  });
});