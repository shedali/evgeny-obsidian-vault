---
aliases: [Index, Daily]
---
tag: #index 
Tags: [[Home]]

# Trackers:

```dataviewjs
const {Daily} = customJS
const titles = {
	created: "** đ Daily Notes **",
	anxiety: "** đŦ Anxiety tracker **",
	happiness: "** đ Mood tracker **",
	willpower: "** đĒĢ Willpower **",
	ynab: "** đ° YNAB **",
	sport: "** đĒ Sport **",
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






