// raderna & hsl-värden
const rader = ["h5", "h4", "h3", "h2", "h1"];
const hsl = [132, 145, 150, 180, 200];

for (i = 0; i <= 4; i++) {
  const rad = document.createElement(rader[i]);
  rad.innerText = "Rad" + " " + (i + 1);
  rad.style.backgroundColor = `hsl(${hsl[i]}, 75%, 80%)`;
  rad.classList.add("rad");
  document.body.append(rad);
}

//----------------LISTORNA--------------
const list1 = document.createElement("ul");
list1.classList.add("list");
document.body.append(list1);
const list2 = document.createElement("ul");
list2.classList.add("list");
document.body.append(list2);
const list3 = document.createElement("ul");
list3.classList.add("list");
document.body.append(list3);

const list3Items = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerText = i;
  li.style.textAlign = "start";
  li.classList.add(i % 2 == 0 && i != 4 ? "black" : "white");
  li.classList.add(i === 4 && i % 2 == 0 ? "purple" : "black");
  //   if (i === 4) {
  //     li.classList.add("purple");
  //   }
  list1.append(li);
}

for (let i = 9; i >= 0; i--) {
  const li = document.createElement("li");
  li.innerText = i;
  li.classList.add(i % 2 == 0 && i != 8 ? "black" : "white");
  if (i === 8) {
    li.classList.add("purple");
  }
  list2.append(li);
}

// ELLER :

// for (let i = 9; i >= 0; i--) {
//   const li = document.createElement("li");
//   li.innerText = i;
//   li.style.backgroundColor = i === 8 ? "hsl(239, 100%, 84%)" : "";
//   li.style.color = i === 8 ? "white" : "";
//   if (i % 2 == 0 && i != 8) {
//     li.style.backgroundColor = "black";
//     li.style.color = "white";
//   }
//   list2.append(li);
// }

for (i = 0; i < list3Items.length; i++) {
  const li = document.createElement("li");
  li.innerText = list3Items[i];
  li.style.textAlign = "end";
  list3.append(li);
  switch (list3Items[i]) {
    case "ett":
    case "tre":
    case "fem":
    case "sju":
    case "nio":
      li.classList.add("black");
      break;
    case "två":
    case "fyra":
    case "åtta":
    case "tio":
      li.classList.add("white");
      break;
    case "sex":
      li.classList.add("purple");
      li.style.color = "black";
      break;
  }
}

// for (i = 0; i < list3Items.length; i++) {
//   const li = document.createElement("li");
//   li.innerText = list3Items[i];
//   list3.append(li);
//   let item = list3Items[i];

//   if (
//     item === "ett" ||
//     item === "tre" ||
//     item === "fem" ||
//     item === "sju" ||
//     item === "nio"
//   ) {
//     li.classList.add("black");
//   } else if (
//     item === "två" ||
//     item === "fyra" ||
//     item === "åtta" ||
//     item === "tio"
//   ) {
//     li.classList.add("white");
//   } else {
//     li.classList.add("purple");
//   }
// }

const div = document.createElement("div");
document.body.append(div);

div.append(list1, list2, list3);
