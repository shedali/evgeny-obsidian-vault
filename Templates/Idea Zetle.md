---
id: <% tp.date.now("YYYMMDDHHmm") %>
aliases: <% tp.file.cursor(1) %>
status: new
---
Type: #idea 
Tags: <% tp.file.cursor(2) %>

# <% tp.file.title %>
<% tp.file.cursor(3) %>
<% await tp.file.move("/Ideas/" + tp.file.title) %>
