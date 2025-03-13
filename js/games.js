let vertical = window.innerHeight < window.innerWidth; // Для того, чтобы проверка отработала при загрузке страницы

let f = () => {
    let elems = document.body.childNodes;
    if (window.innerHeight > window.innerWidth && !vertical) {
        console.log("asdasd");
        elems.forEach(x => {
            if (x.nodeType === Node.ELEMENT_NODE) {
                if (x.classList.contains("rotate-warn")) {
                    x.style.display = "";
                } else {
                    x.style.display = "none";
                }
            }
        });
        vertical = true;
    } else if (vertical && window.innerHeight < window.innerWidth) {
        console.log("asdasd1");
        elems.forEach(x => {
            if (x.nodeType === Node.ELEMENT_NODE) {
                if (x.nodeType === Node.ELEMENT_NODE) {
                    console.log(x);
                    if (x.classList.contains("rotate-warn")) {
                        console.log("ASD");
                        x.style.display = "none";
                    } else {
                        x.style.display = "";
                    }
                }
            }
        });
        vertical = false;
    }
};

window.addEventListener("resize", f);
f();
