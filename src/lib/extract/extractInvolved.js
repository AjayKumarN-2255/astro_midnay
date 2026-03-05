import { extractSectionContent } from "../ extractContent";

export function extractInvolvedSections($) {
    const bannerContent = extractSectionContent($(".banner"), {
        fields: {
            heading: { selector: "h2" },
            image: { selector: "img", attr: "src" },
        },
    });

    const contriContent = extractSectionContent($(".contribution"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
        },
        cards: {
            selector: ".cont_card",
            fields: {
                heading: { selector: "h2", format: "html" },
                value: { selector: ".value" },
                desc: { selector: "p" },
                lists: { selector: "ul li", multiple: true },
                btn_content: { selector: ".cont_btn" },
            },
            $,
        },
    });

    const oppContent = extractSectionContent($(".opportunities"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
        },
        cards: {
            selector: ".opp_card",
            fields: {
                title: { selector: "h2", format: "html" },
                content: { selector: "p" },
                time: { selector: ".time" },
                btn_content: { selector: ".opp_btn" },
            },
            $,
        },
    });

    const memberContent = extractSectionContent($(".member"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
        },
        cards: {
            selector: ".member_card",
            fields: {
                title: { selector: "h2", format: "html" },
                content: { selector: "p" },
                lists: { selector: "ul li", multiple: true },
                btn_content: { selector: ".member_btn" },
            },
            $,
        },
    });

    const fundContent = extractSectionContent($(".fund"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
        },
        cards: {
            selector: ".fund_card",
            fields: {
                title: { selector: "h2", format: "html" },
                content: { selector: "p" },
                image: { selector: "img", attr: "src" },
            },
            $,
        },
    });

    const advContent = extractSectionContent($(".adv"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2", format: "html" },
            content: { selector: ".adv_content" },
            image: { selector: "img", attr: "src" },
        },
    });

    const supportContent = extractSectionContent($(".support"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2", format: "html" },
            btn_content: { selector: ".support_btn" },
        },
    });

    return {
        bannerContent,
        contriContent,
        oppContent,
        memberContent,
        fundContent,
        advContent,
        supportContent
    };
}