/**
 * Class representing a Post object.
 */
class Post {
    constructor(title, description, thumbnailUrl) {
        this._title = title;
        this._description = description;
        this._thumbailUrl = thumbnailUrl;
    }
    get title() {
        return this._title
    }
    get description() {
        return this._description;
    }
    get thumbnailUrl() {
        return this._thumbailUrl;
    } 
}

export default Post;