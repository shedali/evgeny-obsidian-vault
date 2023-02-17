---
id: <% tp.date.now("YYYMMDDHHmm") %>
aliases: <% tp.file.cursor(1) %>
status: <% tp.system.suggester(["Planning", "Watching", "Finished", "Dropped"], ["planning", "watching", "finished", "dropped"], true, "planning") %>
rating: 0
---
Type: <% tp.system.suggester(["Movie", "TV"], ["#movie", "#tv"], true, "#movie") %>
Tags: <% tp.file.cursor(2) %>

# <% tp.file.title %>
<% tp.file.cursor(3) %>
<% await tp.file.move("/Movies/" + tp.file.title) %>
