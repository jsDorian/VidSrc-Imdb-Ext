function vsStream() {
	try {
		var btn = document.createElement('a')
		btn.innerText = 'Watch'
		btn.id = 'vs-stream'
		btn.href = `https://www.vidsrc.to/embed/${getType()}/${getID()}`
		document.body.append(btn)
	} catch (err) {
		setTimeout(vsStream, 100)
	}
}

function getType() {
	return document.querySelector('meta[property="og:type"]').content.includes('tv') ? 'tv' : 'movie'
}

function getID() {
	return /.+\/+([a-zA-Z0-9]+).*/g.exec(location.pathname).pop()
}

vsStream()