export function Post(data) {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `
        <div class="post-header">
            <div class="post-meta">
                <span class="flair flair-gaming">PC Gaming</span>
                <span class="flair flair-OP">OP</span>
                Posted by <strong>u/${data.author}</strong> • ${data.timePosted}
            </div>
            <h1 class="post-title">${data.title}</h1>
        </div>
        <div class="post-content">
            ${data.content.map(p => `<p>${p}</p>`).join('')}
        </div>
    `;
    return post;
}

