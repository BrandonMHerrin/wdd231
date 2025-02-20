class PostRepository {
    constructor() {
        this._url = 'scripts/data/posts.json'
    }
    async getPosts() {
        const response = await fetch(this._url);
        return await response.json();
    }
};

export default PostRepository;