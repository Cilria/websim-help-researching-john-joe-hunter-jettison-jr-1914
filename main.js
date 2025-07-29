import { Post } from './components/Post.js';
import { Comment } from './components/Comment.js';
import { postData, commentsData } from './data/content.js';

const app = document.getElementById('app');
app.innerHTML = '';

const postElement = Post(postData);
app.appendChild(postElement);

const commentsContainer = document.createElement('div');
commentsContainer.className = 'comments-container';
commentsData.forEach(commentData => {
    const commentElement = Comment(commentData);
    commentsContainer.appendChild(commentElement);
});
app.appendChild(commentsContainer);