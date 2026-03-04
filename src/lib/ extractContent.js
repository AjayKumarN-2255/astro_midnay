function getValue(el, selector, format = "text") {
    if (!selector) return "";

    const node = el.find(selector).first();
    if (!node.length) return "";

    return format === "html"
        ? node.html()?.trim() || ""
        : node.text().trim();
}

function extractSectionContent(sectionElement, config = {}, $ = () => { }) {
    const content = {};

    // Simple fields
    if (config.fields) {
        for (const key in config.fields) {
            const {
                selector,
                format = "text",
                attr,
                multiple = false,
            } = config.fields[key];

            if (multiple) {
                content[key] = sectionElement
                    .find(selector)
                    .map(function () {
                        return format === "html"
                            ? $(this).html()?.trim() || ""
                            : $(this).text().trim();
                    })
                    .get();
            } else if (attr) {
                content[key] =
                    sectionElement.find(selector).first().attr(attr) || "";
            } else {
                content[key] = getValue(sectionElement, selector, format);
            }
        }
    }

    // Cards / repeaters
    if (config.cards) {
        const {
            selector,
            fields,
            $
        } = config.cards;

        content.cards = sectionElement
            .find(selector)
            .map(function () {
                const card = $(this);
                const cardData = {};

                for (const key in fields) {
                    const {
                        selector,
                        format = "text",
                        attr,
                        multiple = false,
                    } = fields[key];

                    if (multiple) {
                        cardData[key] = card
                            .find(selector)
                            .map(function () {
                                return format === "html"
                                    ? $(this).html()?.trim() || ""
                                    : $(this).text().trim();
                            })
                            .get();
                    } else if (attr) {
                        cardData[key] = card.find(selector).first().attr(attr) || "";
                    } else {
                        cardData[key] = getValue(card, selector, format);
                    }
                }

                return cardData;
            })
            .get();
    }

    return content;
}

export { extractSectionContent };