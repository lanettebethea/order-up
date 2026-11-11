const tags = ["#late night", "#delicious", "#foodie"];
const prices = [7.50, 8.00, 7.75, 8.50];

const tagText = document.querySelector("#tags");
tagText.textContent = "";
for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " · ";
}
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}
document.querySelector("#total").textContent = "$" + total;