// App.js - Main application logic
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// Initialize the application
function initApp() {
    setupNavigation();
    setupAuth();
    setupModals();
    setupForms();
    loadMainThreadPosts();
    loadCommunityThreads();
    checkAuthState();
}

// ===== Navigation =====
function setupNavigation() {
    const navLinks = document.querySelectorAll('.side-nav .nav-link, .main-nav .nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = href.substring(1);

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show target section
            sections.forEach(s => s.classList.remove('active'));
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // App launch button
    const appLaunchBtn = document.getElementById('appLaunchBtn');
    if (appLaunchBtn) {
        appLaunchBtn.addEventListener('click', () => {
            alert('App launch feature - Ready to be implemented with your app!');
            // window.location.href = 'your-app-url'; // Replace with actual app URL
        });
    }

    // Admin link in footer
    const adminLink = document.getElementById('adminLinkFooter');
    if (adminLink) {
        adminLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'admin.html';
        });
    }
}

// ===== Authentication =====
function setupAuth() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => openModal('loginModal'));
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => openModal('signupModal'));
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
}

function checkAuthState() {
    const user = getCurrentUser();
    const authButtons = document.querySelector('.auth-buttons');
    
    if (user) {
        // User is logged in
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('signupBtn').style.display = 'none';
        
        const userMenu = document.getElementById('userMenu');
        userMenu.classList.remove('hidden');
        
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userAvatar').textContent = getInitials(user.name);
    } else {
        // User is not logged in
        document.getElementById('loginBtn').style.display = 'inline-flex';
        document.getElementById('signupBtn').style.display = 'inline-flex';
        document.getElementById('userMenu').classList.add('hidden');
    }
}

function login(email, password) {
    // Simulate login (in production, this would be an API call)
    const user = {
        id: Date.now(),
        email: email,
        name: email.split('@')[0],
        createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    
    checkAuthState();
    closeModal('loginModal');
    showNotification('Successfully logged in!', 'success');
}

function signup(name, email, password) {
    // Simulate signup (in production, this would be an API call)
    const user = {
        id: Date.now(),
        email: email,
        name: name,
        createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    
    checkAuthState();
    closeModal('signupModal');
    showNotification('Account created successfully!', 'success');
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    checkAuthState();
    showNotification('Logged out successfully', 'success');
}

function getCurrentUser() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) return null;
    
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

function isAuthenticated() {
    return getCurrentUser() !== null;
}

// ===== Modals =====
function setupModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Close button handlers
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal.id);
        });
    });

    // Click outside to close
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    closeModal(modal.id);
                }
            });
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== Forms =====
function setupForms() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            login(email, password);
            loginForm.reset();
        });
    }

    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirm = document.getElementById('signupConfirm').value;
            
            if (password !== confirm) {
                showNotification('Passwords do not match', 'error');
                return;
            }
            
            signup(name, email, password);
            signupForm.reset();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                subject: document.getElementById('contactSubject').value,
                message: document.getElementById('contactMessage').value,
                timestamp: new Date().toISOString()
            };
            
            // In production, send to backend
            console.log('Contact form submitted:', formData);
            showNotification('Message sent! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    // Create thread button
    const createThreadBtn = document.getElementById('createThreadBtn');
    if (createThreadBtn) {
        createThreadBtn.addEventListener('click', () => {
            if (!isAuthenticated()) {
                showNotification('Please log in to create a thread', 'error');
                openModal('loginModal');
                return;
            }
            openModal('createThreadModal');
        });
    }

    // Create thread form
    const createThreadForm = document.getElementById('createThreadForm');
    if (createThreadForm) {
        createThreadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('threadTitle').value;
            const content = document.getElementById('threadContent').value;
            createCommunityThread(title, content);
            createThreadForm.reset();
            closeModal('createThreadModal');
        });
    }

    // Reply form
    const replyForm = document.getElementById('replyForm');
    if (replyForm) {
        replyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const threadId = document.getElementById('replyThreadId').value;
            const content = document.getElementById('replyContent').value;
            addReply(threadId, content);
            replyForm.reset();
            closeModal('replyModal');
        });
    }
}

// ===== Main Thread Posts =====
function loadMainThreadPosts() {
    const container = document.getElementById('mainThreadPosts');
    let posts = getMainThreadPosts();
    
    // If no posts exist, create a welcome post
    if (posts.length === 0) {
        const welcomePost = {
            id: 'main-1',
            title: 'Welcome to AI v.Human',
            content: 'This is the main thread where Joshua Sebastian shares updates, insights, and reflections on our collaborative intelligence journey. The foundation of this platform rests on the Antho-Tech Epistemology framework and the original dialogues captured in the OG Thread. Everything that follows builds upon these foundational documents.',
            author: 'Joshua Sebastian',
            authorId: 'founder',
            timestamp: new Date().toISOString(),
            isFounder: true
        };
        posts = [welcomePost];
        saveMainThreadPosts(posts);
    }
    
    renderMainThreadPosts(posts);
}

function renderMainThreadPosts(posts) {
    const container = document.getElementById('mainThreadPosts');
    const postCount = document.getElementById('postCount');
    
    if (posts.length === 0) {
        container.innerHTML = '<div class="loading">No posts yet.</div>';
        postCount.textContent = '0 posts';
        return;
    }
    
    postCount.textContent = `${posts.length} ${posts.length === 1 ? 'post' : 'posts'}`;
    
    container.innerHTML = posts.map(post => `
        <div class="thread-post">
            <div class="post-header">
                <div class="post-author">
                    <div class="post-avatar">${getInitials(post.author)}</div>
                    <div class="post-meta">
                        <div class="post-name">${post.author}</div>
                        <div class="post-time">${formatDate(post.timestamp)}</div>
                    </div>
                </div>
                ${post.isFounder ? '<span class="badge badge-founder">Founder</span>' : ''}
            </div>
            <div class="post-content">
                <h4>${post.title}</h4>
                <p>${post.content}</p>
            </div>
        </div>
    `).join('');
}

function getMainThreadPosts() {
    const posts = localStorage.getItem('mainThreadPosts');
    return posts ? JSON.parse(posts) : [];
}

function saveMainThreadPosts(posts) {
    localStorage.setItem('mainThreadPosts', JSON.stringify(posts));
}

// ===== Community Threads =====
function loadCommunityThreads() {
    const threads = getCommunityThreads();
    renderCommunityThreads(threads);
}

function renderCommunityThreads(threads) {
    const container = document.getElementById('communityThreads');
    
    if (threads.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No community threads yet. Be the first to start a conversation!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = threads.map(thread => `
        <div class="thread-post">
            <div class="post-header">
                <div class="post-author">
                    <div class="post-avatar">${getInitials(thread.author)}</div>
                    <div class="post-meta">
                        <div class="post-name">${thread.author}</div>
                        <div class="post-time">${formatDate(thread.timestamp)}</div>
                    </div>
                </div>
            </div>
            <div class="post-content">
                <h4>${thread.title}</h4>
                <p>${thread.content}</p>
            </div>
            <div class="post-actions">
                <button onclick="openReplyModal('${thread.id}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Reply (${thread.replies ? thread.replies.length : 0})
                </button>
            </div>
            ${thread.replies && thread.replies.length > 0 ? `
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
                    ${thread.replies.map(reply => `
                        <div style="padding: 1rem; background: white; border-radius: 0.5rem; margin-bottom: 0.75rem;">
                            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                                <strong>${reply.author}</strong>
                                <span style="color: var(--text-muted); font-size: 0.875rem;">${formatDate(reply.timestamp)}</span>
                            </div>
                            <p style="color: var(--text-secondary); margin: 0;">${reply.content}</p>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

function createCommunityThread(title, content) {
    const user = getCurrentUser();
    if (!user) {
        showNotification('Please log in to create a thread', 'error');
        return;
    }
    
    const thread = {
        id: `thread-${Date.now()}`,
        title: title,
        content: content,
        author: user.name,
        authorId: user.id,
        timestamp: new Date().toISOString(),
        replies: []
    };
    
    const threads = getCommunityThreads();
    threads.unshift(thread);
    saveCommunityThreads(threads);
    
    renderCommunityThreads(threads);
    showNotification('Thread created successfully!', 'success');
}

function getCommunityThreads() {
    const threads = localStorage.getItem('communityThreads');
    return threads ? JSON.parse(threads) : [];
}

function saveCommunityThreads(threads) {
    localStorage.setItem('communityThreads', JSON.stringify(threads));
}

function openReplyModal(threadId) {
    if (!isAuthenticated()) {
        showNotification('Please log in to reply', 'error');
        openModal('loginModal');
        return;
    }
    
    document.getElementById('replyThreadId').value = threadId;
    openModal('replyModal');
}

function addReply(threadId, content) {
    const user = getCurrentUser();
    if (!user) return;
    
    const threads = getCommunityThreads();
    const thread = threads.find(t => t.id === threadId);
    
    if (thread) {
        if (!thread.replies) thread.replies = [];
        
        thread.replies.push({
            id: `reply-${Date.now()}`,
            content: content,
            author: user.name,
            authorId: user.id,
            timestamp: new Date().toISOString()
        });
        
        saveCommunityThreads(threads);
        renderCommunityThreads(threads);
        showNotification('Reply posted!', 'success');
    }
}

// ===== Document Viewers =====
document.getElementById('viewEpistemologyBtn')?.addEventListener('click', () => {
    window.location.href = 'epistemology-full.html';
});

document.getElementById('downloadEpistemologyBtn')?.addEventListener('click', () => {
    window.location.href = 'epistemology-full.html';
});

document.getElementById('viewOGThreadBtn')?.addEventListener('click', () => {
    window.location.href = 'og-thread-full.html';
});

document.getElementById('downloadOGThreadBtn')?.addEventListener('click', () => {
    window.location.href = 'og-thread-full.html';
});

// ===== Utility Functions =====
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
    // Simple notification system
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

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
