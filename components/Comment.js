export function Comment(data) {
    const comment = document.createElement('div');
    comment.className = 'comment';
    comment.style.marginLeft = `${data.level * 8}px`;
    
    const flair = data.flair ? `<span class="flair flair-${data.flair}">${data.flair}</span>` : '';
    
    comment.innerHTML = `
        <div class="comment-meta">
            ${flair}
            <strong>u/${data.author}</strong> • ${data.timePosted}
            <div class="vote-buttons">
                <span>↑</span> ${data.upvotes} <span>↓</span>
            </div>
        </div>
        <div class="comment-content">
            ${data.content}
        </div>
        <div class="comment-actions">
            Reply • Share • Save • Follow
        </div>
    `;

    // Recursively render child comments
    if (data.replies && data.replies.length > 0) {
        data.replies.forEach(reply => {
            const replyElement = Comment({...reply, level: (data.level || 0) + 1});
            comment.appendChild(replyElement);
        });
    }

    return comment;
}

