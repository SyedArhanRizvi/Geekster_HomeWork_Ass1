const P3 = React.createElement("p", {
    className: "par3"
}, " If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");

const P2 = React.createElement("p", {
    className: "par2"
}, "The aim of this area of MDN is not to take you from 'beginner' to 'expert' but to take you from 'beginner' to 'comfortable.' From there, you should be able to start making your way, learning from ", React.createElement('a', { href: "https://google.com" }, " The rest of MDN "), " and other intermediate to advanced resources that assume a lot of previous knowledge.");

const P1 = React.createElement("p", {
    className: "par1"
}, "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");

const h1 = React.createElement("h1", {
    className: "heading"
}, "Learn Web development");

const div = React.createElement("div", {
    className: "box"
}, [h1, P1, P2, P3]);

ReactDOM.render(div, document.getElementById("root"));
