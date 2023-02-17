class Daily {
    heatmap(config, dv, renderHeatmapCalendar) {
        const calendarData = {
            year: config.year,
            intensityScaleStart: Infinity,
            intensityScaleEnd: -Infinity,
            colors: {
                green: ["#80ffdb", "#64dfdf", "#48bfe3", "#5390d9", "#6930c3"],
                boolean: ["#222", "#ffb703", "#ffb703", "#ffb703", "#ffb703"],
            },
            entries: [],
        }

        dv.span(config.title)

        let isBoolean
    
        for (let page of dv.pages('"Daily"').where(p => p[config.field] !== undefined)) {
            let data = page[config.field]
            isBoolean = typeof data !== "number"
            if (isBoolean) {
                data = data ? 2 : 1
            }

            calendarData.intensityScaleStart = Math.min(calendarData.intensityScaleStart, data)
            calendarData.intensityScaleEnd = Math.max(calendarData.intensityScaleEnd, data)

            calendarData.entries.push({
                date: moment(page.file.name).format("YYYY-MM-DD"),
                color: isBoolean ? "boolean" : "green",
                intensity: data,
                content: dv.span(`[[${page.file.name}|]]`)
            })

            // dv.span("<br>" + page.exercise)
        }
        
        renderHeatmapCalendar(this.container, calendarData)
    }
}