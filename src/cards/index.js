import "./cards.scss";

const html = `
    <div class="card">
      <h1><a href="#01">Bread Omlette</a></h1>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      
    </div>
    <div class="card">
      <h1><a href="#02">Bread Omlette</a></h1>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      
    </div>
    <div class="card">
      <h1><a href="#03">Bread Omlette</a></h1>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      
    </div>
    <div class="card">
      <h1><a href="#04">Bread Omlette</a></h1>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      
    </div>
    <div class="card">
      <h1><a href="#05">Bread Omlette</a></h1>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      <p>Italan omlette with Oregano and blah blah. Enjoy ice cold</p>
      
    </div>
`;

document.body.innerHTML = "";
const root = document.createElement("div");
root.classList.add("cards-container");
root.innerHTML = html;
document.body.appendChild(root);
