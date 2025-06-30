const select = document.querySelector(".selOpts");
const selectP = document.querySelector(".selOpts p")
const list = document.querySelector(".content");
const inputFld = document.querySelector(".srchBar input");

const links = [
  "Github",
  "Youtube",
  "Twitter",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Tiktok",
];

select.addEventListener("click", () => {
  list.classList.toggle("disable");
});

document.addEventListener("click", (event) => {
  if (!list.contains(event.target) && !select.contains(event.target)) {
    list.classList.add("disable");
  }
});

async function ldopts() {
  for (let names of links) {
    let opts = document.createElement("div");
    opts.innerText = names;
    opts.classList.add("option");
    list.insertAdjacentElement("beforeend", opts);
    addClickEventToOptions();
  }
}

inputFld.addEventListener("keyup", () => {
  let input = inputFld.value.toLowerCase();

  let arr = links.filter((data) => {
    return data.toLowerCase().includes(input);
  });

  // Clear previous
  const itemsTormv = list.querySelectorAll(".option, p");
  itemsTormv.forEach((e) => e.remove());

  if (input === "") {
    ldopts();
    return;
  }

  if (arr.length) {
    arr.forEach((item) => {
      let opts = document.createElement("div");
      opts.innerText = item;
      opts.classList.add("option");
      list.insertAdjacentElement("beforeend", opts);
    });
  } else {
    const p = document.createElement("p");
    p.innerText = "Oops! Country not found";
    p.style = "margin-top:10px; color:red;";
    list.insertAdjacentElement("beforeend", p);
  }

});

function addClickEventToOptions() {
  const options = list.querySelectorAll(".option");
  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      selectP.innerText = opt.innerText; // Optional: Set the selected value
      list.classList.add("disable"); // Close dropdown on click
    });
  });
}



window.addEventListener("load", async () => {
  await ldopts();
});
