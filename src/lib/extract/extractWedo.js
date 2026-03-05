import { extractSectionContent } from "../ extractContent";

export function extractWedoSections($) {

    const bannerContent = extractSectionContent($(".banner"), {
        fields: {
            heading: { selector: "h2" },
            image: { selector: "img", attr: "src" },
        },
    });

    const drivenContent = extractSectionContent($(".driven"), {
        fields: {
            image: { selector: "img", attr: "src" },
            paragraph: { selector: "p" },
            heading: { selector: "h2", format: "html" },
            content: { selector: ".content_1" },
            subContent: { selector: ".content_2" },
        },
    });

    const serviceContent = extractSectionContent($(".services"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
        },
        cards: {
            selector: ".services_card",
            fields: {
                image: { selector: "img", attr: "src" },
                title: { selector: "h2" },
                content: { selector: "p" },
            },
            $,
        },
    });

    const supportContent = extractSectionContent($(".support"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2", format: "html" },
            content: { selector: ".support_content" },
            btn_content: { selector: ".support_btn" },
        },
    });

    return {
        bannerContent,
        drivenContent,
        serviceContent,
        supportContent
    }
}