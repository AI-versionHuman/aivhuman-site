// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', () => {
    checkAdminAuth();
    initAdmin();
});

// Admin credentials (in production, this would be secure backend authentication)
const ADMIN_CREDENTIALS = {
    username: 'joshuasebastian',
    password: 'aivhuman2026' // Change this to a secure password
};

function checkAdminAuth() {
    const isAdminLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    
    if (isAdminLoggedIn) {
        showDashboard();
    } else {
        showLogin();
    }
}

function showLogin() {
    document.getElementById('adminLogin').style.display = 'flex';
    document.getElementById('adminDashboard').classList.remove('active');
}

function showDashboard() {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').classList.add('active');
}

function initAdmin() {
    // Login form
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleAdminLogin);
    }

    // Logout button
    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleAdminLogout);
    }

    // Navigation
    setupAdminNavigation();
    
    // Main thread management
    setupMainThreadManagement();
    
    // Load dashboard data
    loadDashboardStats();
    loadActivityFeed();
}

function handleAdminLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        showDashboard();
        showNotification('Welcome back, Joshua!', 'success');
        loadAllAdminData();
    } else {
        showNotification('Invalid credentials', 'error');
    }
}

function handleAdminLogout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem('adminLoggedIn');
        showLogin();
    }
}

function setupAdminNavigation() {
    const navItems = document.querySelectorAll('.admin-nav .nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            const section = item.getAttribute('data-section');
            
            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Show section
            document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
            const targetSection = document.getElementById(section + 'Section');
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Load section-specific data
                if (section === 'main-thread') {
                    loadAdminPosts();
                } else if (section === 'moderation') {
                    loadModerationThreads();
                } else if (section === 'users') {
                    loadUsers();
                }
            }
        });
    });
}

// Dashboard Stats
function loadDashboardStats() {
    const mainPosts = getMainThreadPosts();
    const communityThreads = getCommunityThreads();
    const users = getAllUsers();
    
    document.getElementById('statMainPosts').textContent = mainPosts.length;
    document.getElementById('statCommunityThreads').textContent = communityThreads.length;
    document.getElementById('statUsers').textContent = users.length;
    
    const totalActivity = mainPosts.length + communityThreads.length + 
                          communityThreads.reduce((sum, t) => sum + (t.replies?.length || 0), 0);
    document.getElementById('statActivity').textContent = totalActivity;
}

function loadActivityFeed() {
    const mainPosts = getMainThreadPosts();
    const communityThreads = getCommunityThreads();
    
    const activities = [
        ...mainPosts.map(p => ({ type: 'main_post', data: p, timestamp: p.timestamp })),
        ...communityThreads.map(t => ({ type: 'community_thread', data: t, timestamp: t.timestamp }))
    ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 10);
    
    const container = document.getElementById('activityList');
    
    if (activities.length === 0) {
        container.innerHTML = '<div class="empty-state">No recent activity</div>';
        return;
    }
    
    container.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div>
                <strong>${activity.type === 'main_post' ? 'Main Thread Post' : 'Community Thread'}</strong>
                <div style="font-size: 0.875rem; color: var(--text-secondary);">${activity.data.title || activity.data.content.substring(0, 50)}...</div>
            </div>
            <div style="font-size: 0.875rem; color: var(--text-muted);">${formatDate(activity.timestamp)}</div>
        </div>
    `).join('');
}

// Main Thread Management
function setupMainThreadManagement() {
    const addPostBtn = document.getElementById('addPostBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const postEditorForm = document.getElementById('postEditorForm');
    
    if (addPostBtn) {
        addPostBtn.addEventListener('click', () => {
            showPostEditor();
        });
    }
    
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', () => {
            hidePostEditor();
        });
    }
    
    if (postEditorForm) {
        postEditorForm.addEventListener('submit', handleSavePost);
    }
    
    loadAdminPosts();
}

function showPostEditor(post = null) {
    const editor = document.getElementById('postEditor');
    const title = document.getElementById('editorTitle');
    const form = document.getElementById('postEditorForm');
    
    if (post) {
        title.textContent = 'Edit Post';
        document.getElementById('editPostId').value = post.id;
        document.getElementById('postTitle').value = post.title;
        document.getElementById('postContent').value = post.content;
    } else {
        title.textContent = 'Add New Post';
        form.reset();
        document.getElementById('editPostId').value = '';
    }
    
    editor.classList.remove('hidden');
    editor.scrollIntoView({ behavior: 'smooth' });
}

function hidePostEditor() {
    document.getElementById('postEditor').classList.add('hidden');
    document.getElementById('postEditorForm').reset();
}

function handleSavePost(e) {
    e.preventDefault();
    
    const postId = document.getElementById('editPostId').value;
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    
    let posts = getMainThreadPosts();
    
    if (postId) {
        // Edit existing post
        const index = posts.findIndex(p => p.id === postId);
        if (index !== -1) {
            posts[index] = {
                ...posts[index],
                title: title,
                content: content,
                edited: new Date().toISOString()
            };
        }
    } else {
        // Add new post
        const newPost = {
            id: `main-${Date.now()}`,
            title: title,
            content: content,
            author: 'Joshua Sebastian',
            authorId: 'founder',
            timestamp: new Date().toISOString(),
            isFounder: true
        };
        posts.unshift(newPost);
    }
    
    saveMainThreadPosts(posts);
    loadAdminPosts();
    loadDashboardStats();
    loadActivityFeed();
    hidePostEditor();
    
    showNotification(postId ? 'Post updated successfully!' : 'Post added successfully!', 'success');
}

function loadAdminPosts() {
    const posts = getMainThreadPosts();
    const container = document.getElementById('adminPostsList');
    
    if (!container) return;
    
    if (posts.length === 0) {
        container.innerHTML = '<div class="empty-state">No posts yet. Create your first post!</div>';
        return;
    }
    
    container.innerHTML = posts.map(post => `
        <div class="admin-post-item">
            <div class="admin-post-content">
                <h4>${post.title}</h4>
                <p>${post.content.substring(0, 200)}${post.content.length > 200 ? '...' : ''}</p>
                <div class="admin-post-meta">
                    Posted ${formatDate(post.timestamp)}
                    ${post.edited ? ` • Edited ${formatDate(post.edited)}` : ''}
                </div>
            </div>
            <div class="admin-post-actions">
                <button class="btn-icon" onclick="editPost('${post.id}')" title="Edit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </button>
                <button class="btn-icon danger" onclick="deletePost('${post.id}')" title="Delete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

window.editPost = function(postId) {
    const posts = getMainThreadPosts();
    const post = posts.find(p => p.id === postId);
    if (post) {
        showPostEditor(post);
    }
};

window.deletePost = function(postId) {
    if (confirm('Are you sure you want to delete this post?')) {
        let posts = getMainThreadPosts();
        posts = posts.filter(p => p.id !== postId);
        saveMainThreadPosts(posts);
        loadAdminPosts();
        loadDashboardStats();
        loadActivityFeed();
        showNotification('Post deleted successfully', 'success');
    }
};

// Moderation
function loadModerationThreads() {
    const threads = getCommunityThreads();
    const container = document.getElementById('moderationThreadsList');
    
    if (!container) return;
    
    if (threads.length === 0) {
        container.innerHTML = '<div class="empty-state">No community threads to moderate</div>';
        return;
    }
    
    container.innerHTML = threads.map(thread => `
        <div class="moderation-thread">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <div>
                    <h4>${thread.title}</h4>
                    <div style="font-size: 0.875rem; color: var(--text-muted);">
                        By ${thread.author} • ${formatDate(thread.timestamp)}
                    </div>
                </div>
            </div>
            <p style="color: var(--text-secondary);">${thread.content}</p>
            ${thread.replies && thread.replies.length > 0 ? `
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
                    <strong>${thread.replies.length} replies</strong>
                </div>
            ` : ''}
            <div class="thread-actions">
                <button class="btn-icon danger" onclick="deleteThread('${thread.id}')" title="Delete Thread">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

window.deleteThread = function(threadId) {
    if (confirm('Are you sure you want to delete this thread?')) {
        let threads = getCommunityThreads();
        threads = threads.filter(t => t.id !== threadId);
        saveCommunityThreads(threads);
        loadModerationThreads();
        loadDashboardStats();
        showNotification('Thread deleted successfully', 'success');
    }
};

// Users Management
function loadUsers() {
    const users = getAllUsers();
    const container = document.getElementById('usersList');
    
    if (!container) return;
    
    if (users.length === 0) {
        container.innerHTML = '<div class="empty-state">No registered users yet</div>';
        return;
    }
    
    container.innerHTML = users.map(user => `
        <div class="user-item">
            <div class="user-info">
                <div class="post-avatar">${getInitials(user.name)}</div>
                <div>
                    <div style="font-weight: 600;">${user.name}</div>
                    <div style="font-size: 0.875rem; color: var(--text-muted);">${user.email}</div>
                </div>
            </div>
            <div style="font-size: 0.875rem; color: var(--text-muted);">
                Joined ${formatDate(user.createdAt)}
            </div>
        </div>
    `).join('');
}

function getAllUsers() {
    // Collect unique users from all sources
    const usersMap = new Map();
    
    // Current logged-in user
    const currentUser = getCurrentUser();
    if (currentUser) {
        usersMap.set(currentUser.email, currentUser);
    }
    
    // Users from community threads
    const threads = getCommunityThreads();
    threads.forEach(thread => {
        if (thread.authorId && thread.authorId !== 'founder') {
            usersMap.set(thread.authorId, {
                id: thread.authorId,
                name: thread.author,
                email: thread.author + '@user.com', // Placeholder
                createdAt: thread.timestamp
            });
        }
    });
    
    return Array.from(usersMap.values());
}

function loadAllAdminData() {
    loadDashboardStats();
    loadActivityFeed();
    loadAdminPosts();
}

// Storage functions (reuse from app.js)
function getMainThreadPosts() {
    const posts = localStorage.getItem('mainThreadPosts');
    return posts ? JSON.parse(posts) : [];
}

function saveMainThreadPosts(posts) {
    localStorage.setItem('mainThreadPosts', JSON.stringify(posts));
}

function getCommunityThreads() {
    const threads = localStorage.getItem('communityThreads');
    return threads ? JSON.parse(threads) : [];
}

function saveCommunityThreads(threads) {
    localStorage.setItem('communityThreads', JSON.stringify(threads));
}

function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

// Utility functions
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--error)' : 'var(--primary)'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
