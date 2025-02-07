const page = document.body;
let shows_optionsMenu = false;
let can_show_cm = true;

const show_optionMenu = () => {
    const optionsMenu = document.getElementById("optionMenu");
    if (shows_optionsMenu === false) {
        document.querySelectorAll(".rightClickMenu").forEach(element => {
            element.style.animation = "hideContextMenu 150ms forwards";
            
            element.addEventListener("animationend", () => {
                element.remove();
            }, { once: true });
        });
        can_show_cm = false;

        optionsMenu.style.animation = "showOptions 200ms forwards";
        shows_optionsMenu = true;
    } else {
        optionsMenu.style.animation = "hideOptions 200ms forwards";
        shows_optionsMenu = false;
        can_show_cm = true;
    }
}

document.getElementById("optionsButton").addEventListener("mousedown", show_optionMenu);
document.addEventListener("keypress", (event) => {
    if (event.key == "Alt") { show_optionMenu() }
});

document.addEventListener("contextmenu", (event) => {
    if (can_show_cm) {
        event.preventDefault();
        document.querySelectorAll(".rightClickMenu").forEach(element => element.remove());

        // cm container
        const rightClickMenu = document.createElement("div");
        rightClickMenu.classList.add("rightClickMenu");

        page.appendChild(rightClickMenu);

        const maxX = window.innerWidth - rightClickMenu.offsetWidth;
        const maxY = window.innerHeight - rightClickMenu.offsetHeight;
        rightClickMenu.style.left = `${Math.min(event.clientX, maxX)}px`;
        rightClickMenu.style.top = `${Math.min(event.clientY, maxY)}px`;

        // cm buttons
        const option1 = document.createElement("button");
        option1.textContent = "Option 1";
        option1.classList.add("cmButton");

        option1.addEventListener("click", () => {
            document.querySelectorAll(".rightClickMenu").forEach(element => {
                element.style.animation = "hideContextMenu 150ms forwards";
                
                element.addEventListener("animationend", () => {
                    element.remove();
                }, { once: true });
            });
        });

        rightClickMenu.appendChild(option1);

        const option2 = document.createElement("button");
        option2.textContent = "Option 2";
        option2.classList.add("cmButton");

        option2.addEventListener("click", () => {
            document.querySelectorAll(".rightClickMenu").forEach(element => {
                element.style.animation = "hideContextMenu 150ms forwards";
                
                element.addEventListener("animationend", () => {
                    element.remove();
                }, { once: true });
            });
        });

        rightClickMenu.appendChild(option2);

        const separator = document.createElement("hr");
        separator.style.width = "calc(100% - 20px)"; separator.style.marginLeft = "5px";
        separator.style.marginRight = "5px";
        rightClickMenu.appendChild(separator);

        const option3 = document.createElement("button");
        option3.textContent = "Option 3";
        option3.classList.add("cmButton");

        option3.addEventListener("click", () => {
            document.querySelectorAll(".rightClickMenu").forEach(element => {
                element.style.animation = "hideContextMenu 150ms forwards";
                
                element.addEventListener("animationend", () => {
                    element.remove();
                }, { once: true });
            });
        });

        rightClickMenu.appendChild(option3);
    }
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".rightClickMenu")) {
        document.querySelectorAll(".rightClickMenu").forEach(element => {
            element.style.animation = "hideContextMenu 150ms forwards";
            
            element.addEventListener("animationend", () => {
                element.remove();
            }, { once: true });
        });
    }
});
