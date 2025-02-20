import renderPostList from "../components/posts-list.js";
import initializeCoreComponents from "../main.js";

function initializePageResources() {
    initializeCoreComponents();
    renderPostList();
};

initializePageResources();