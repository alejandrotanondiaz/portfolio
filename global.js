console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// let navlinks = $$("nav a");
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)
// currentLink?.classList.add("current");

let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
	{url: "resume/", title: "Resume"},
	{url: "contact/", title: "Contact"},
	{url: "https://github.com/alejandrotanondiaz", title: "Github"},
	
];
let nav = document.createElement("nav");
document.body.prepend(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
	let url = p.url;
	if (!ARE_WE_HOME && !url.startsWith("http")) {
		url = "../" + url;
	}
	let title = p.title;
	// TODO create link and add it to nav
	let a = document.createElement("a");
	a.href = url;
	a.textContent = title;
	nav.append(a);
	if (a.host === location.host && a.pathname === location.pathname) {
		a.classList.add("current");
	}
	if (a.host != location.host) {
		a.target = "_blank";
	}
}

document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select >
			<option value="light dark">Defaut</option>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>
	</label>`
);

let selector = document.querySelector("select");

if ("colorScheme" in localStorage) {
	document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
}

selector.addEventListener("input", function (event) {
	document.documentElement.style.setProperty("color-scheme", event.target.value);
	localStorage.colorScheme = event.target.value;
});

