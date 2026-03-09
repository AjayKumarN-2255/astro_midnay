
export async function fetchFormData(formId) {
    try {
        const res = await fetch(`http://localhost:10038/wp-json/custom/v1/form/${formId}`);

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