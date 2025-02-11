function createCard(title, cname, views, monthsold, duration, thumbnail) {

    let viewsnumber;
    if (views < 1000000) {
        viewsnumber = views / 1000 + "K";
    } else if (views > 1000000) {
        viewsnumber = views / 1000000 + "M";
    } else (
        viewsnumber = views / 1000 + "K"
    )

    let Html =
        `<div class="card">
    <div class="image">
    <img src="${thumbnail}" alt="" />
    <div class="capsule">${duration}</div>
    </div>
    <div class="text">
    <h2>${title}</h2>
    <p>${cname} . ${viewsnumber} views . ${monthsold} months old ago</p>
    </div>
    </div>`


    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + Html
}

createCard(
    "Introduction to BAckend | Sigma Web Development | video #1", "CodeWithHarry", 73600008, 11, "32:21", "jalala.jpeg"
)

let a=document.querySelector(".button")

a.addEventListener("click",()=>{
    console.log(createCard(
        "Introduction to BAckend | Sigma Web Development | video #2", "CodeWithHarry", 73600008, 11, "32:21", "jalala.jpeg"
    ))
})