export async function fetchData() {
    try {
        const response = await fetch('https://api.npoint.io/ac825739cb1f2120f5e7');
        if (!response.ok) {
            throw new Error('Error retrieving data from the server');
        }
        const textData = await response.text();
        const jsonData = JSON.parse(textData);
        return jsonData.posts;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export function createPosts(dataArray, container) {
    dataArray.forEach((data) => {
        const postTemplate = document.querySelector(".post").cloneNode(true);
        postTemplate.removeAttribute("hidden");
        const postDate = postTemplate.querySelector(".date");
        const postImage = postTemplate.querySelector(".post-img");
        const postText = postTemplate.querySelector(".title");

        if (data.post_image === "") {
            postTemplate.querySelector(".post-img").remove();
        }

        postText.textContent = data.post_title;
        postDate.textContent = data.date;
        postImage.src = data.post_image;

        container.appendChild(postTemplate);
    });
}
