var qouteList = [
  {
    q: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    q: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    q: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    q: "You only live once, but if you do it right, once is enough.",
    author: " Mae West",
  },
  {
    q: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    q: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    q: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    q: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    q: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    q: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
];

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var qouteBtn = document.getElementById("btn");

qouteBtn.onclick = function displayQoute() {
  var shuffledArray = shuffle(qouteList);
console.log(shuffledArray)
  var random = shuffledArray[Math.floor(Math.random() * shuffledArray.length)];

  var box = `
<div>
<p class="fw-medium fs-4">
${random.q}
</p>
<span class="bx-4">${random.author} </span>
</div>
`;

  return (document.getElementById("quotebody").innerHTML = box);
};
