export function createPosts(dataArray) {
    dataArray.forEach((data) => {
        const postTemplate = document.querySelector(".post").cloneNode(true);
        postTemplate.removeAttribute("hidden");

        const postDate = postTemplate.querySelector(".date");
        const postImage = postTemplate.querySelector(".post-img");
        const postText = postTemplate.querySelector(".title");
        const like = postTemplate.querySelector(".like");

        if (data.post_image === "") {
            postTemplate.querySelector(".post-img").remove();
        }

        postText.textContent = data.post_title;
        postDate.textContent = data.date;
        postImage.src = data.post_image;
        like.id = 'image_' + data.post_id;
        document.getElementById("posts-container").appendChild(postTemplate);
    });
}
