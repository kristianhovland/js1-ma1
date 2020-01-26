// Question 1

const cat = {
    sound: function () {
        console.log("Meow!");
    }
}
cat.sound();

// Question 2

const heading = document.querySelector("h3");
console.dir(heading2);

// Question 3

const heading = document.querySelector("h3");
heading.style.fontSize = "2em"

// Question 4

const heading = document.querySelector("h3");
console.log(heading.className);
heading.classList.add("subheading");
console.log(header.className);

// Question 5

const paragraphs = document.querySelectorAll("p")

// Question 6

const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = `<p>
                                New paragraph
                             </p>`;


// Question 7 

function catFunction(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}
catFunction(cats);
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",

    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 8

function catFunction(catArray) {
    let catHTML = "";

    for (let i = 0; i < catArray.length; i++) {
        catHTML += <h5>${catArray[i].name}</h5>;
    }
    return catHTML;
}


// Question 9

resultsContainer.innerHTML = catFunction(cats);

// Question 10

function catFunction (catArray) {
    let catHTML = "";

    for (let i = 0; 1 < catArray.length; i++) {
        let catAge = "Age unknown"
        if (catArray[i].age) {
            catAge = catArray[i].age
        }

        catHTML += <div>
            <h5>${catArray[i].name}</h5>
            <p>${catAge}</p>
        </div>;
    }
    return.catHTML;
}
