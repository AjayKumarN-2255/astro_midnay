async function testWPFormSubmit() {
    const formData = new FormData();

    // form fields
    formData.append("wpforms[fields][1]", "fsfsdfsdfsd fsfsdfasdfasdf");
    formData.append("wpforms[fields][2]", "");
    formData.append("wpforms[fields][3]", "fsdfsdafsd@gmail.com");
    formData.append("wpforms[fields][7]", "552525252555");
    formData.append("wpforms[fields][6]", "");
    formData.append("wpforms[fields][4]", "fsdfsdfsdfsdfsdfsdfsdfsdfsd");
    formData.append("wpforms[fields][5]", "fsfsdfsdfsdfsdf");

    // meta
    formData.append("wpforms[id]", "240");
    formData.append("wpforms[nonce]", "ae58b60145");
    // formData.append("page_title", "Form Preview");
    // formData.append("page_url", "http://localhost:10038/?wpforms_form_preview=240");
    // formData.append("url_referer", "");
    formData.append("page_id", "240");
    formData.append("wpforms[post_id]", "240");
    formData.append("wpforms[submit]", "wpforms-submit");
    // formData.append("wpforms[token]", "f44b9d6fddd655b8a026ebeff8090df8");
    formData.append("action", "wpforms_submit");
    // formData.append("start_timestamp", "1773037375");
    // formData.append("end_timestamp", "1773039707");

    try {
        const res = await fetch(
            "http://localhost:10038/wp-admin/admin-ajax.php",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await res.json();
        console.log("Response:", data);

    } catch (error) {
        console.error("Submission failed:", error);
    }
}

testWPFormSubmit()