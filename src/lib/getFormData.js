
export async function fetchFormData(formId) {
    try {
        const res = await fetch(
            `${import.meta.env.PUBLIC_WP_API}/wp-json/custom/v1/form/${formId}`,
            { cache: "force-cache" }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch form: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching form data:", error);
        return null;
    }
}