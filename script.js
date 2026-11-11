const tags = ["#late night", "#delicious", "#foodie"];
const prices = [7.50, 8.00, 7.75, 8.50];

const tagText = document.querySelector("#tags");
tagText.textContent = "";
for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " · ";
}