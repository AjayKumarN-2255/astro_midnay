import { extractSectionContent } from "../ extractContent";

export function extractAboutSections($) {

    const bannerContent = extractSectionContent($(".banner"), {
        fields: {
            heading: { selector: "h2" },
            image: { selector: "img", attr: "src" },
        },
    });

    const overAllImages = extractSectionContent($(".overall"), {
        fields: {
            image_1: { selector: ".first_img img", attr: "src" },
            image_2: { selector: ".sec_img img", attr: "src" },
            image_3: { selector: ".third_img img", attr: "src" },
        },
    });

    const overAllCards = extractSectionContent($(".overall"), {
        cards: {
            selector: ".overall_card",
            fields: {
                heading: { selector: "h2" },
                content: { selector: "p" },
            },
            $,
        },
    });

    const coreValueContent = extractSectionContent($(".corevalue"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
        },
        cards: {
            selector: ".corevalue_card",
            fields: {
                heading: { selector: "h2" },
                content: { selector: "p" },
            },
            $,
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
                image: { selector: "img", attr: "src" },
                title: { selector: "h2" },
                content: { selector: "p" },
                btn_content: { selector: ".need_card_btn" },
            },
            $,
        },
    });

    const teamContent = extractSectionContent($(".team"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
        },
        cards: {
            selector: ".team_card",
            fields: {
                image: { selector: "img", attr: "src" },
                name: { selector: "h2" },
                title: { selector: "p" },
            },
            $,
        },
    });

    const partnerContent = extractSectionContent($(".partner"), {
        fields: {
            paragraph: { selector: "p" },
            heading: { selector: "h2" },
            content: { selector: ".partner_content" },
            btn_content: { selector: ".partner_btn" },
        },
    });

    return {
        bannerContent,
        overAllImages,
        overAllCards,
        coreValueContent,
        needContent,
        teamContent,
        partnerContent
    };
}