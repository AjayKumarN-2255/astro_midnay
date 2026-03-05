import { extractSectionContent } from "../ extractContent";

export function extractHomeSections($) {

    const bannerContent = extractSectionContent($(".banner"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
            image: { selector: "img", attr: "src" },
            btn_content: { selector: ".banner_btn" },
        },
    });

    const drivenContent = extractSectionContent($(".driven"), {
        fields: {
            image: { selector: "img", attr: "src" },
            paragraph: { selector: "p" },
            heading: { selector: ".driver_heading", format: "html" },
            content: { selector: ".driver_content" },
            subContent: { selector: ".driver_subc" },
            btn_content: { selector: ".driver_btn" },
        },
    });

    const needContent = extractSectionContent($(".need"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
        },
        cards: {
            selector: ".need_card",
            fields: {
                heading: { selector: "h2" },
                text: { selector: "p" },
                image: { selector: "img", attr: "src" },
            },
            $,
        },
    });

    const hopeContent = extractSectionContent($(".hope"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
            image: { selector: "img", attr: "src" },
        },
    });

    const profileContent = extractSectionContent($(".profile"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
        },
        cards: {
            selector: ".profile_card",
            fields: {
                name: { selector: "h4" },
                role: { selector: "h6" },
                desc: { selector: "p" },
            },
            $,
        },
    });

    const reasonFirstSection = extractSectionContent($(".reason_first"), {
        cards: {
            selector: ".profile_card",
            fields: {
                heading: { selector: "h2", format: "html" },
                content: { selector: "p" },
                desc: { selector: "p" },
                lists: { selector: "ul li", multiple: true },
                btn_content: { selector: ".first_btn" },
            },
            $,
        },
    });

    const reasonSecondSection = extractSectionContent($(".reason_second"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2", format: "html" },
            content: { selector: ".reason_content" },
            btn_content: { selector: ".reason_btn" },
        },
    });

    return {
        bannerContent,
        drivenContent,
        needContent,
        hopeContent,
        profileContent,
        reasonFirstSection,
        reasonSecondSection,
    };
}