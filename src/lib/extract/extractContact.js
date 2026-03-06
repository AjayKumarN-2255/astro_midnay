import { extractSectionContent } from "../ extractContent";

export function extractContactSections($) {

    const bannerContent = extractSectionContent($(".banner"), {
        fields: {
            heading: { selector: "h2" },
            image: { selector: "img", attr: "src" },
        },
    });

    const mapContent = extractSectionContent($(".map"), {
        fields: {
            image: { selector: "img", attr: "src" },
        },
        cards: {
            selector: ".map_card",
            fields: {
                title: { selector: "h2" },
                content: { selector: "p" },
            },
            $,
        },
    });

    return {
        mapContent,
        bannerContent
    }
}