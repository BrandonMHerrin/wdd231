import PostRepository from "../repositories/post-repository.js";
import utils from "../utils.js";
import buildPostListItem from "./post-list-item.js";

async function renderPostList() {
    const postItemRepo = new PostRepository();
    const postItems = await postItemRepo.getPosts();
    const postListElement = utils.qs('.post-items');
    postItems.forEach((postItem) => 
        postListElement.innerHTML = postListElement.innerHTML + buildPostListItem(postItem));
};

export default renderPostList;