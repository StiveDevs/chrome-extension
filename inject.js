async function addTheListner() {
	const sendBtn = document.querySelector(
		'[aria-label="Send ‪(Ctrl-Enter)‬"]'
	);
	if (!sendBtn) {
		setTimeout(() => {
			addTheListner();
		}, 1000);
		return;
	}
	const backendUrl = "https://stive-api.herokuapp.com";
	let res = await fetch(backendUrl + "/club");
	const clubs = await res.json();
	const str = document
		.getElementsByClassName("gb_A gb_Ma gb_f")[0]
		.getAttribute("aria-label");
	const email = str.slice(str.indexOf("(") + 1, str.indexOf(")"));
	const myClubs = [];
	for (const club of clubs) {
		if (
			club.coordinators?.some(
				(coordinator) => coordinator.email === email
			)
		) {
			myClubs.push(club);
		}
	}
	if (myClubs.length != 1) return;
	const myClub = myClubs[0];
	sendBtn.addEventListener("click", async (ev) => {
		const subject = document.getElementsByName("subjectbox")[0].value;
		const message = document.querySelector('[role="textbox"]').innerText;
		let res = await fetch(`${backendUrl}/post/`, {
			method: "POST",
			body: JSON.stringify({ title: subject, description: message }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		res = await res.json();
		const postId = res.insertedId;
		res = await fetch(
			`${backendUrl}/club/${myClub._id}/add/post/${postId}`,
			{ method: "PATCH" }
		);
		alert("This mail has been posted at Stive");
	});
}

addTheListner();
