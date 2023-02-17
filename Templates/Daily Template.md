---
created: <% tp.file.creation_date("YYYY-MM-DD") %>
happiness: <% tp.system.prompt("How happy I am today?", 5) %>
willpower: <% tp.system.prompt("What's my willpower today?", 5) %>
anxiety: <% tp.system.prompt("Do I have an anxiety today?", "false") %>
sport: <% tp.system.prompt("Did I work out today?", "true") %>
---
tags:: +Daily Notes
[[Daily Index]]

# {{date:DD MMMM YYYY (ddd)}}
## ⭐️ Highlight of the day:
-  <% tp.file.cursor(1) %>
---
### 📆 Daily questions:
##### 🥳  One thing I'm excited about right now is...
- <% tp.file.cursor(4) %>

##### 🙌  One thing I am thankful for today...
- <% tp.file.cursor(5) %>

----
## 📝 Daily Journal:
<% tp.file.cursor(7) %>

```dataviewjs
const ideas = dv.pages('"Ideas"').where(({ file }) => dv.equal(file.cday,dv.date(dv.current().created)))
const knowledge = dv.pages('"Knowledge"').where(({ file }) => dv.equal(file.cday,dv.date(dv.current().created)))
if (ideas.length > 0 || knowledge.length > 0) {
	dv.header(3, "Today Notes:");
	if (ideas.length > 0) {
		dv.header(6, "Ideas:")
		dv.table(["Idea", "Status"], ideas.map(b => [b.file.link, b.status]))
	}

	if (knowledge.length > 0) {
		dv.header(6, "Knowledge:")
		dv.list(knowledge.file.link)
	}
}
```
----
