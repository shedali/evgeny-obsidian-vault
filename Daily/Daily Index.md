---
aliases: [Index, Daily]
---
tag: #index 
Tags: [[Home]]

# Trackers:

```dataviewjs
const {Daily} = customJS
const titles = {
	created: "** 📝 Daily Notes **",
	anxiety: "** 😬 Anxiety tracker **",
	happiness: "** 🙂 Mood tracker **",
	willpower: "** 🪫 Willpower **",
	ynab: "** 💰 YNAB **",
	sport: "** 💪 Sport **",
}

const fields = {}

const ignored = ['file', 'tags']

for (let page of dv.pages('"Daily"').where(p => p.created)) {
	for (let field of Object.keys(page)) {
		if (!ignored.includes(field)) {
			fields[field] = titles[field] || field
			ignored.push(field)
		}
	}
}

for (let field of Object.keys(fields)) {
	const config = {
		// year: 2022,
		title: fields[field],
		field,
	}
	
	Daily.heatmap.call(this, config, dv, renderHeatmapCalendar)
	dv.span('<br /><br />')
}

```






