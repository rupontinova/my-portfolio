window.addEventListener("DOMContentLoaded", function () {
    let n = document.getElementById("cmd");
    n.focus(), (document.getElementById("helpCmdList").innerHTML = helpCmd);
    let e = document.getElementById("output"),
        s = document.getElementById("mainInfo");
    document.getElementById("terminal"),
        n.addEventListener("keypress", function (i) {
            if (13 === i.keyCode && "" !== (i = n.value.trim())) {
                if (
                    ((e.innerHTML +=
                        "<div><span class='ownerTerminal'><b>nova@profile</b></span>:<b>~$</b> " +
                        i +
                        "</div>"),
                        (n.value = ""),
                        "skills" === i || "s" === i)
                )
                    e.innerHTML += skillsBar;
                else if ("github" === i || "gh" === i)
                    window.location.href = "https://github.com/rupontinova";
                else if ("linkedin" === i || "lk" === i)
                    window.location.href =
                        "https://www.linkedin.com/in/ruponti-muin-nova/";
                else if ("facebook" === i || "fb" === i)
                    window.location.href = "https://www.facebook.com/ruponti.muin";
                else if ("email" === i || "em" === i)
                    window.location.href = "mailto:rupontibup@gmail.com";
                else if ("instagram" === i || "st" === i)
                    window.location.href = "https://www.instagram.com/_rupontinova_/";
                else if ("projects" === i || "pj" === i) e.innerHTML += projectCmd;
                else if ("artworks" === i || "aw" === i) showArtworks();
                else if ("about" === i) {
                    let aboutContent = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>About Ruponti Muin Nova</title>
                            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
                            <style>
                         body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: monospace;
  color: #fff;
background: linear-gradient(90deg, #FF90BC, #FFC0D9, #F9F9E0, #8ACDD7);




  background-size: 400% 400%;
  -webkit-animation: gradientBG 7s ease infinite forwards;
  animation: gradientBG 7s ease infinite forwards;
}
  @-webkit-keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
                            .container {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background-color: rgba(68, 68, 68, 0.8);
    border-radius: 10px;
}
                        
                                h1, h2, h3, h4 {
                                    color: #ffebcd;
                                }
                        
                                ul {
                                    list-style-type: none;
                                    padding: 0;
                                }
                        
                                li {
                                    margin-bottom: 10px;
                                }
                        
                                a {
                                    color: #ffebcd;
                                    text-decoration: none;                                                
                                }
                        
                                a:hover {
                                    text-decoration: none;
                                    color : #FFCDEA;
                                }
                        
                                .back-button {
                                    display: inline-block;
                                    margin-top: 20px;
                                    padding: 10px 20px;
                                    font-size: 16px;
                                    color: white;
                                    background-color: #FB9AD1;
                                    border: none;
                                    border-radius: 5px;
                                    cursor: pointer;
                                    text-align: center;
                                    text-decoration: none;
                                    opacity: 1;
                                      transition: background-color 0.5s ease, opacity 0.5s ease;
                                }
                        
                                .back-button:hover {
                                    background-color: #E83F8B;
                                    opacity : .8;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h1>Hello! I'm Ruponti Muin Nova 👩‍💻</h1>
                                <p>I'm an undergrad at <strong>Bangladesh University of Professionals</strong>, currently studying in <strong>Information and Communication Engineering</strong>.</p>

                                <h2>Tech Stack:</h2>
                                <h3>🖥 FrontEnd</h3>
                                <ul>
                                    <li><strong>Languages</strong>: <code>JavaScript</code>, <code>HTML</code>, <code>CSS</code>, <code>JavaScript ES6</code></li>
                                    <li><strong>Frameworks</strong>: <code>React</code>, <code>Redux</code>, <code>Tailwind CSS</code></li>
                                </ul>
                                <h3>🗄️ BackEnd</h3>
                                <ul>
                                    <li><strong>Languages</strong>: <code>JavaScript</code>, <code>PHP</code></li>
                                    <li><strong>Databases</strong>: <code>MySQL</code></li>
                                </ul>
                                <h3>Other</h3>
                                <ul>
                                    <li>📜 <strong>Languages</strong>: <code>C</code>, <code>C++</code>, <code>Java</code></li>
                                    <li><strong>Leadership</strong>: Communicating ideas as Assistant Joint Secretary of the <strong>BUP InfoTech Club</strong> and as Design & Creativity Coordinator at <strong>IEEE BUP Student Branch</strong>.</li>
                                </ul>
                                <h2>About Me:</h2>
                                <p>When I'm not knee-deep in code, you can find me either drawing or binge-watching animes!</p>
                                <h2>Let's Connect!</h2>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/ruponti-muin-nova" target="_blank">LinkedIn</a></li>
                                    <li><a href="https://www.facebook.com/ruponti.muin" target="_blank">Facebook</a></li>
                                    <li>📧 Drop me a message: <a href="mailto:rupontibup@gmail.com">rupontibup@gmail.com</a></li>
                                </ul>
                                <a href="index.html" class="back-button">take me back!</a>
                            </div>
                        </body>
                        </html>
                    `;
                    document.write(aboutContent);
                    document.close();
                } else
                    "help" === i
                        ? (e.innerHTML += helpCmd)
                        : "clear" === i || "c" === i
                            ? ((e.innerHTML = ""), (s.innerHTML = ""))
                            : (e.innerHTML += "<div>Not found</div>");
                e.scrollTop = e.scrollHeight;
            }
        });
});

function showArtworks() {
    const artworks = [
        { src: 'images/obito.jpg', alt: 'Artwork 1', title: 'Obito Uchiha', description: '"You either die a hero or live long enough to see yourself become the villain."' },
        { src: 'images/naruto.jpg', alt: 'Artwork 2', title: 'Naruto Uzumaki', description: '"I’m going to be Hokage one day!"' },
        { src: 'images/deidara.jpg', alt: 'Artwork 3', title: 'Deidara', description: '"Art is an explosion!"' },

        { src: 'images/madara.jpg', alt: 'Artwork 4', title: 'Madara Uchiha', description: '"Wake up to reality!"' },
        { src: 'images/shin.jpg', alt: 'Artwork 5', title: 'Shin', description: 'killer with a curious heart.' },
        { src: 'images/howl.jpg', alt: 'Artwork 6', title: 'Wizard Howl', description: '"I want to see the world. I want to be free.""' },

        { src: 'images/aki.jpg', alt: 'Artwork 7', title: 'Aki Hayakawa', description: '"Kon!"' },
        { src: 'images/askeladd.jpg', alt: 'Artwork 8', title: 'Askeladd', description: '"Everybody is a slave to something"' },
        { src: 'images/death_note.jpg', alt: 'Artwork 9', title: 'Deathnote', description: '"Liars are the worst kind of monsters."' },

        { src: 'images/eren_2.jpg', alt: 'Artwork 10', title: 'Eren Yeager', description: '"Tatakaye!"' },
        { src: 'images/eren.jpg', alt: 'Artwork 11', title: 'Eren Yeager', description: '"Tatakaye!"' },
        { src: 'images/ergo.jpg', alt: 'Artwork 12', title: 'Ergo Proxxy', description: '"The more you try to control life, the more it slips away."' },


        { src: 'images/griffith.jpg', alt: 'Artwork 13', title: 'Griffith', description: '"Everything I do, I do for my dream."' },
        { src: 'images/johan_2.jpg', alt: 'Artwork 14', title: 'Johan Liebert', description: '"The only thing all humans are equal...is death."' },
        { src: 'images/sukuna.jpg', alt: 'Artwork 15', title: 'Ryomen Sukuna', description: '😈' },

        { src: 'images/kakashi.jpg', alt: 'Artwork 16', title: 'Hatake Kakashi', description: '"I will protect you."' },
        { src: 'images/kuro.jpg', alt: 'Artwork 17', title: 'Tetsurō Kuroo', description: 'ฅ^•⩊•^ฅ' },
        { src: 'images/levi.jpg', alt: 'Artwork 18', title: 'Levi Ackerman', description: '"I’ll do it my way."' },

        { src: 'images/miya.jpg', alt: 'Artwork 19', title: 'Miya Atsumu', description: '"Little goody-two-shoes."' },
        { src: 'images/nanami.jpg', alt: 'Artwork 20', title: 'Kento Nanami', description: 'Nanamin Nanamin!' },
        { src: 'images/sasuke.jpg', alt: 'Artwork 21', title: 'Sasuke Uchiha', description: 'Imu boi saske' },


        { src: 'images/toji.jpg', alt: 'Artwork 22', title: 'Toji Fushiguro', description: 'dad (ꈍᴗꈍ)♡' },
       
    ];

    const artworksHTML = `
      <div class="artworkContainer">
          ${artworks.map(art => `
              <div class="artwork image-container">
                  <img src="${art.src}" alt="${art.alt}" class="image" style="cursor:pointer;">
                  <div class="overlay">
                      <h3 class="title">${art.title}</h3>
                      <p class="description">${art.description}</p>
                  </div>
              </div>
          `).join('')}
      </div>
      <div id="imageModal" class="modal" style="display:none;">
          <span class="modal-close" onclick="closeModal()">&times;</span>
          <img class="modal-content" id="modalImage">
      </div>
           <div class="artwork-message">
            <p>There's more on the way! Keep an eye out.</p>
            <p>©All rights reserved—request permission before use.</p>
        </div>
  `;

    document.getElementById("output").innerHTML += artworksHTML;

    // Add event listeners to image containers
    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('click', function () {
            const img = container.querySelector('img');
            showModal(img.src);
        });
    });
}

function showModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = src;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}


let currentSuggestionIndex = -1;
function showSuggestions() {
    let n = document.getElementById("cmd"),
        e = n.value.trim(),
        s = document.getElementById("suggestions");
    var i;
    (s.innerHTML = "") !== e &&
        ((i = suggestions.filter(function (n) {
            return n.startsWith(e);
        })).forEach(function (e, i) {
            var l = document.createElement("div");
            (l.textContent = e),
                l.addEventListener("click", function () {
                    (n.value = e), (s.innerHTML = "");
                }),
                s.appendChild(l);
        }),
            0 < i.length)
        ? n.classList.add("command-entered")
        : n.classList.remove("command-entered");
}
function handleKeyDown(n) {
    var e,
        s = document.getElementById("suggestions"),
        i = s.getElementsByTagName("div");
    "ArrowUp" === n.key
        ? (n.preventDefault(),
            0 < currentSuggestionIndex && currentSuggestionIndex--)
        : "ArrowDown" === n.key
            ? (n.preventDefault(),
                currentSuggestionIndex < i.length - 1 && currentSuggestionIndex++)
            : "Enter" === n.key &&
            ((n = document.getElementById("cmd")),
                (e = i[currentSuggestionIndex]) && (n.value = e.textContent),
                (s.innerHTML = ""),
                n.classList.remove("command-entered"));
    for (let n = 0; n < i.length; n++) {
        var l = i[n];
        n === currentSuggestionIndex
            ? l.classList.add("selected")
            : l.classList.remove("selected");
    }
}
function linkHref(n) {
    window.location.href = n;
}
let suggestions = [
    "help",
    "skills",
    "clear",
    "projects",
    "about",
    "tools",
    "github",
    "facebook",
    "artworks",
    "linkedin",
    "email",
    "instagram",
],
    helpCmd =
        '\n  <br>Type any of the following commands to explore: <br />\n  [<span class="commandName">skills</span>] or [<span class="commandName">s</span>] -see what im skilled at \n  <br />\n  [<span class="commandName">projects</span>] or [<span class="commandName">pj</span>] -discover my projects \n  <br />\n  [<span class="commandName">about</span>]\n -all about me ;) <br />\n [<span class="commandName">artworks</span>]\n -view my artworks <br />\n [<span class="commandName">help</span>]\n -to guide you <br /><br />\n  [<span class="commandName">clear</span>]\n  <br /><br />\n  Contact me: <br />\n  [<span class="commandName">github</span>]\n  <br />\n  [<span class="commandName">linkedin</span>]\n  <br />\n  [<span class="commandName">facebook</span>]\n  <br />\n  [<span class="commandName">email</span>]\n  <br />\n  [<span class="commandName">instagram</span>]\n  <br />\n ',
    /*skillsBar =
        '\n<div class="container">\n  <div class="flex">\n    <h2>HTML:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem1"></div>\n    </div>\n    <h3>80%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>CSS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem2"></div>\n    </div>\n    <h3>80%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>JS/ES6:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem3"></div>\n    </div>\n    <h3>75%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>REACT:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem4"></div>\n    </div>\n    <h3>52%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>JAVA:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem5"></div>\n    </div>\n    <h3>85%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>MySQL:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem6"></div>\n    </div>\n    <h3>85%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>C++:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem7"></div>\n    </div>\n    <h3>80%</h3>\n  </div>\n\n  <div class="flex">\n  <h2>PHP</h2>\n  <div class="skillBar">\n    <div class="skillBarItem8"></div>\n  </div>\n  <h3>80%</h3>\n</div>\n</div>',*/
    projectCmd =
        '\n<div class="projectsDiv">\n<article\n  class="project-wrapper"\n  onclick="linkHref(\'https://github.com/rupontinova/Inventory-Manager-StockPro-\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">StockPro</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n        A CLI based Inventory Management Program. </br> <code>Technology : JAVA</code>\n    </p>\n    </div>\n  </div>\n</article>\n\n<article\n  class="project-wrapper"\n  onclick="linkHref(\'https://github.com/rupontinova/Inventory-Nexus\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">Inventory<br />Nexus</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n        Inventory Nexus is an Inventory Management System Application based on JAVA swing GUI.\n   <code>Technology : JAVA, MYSQL</code>\n    </p>\n    </div>\n  </div>\n</article>\n\n<article\n  class="project-wrapper"\n  onclick="linkHref(\'https://github.com/rupontinova/Treatwell\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">TreatWell</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n        A healthcare website patients and doctrors. </br> <code>Technology : PHP, HTML, CSS, JS, MYSQL</code>\n    </p>\n    </div>\n  </div>\n</article>\n\n<article\n  class="project-wrapper"\n  onclick="linkHref(\'https://github.com/rupontinova/my-portfolio\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">my-portfolio</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n        A stupid personal website. </br> <code>Technology : JAVA, HTML, CSS</code>\n    </p>\n    </div>\n  </div>\n</article>\n\n</div>\n  ';

 skillsBar = `
</br>
</br>
</br> 
<div class="coordinate-system">
        <div class="x-axis">
         </div>
        <div class="y-axis"> 
        </div>
        <div class="x-label">Nerdy Skills</div>
        <div class="x-label-2">Life Skills</div>
        <div class="y-label">Pro Skills</div>
         <div class="y-label-2">Noob Zone</div>
             <img src="images/arrow.svg" alt="Arrow1" class="arrow-image">
              <img src="images/arrow.svg" alt="Arrow2" class="arrow-image_2">
                            <img src="images/arrow.svg" alt="Arrow3" class="arrow-image_3">
                   
<div class="quadrant-box tl" >
    <div class="skills-container">
        <div class="skill-box-1">HTML</div>
        <div class="skill-box-1">CSS</div>
        <div class="skill-box-1">JavaScript</div>
        <div class="skill-box-1">React</div>
        <div class="skill-box-1">PHP</div>
        <div class="skill-box-1">MySQL</div>
        <div class="skill-box-1">Java</div>
    </div>
</div>
    
        <div class="quadrant tr">
            <div class="skills-container">
        <div class="skill-box-2">Drawing</div>
        <div class="skill-box-2">Babysitting</div>
 <div class="skill-box-2">Watching Anime</div> 
  <div class="skill-box-2">Sleeping</div> 
    </div>
        </div>

      <div class="text-tr">
    Master of Mundane </br> (Everyday things </br> I'm actually good at)</div>

        <div class="quadrant bl">
             <div class="skills-container">
        <div class="skill-box-3">Unknown</div>
      
    </div>
        </div>
 <div class="text-bl">
   Unconciously </br> not being aware </br> of the skills I lack.</div>
        <div class="quadrant br">
         <div class="skills-container">
        <div class="skill-box-4">Speaking Up</div>
        </div>
         <div class="text-br">Still trying to </br> overcome the fear.</div>
    </div>
    </div>
`;


document.getElementById('skillsBar').innerHTML = skillsBar;
