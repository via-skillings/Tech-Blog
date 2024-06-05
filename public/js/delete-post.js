const deletPost = async (post_id) => {
    const response =await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.reload(); // reloads page
    } else {
        alert("Failed to delete the post."); // if unsuccessful alerts
    }
};

const deletePostHandler = (event) => {
    if (event.target.matches(".delete-post")) {
        const post_id = event.target.getAttribute("data-post-id");
        deletePostHandler(post_id);
    }
};

document.addEventListener("click", deletePostHandler);