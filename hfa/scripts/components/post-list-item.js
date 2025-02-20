function buildPostListItem(postItem) {
    return `
        <a href="${postItem.postUrl}" class="post-item">
            <article>
                <h2 class="item-title">${postItem.title}</h2>
                <p class="item-description">${postItem.description}</p>
                <img class="item-img" src="${postItem.thumbnailUrl}" alt="${postItem.title}">
            </article>
        </a>
    `;
}

export default buildPostListItem;