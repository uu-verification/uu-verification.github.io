$(() => {
	let loc = window.location.href;
	if (!loc.endsWith(".html"))
		loc += "index.html";
	$("#nav a").each((_, a) => {
		if (loc === a.href)
			$(a).addClass("active");
	})

	const folder = loc.substring(0, loc.lastIndexOf("/"));
	$("#nav a.sub").each((_, a) => {
		if (folder !== a.href.substring(0, a.href.lastIndexOf("/")))
			$(a).hide();
	})
});
