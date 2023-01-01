const stripHtml = (html: any) => {
	const doc = new DOMParser().parseFromString(html, "text/html");
	return doc.body.textContent || "";
};

export default stripHtml;
