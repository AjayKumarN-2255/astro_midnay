import { extractSectionContent } from "../ extractContent";

export function extractResSections($) {

    const bannerContent = extractSectionContent($(".banner"), {
        fields: {
            heading: { selector: "h2" },
            image: { selector: "img", attr: "src" },
        },
    });

    return {
        bannerContent
    }
}