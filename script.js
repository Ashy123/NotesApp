const notes = [
    {
        title: "my next trip",
        body: "visit Illinois",
        music:"rock",
        place:"12 avenue",
    
    },
    {
        title: "habits to work on",
        body: "stop driving fast",
    },
    "Ashley",
    "Illinois"
];

const data = document.querySelector(".notes");
data.textContent = notes[0].music;

//ADD A NEW ELEMENT
const newData = document.createElement("h1");
newData.textContent ="I was sleepy";
document.querySelector("body").appendChild(newData);

document.querySelector("button").addEventListener
("click", function (event) {
    event.target.textContent = "New York is expensive";
});



