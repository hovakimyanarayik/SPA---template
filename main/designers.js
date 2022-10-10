// const designers = {
//     render() {
//         return `
//             <h2 class="pageHeader">Designers.</h2>
//             <p class="about">The best team in the world. <br> <br>

//                     We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
//                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
//                     non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
//                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//             </p>
//                 <span class="strong">Our designers are thoughtfully chosen:</span>
//                 <div class="designers">
//                     <div class="designer">
//                         <img src="./images/designers/team2.jpg" alt="designer">
//                         <p class="name">John Doe</p>
//                         <p class="proffesion">CEO & Founder</p>
//                         <p class="aboutDesigner">Phasellus eget enim eu lectus faucibus vestibulum.
//                              Suspendisse sodales pellentesque elementum.</p>
//                     </div>
//                     <div class="designer">
//                         <img src="./images/designers/team1.jpg" alt="designer">
//                         <p class="name">Jane Doe</p>
//                         <p class="proffesion">Designer</p>
//                         <p class="aboutDesigner">Phasellus eget enim eu lectus faucibus vestibulum.
//                              Suspendisse sodales pellentesque elementum.</p>
//                     </div>
//                     <div class="designer">
//                         <img src="./images/designers/team3.jpg" alt="designer">
//                         <p class="name">Mike Ross</p>
//                         <p class="proffesion">Architect</p>
//                         <p class="aboutDesigner">Phasellus eget enim eu lectus faucibus vestibulum.
//                              Suspendisse sodales pellentesque elementum.</p>
//                     </div>
//                 </div>
//         `
//     }
// }

class Designer{
    constructor (name, proffesion, imgLink){
        this.name = name;
        this.proffesion = proffesion;
        this.img = imgLink;
        this.about = "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    }
    show() {
        return `
            <div class="designer">
                <img src="${this.img}" alt="designer">
                <p class="name">${this.name}</p>
                <p class="proffesion">${this.proffesion}</p>
                <p class="aboutDesigner">${this.about}</p>
            </div>
        `
    }
}

const designer1 = new Designer('John Doe', 'CEO & Founder', './images/designers/team2.jpg');
const designer2 = new Designer('Jane Doe', 'Designer', './images/designers/team1.jpg');
const designer3 = new Designer('Mike Ross', 'Architect', './images/designers/team3.jpg');





const designers = {
    render() {
        return `
        <h2 class="pageHeader">Designers.</h2>
        <p class="about">The best team in the world. <br> <br>
        
                We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <span class="strong">Our designers are thoughtfully chosen:</span>
        <div class ="designers">${designer1.show()} ${designer2.show()} ${designer3.show()}</div>
        `
    }
}

export default designers;
