// Admin Panel JavaScript — AI v.Human
document.addEventListener('DOMContentLoaded', () => {
    checkAdminAuth();
    initAdmin();
});

// Admin credentials
const ADMIN_CREDENTIALS = {
    username: 'joshuasebastian',
    password: 'aivhuman2026'
};

// ==================== AUTH ====================
function checkAdminAuth() {
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
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

// ==================== INIT ====================
function initAdmin() {
    // Login
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) loginForm.addEventListener('submit', handleAdminLogin);

    // Logout
    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleAdminLogout);

    // Navigation
    setupAdminNavigation();

    // Main thread
    setupMainThreadManagement();

    // Moderation filters
    setupModerationFilters();

    // Quick actions
    setupQuickActions();

    // Clickable stat cards
    setupStatCards();

    // Load data
    loadDashboardStats();
    loadActivityFeed();
    updateModBadge();
}

// ==================== NAVIGATION ====================
function setupAdminNavigation() {
    const navItems = document.querySelectorAll('.admin-nav .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection(item.getAttribute('data-section'));
        });
    });
}

function navigateToSection(section) {
    // Update nav
    document.querySelectorAll('.admin-nav .nav-item').forEach(nav => nav.classList.remove('active'));
    const activeNav = document.querySelector('.admin-nav .nav-item[data-section="' + section + '"]');
    if (activeNav) activeNav.classList.add('active');

    // Show section
    document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
    const targetSection = document.getElementById(section + 'Section')
                       || document.getElementById(section.replace(/-/g, '-') + 'Section');
    if (targetSection) {
        targetSection.classList.add('active');
        if (section === 'main-thread') loadAdminPosts();
        else if (section === 'moderation') loadModerationThreads();
        else if (section === 'users') loadUsers();
    }
}

function setupStatCards() {
    document.querySelectorAll('.stat-card.clickable').forEach(card => {
        card.addEventListener('click', () => {
            const section = card.getAttribute('data-goto');
            if (section) navigateToSection(section);
        });
    });
}

// ==================== DASHBOARD ====================
function loadDashboardStats() {
    const mainPosts = getMainThreadPosts();
    const communityThreads = getCommunityThreads();
    const users = getAllUsers();

    const totalReplies = communityThreads.reduce((sum, t) => sum + (t.replies ? t.replies.length : 0), 0);

    document.getElementById('statMainPosts').textContent = mainPosts.length;
    document.getElementById('statCommunityThreads').textContent = communityThreads.length;
    document.getElementById('statUsers').textContent = users.length;
    document.getElementById('statReplies').textContent = totalReplies;
}

function loadActivityFeed() {
    const mainPosts = getMainThreadPosts();
    const communityThreads = getCommunityThreads();

    const activities = [];

    mainPosts.forEach(function(p) {
        activities.push({
            type: 'post', label: 'Main Post',
            title: p.title || 'Untitled',
            timestamp: p.timestamp
        });
    });

    communityThreads.forEach(function(t) {
        activities.push({
            type: 'thread', label: 'Community',
            title: t.title || (t.content ? t.content.substring(0, 50) : 'Untitled'),
            timestamp: t.timestamp
        });
        var replies = t.replies || [];
        replies.forEach(function(r) {
            activities.push({
                type: 'reply', label: 'Reply',
                title: (r.author || 'Anon') + ': ' + (r.content || '').substring(0, 50),
                timestamp: r.timestamp
            });
        });
    });

    activities.sort(function(a, b) { return new Date(b.timestamp) - new Date(a.timestamp); });

    var container = document.getElementById('activityList');
    var recent = activities.slice(0, 15);

    if (recent.length === 0) {
        container.innerHTML = '<div class="empty-state">No recent activity</div>';
        return;
    }

    container.innerHTML = recent.map(function(a) {
        return '<div class="activity-item">' +
            '<div>' +
                '<span class="activity-type ' + a.type + '">' + a.label + '</span>' +
                '<div style="font-size: 0.9rem; color: var(--text-secondary);">' + escapeHtml(a.title) + '</div>' +
            '</div>' +
            '<div style="font-size: 0.8rem; color: var(--text-muted); white-space: nowrap;">' + formatDate(a.timestamp) + '</div>' +
        '</div>';
    }).join('');
}

// ==================== QUICK ACTIONS ====================
function setupQuickActions() {
    var quickNewPost = document.getElementById('quickNewPost');
    if (quickNewPost) {
        quickNewPost.addEventListener('click', function() {
            navigateToSection('main-thread');
            setTimeout(function() { showPostEditor(); }, 100);
        });
    }

    var quickClearData = document.getElementById('quickClearData');
    if (quickClearData) {
        quickClearData.addEventListener('click', function() {
            if (confirm('This will delete ALL main thread posts and community threads. This cannot be undone.\n\nAre you sure?')) {
                localStorage.removeItem('mainThreadPosts');
                localStorage.removeItem('communityThreads');
                loadAllAdminData();
                showNotification('All data cleared', 'success');
            }
        });
    }

    var quickExportData = document.getElementById('quickExportData');
    if (quickExportData) {
        quickExportData.addEventListener('click', function() {
            var data = {
                exportDate: new Date().toISOString(),
                mainThreadPosts: getMainThreadPosts(),
                communityThreads: getCommunityThreads()
            };
            var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'aivhuman-data-' + new Date().toISOString().split('T')[0] + '.json';
            a.click();
            showNotification('Data exported successfully', 'success');
        });
    }

    var quickImportData = document.getElementById('quickImportData');
    if (quickImportData) {
        quickImportData.addEventListener('click', function() {
            document.getElementById('importFileInput').click();
        });
    }

    var importFileInput = document.getElementById('importFileInput');
    if (importFileInput) {
        importFileInput.addEventListener('change', function(e) {
            var file = e.target.files[0];
            if (!file) return;
            var reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    var data = JSON.parse(evt.target.result);
                    if (data.mainThreadPosts) saveMainThreadPosts(data.mainThreadPosts);
                    if (data.communityThreads) saveCommunityThreads(data.communityThreads);
                    loadAllAdminData();
                    showNotification('Imported: ' + (data.mainThreadPosts || []).length + ' posts, ' + (data.communityThreads || []).length + ' threads', 'success');
                } catch (err) {
                    showNotification('Invalid JSON file', 'error');
                }
            };
            reader.readAsText(file);
            e.target.value = '';
        });
    }
}

// ==================== MAIN THREAD ====================
function setupMainThreadManagement() {
    var addPostBtn = document.getElementById('addPostBtn');
    var cancelEditBtn = document.getElementById('cancelEditBtn');
    var postEditorForm = document.getElementById('postEditorForm');
    var postContent = document.getElementById('postContent');

    if (addPostBtn) addPostBtn.addEventListener('click', function() { showPostEditor(); });
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', function() { hidePostEditor(); });
    if (postEditorForm) postEditorForm.addEventListener('submit', handleSavePost);

    if (postContent) {
        postContent.addEventListener('input', function() {
            document.getElementById('charCount').textContent = postContent.value.length;
        });
    }

    loadAdminPosts();
}

function showPostEditor(post) {
    var editor = document.getElementById('postEditor');
    var title = document.getElementById('editorTitle');

    if (post) {
        title.textContent = 'Edit Post';
        document.getElementById('editPostId').value = post.id;
        document.getElementById('postTitle').value = post.title;
        document.getElementById('postContent').value = post.content;
        document.getElementById('postPinned').checked = !!post.pinned;
        document.getElementById('charCount').textContent = post.content.length;
    } else {
        title.textContent = 'Add New Post';
        document.getElementById('postEditorForm').reset();
        document.getElementById('editPostId').value = '';
        document.getElementById('charCount').textContent = '0';
    }

    editor.classList.remove('hidden');
    editor.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('postTitle').focus();
}

function hidePostEditor() {
    document.getElementById('postEditor').classList.add('hidden');
    document.getElementById('postEditorForm').reset();
    document.getElementById('charCount').textContent = '0';
}

function handleSavePost(e) {
    e.preventDefault();
    var postId = document.getElementById('editPostId').value;
    var title = document.getElementById('postTitle').value.trim();
    var content = document.getElementById('postContent').value.trim();
    var pinned = document.getElementById('postPinned').checked;

    if (!title || !content) return;

    var posts = getMainThreadPosts();

    if (postId) {
        var index = posts.findIndex(function(p) { return p.id === postId; });
        if (index !== -1) {
            posts[index].title = title;
            posts[index].content = content;
            posts[index].pinned = pinned;
            posts[index].edited = new Date().toISOString();
        }
    } else {
        posts.unshift({
            id: 'main-' + Date.now(),
            title: title, content: content, pinned: pinned,
            author: 'Joshua Sebastian',
            authorId: 'founder',
            timestamp: new Date().toISOString(),
            isFounder: true
        });
    }

    saveMainThreadPosts(posts);
    loadAdminPosts();
    loadDashboardStats();
    loadActivityFeed();
    hidePostEditor();
    showNotification(postId ? 'Post updated!' : 'Post published!', 'success');
}

function loadAdminPosts() {
    var posts = getMainThreadPosts();
    var container = document.getElementById('adminPostsList');
    if (!container) return;

    // Sort: pinned first, then by date
    posts.sort(function(a, b) {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    if (posts.length === 0) {
        container.innerHTML = '<div class="empty-state">No posts yet. Create your first post!</div>';
        return;
    }

    container.innerHTML = posts.map(function(post) {
        return '<div class="admin-post-item ' + (post.pinned ? 'pinned' : '') + '">' +
            '<div class="admin-post-content">' +
                '<h4>' +
                    escapeHtml(post.title) +
                    (post.pinned ? ' <span class="pin-badge">Pinned</span>' : '') +
                '</h4>' +
                '<p>' + escapeHtml(post.content.substring(0, 250)) + (post.content.length > 250 ? '...' : '') + '</p>' +
                '<div class="admin-post-meta">' +
                    'Posted ' + formatDate(post.timestamp) +
                    (post.edited ? ' &middot; Edited ' + formatDate(post.edited) : '') +
                '</div>' +
            '</div>' +
            '<div class="admin-post-actions">' +
                '<button class="btn-icon ' + (post.pinned ? 'active-toggle' : '') + '" onclick="togglePin(\'' + post.id + '\')" title="' + (post.pinned ? 'Unpin' : 'Pin to top') + '">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L12 22M12 2L8 6M12 2L16 6"/></svg>' +
                '</button>' +
                '<button class="btn-icon" onclick="editPost(\'' + post.id + '\')" title="Edit">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>' +
                '</button>' +
                '<button class="btn-icon danger" onclick="deletePost(\'' + post.id + '\')" title="Delete">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>' +
                '</button>' +
            '</div>' +
        '</div>';
    }).join('');
}

window.editPost = function(postId) {
    var post = getMainThreadPosts().find(function(p) { return p.id === postId; });
    if (post) showPostEditor(post);
};

window.deletePost = function(postId) {
    if (confirm('Delete this post? This cannot be undone.')) {
        var posts = getMainThreadPosts().filter(function(p) { return p.id !== postId; });
        saveMainThreadPosts(posts);
        loadAdminPosts();
        loadDashboardStats();
        loadActivityFeed();
        showNotification('Post deleted', 'success');
    }
};

window.togglePin = function(postId) {
    var posts = getMainThreadPosts();
    var post = posts.find(function(p) { return p.id === postId; });
    if (post) {
        post.pinned = !post.pinned;
        saveMainThreadPosts(posts);
        loadAdminPosts();
        showNotification(post.pinned ? 'Post pinned!' : 'Post unpinned', 'success');
    }
};

// ==================== MODERATION ====================
var currentFilter = 'all';

function setupModerationFilters() {
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            loadModerationThreads();
        });
    });
}

function updateModBadge() {
    var threads = getCommunityThreads();
    var count = threads.length;
    var badge = document.getElementById('modBadge');
    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

function loadModerationThreads() {
    var threads = getCommunityThreads();
    var container = document.getElementById('moderationThreadsList');
    if (!container) return;

    // Apply filter
    if (currentFilter === 'with-replies') {
        threads = threads.filter(function(t) { return t.replies && t.replies.length > 0; });
    } else if (currentFilter === 'locked') {
        threads = threads.filter(function(t) { return t.locked; });
    }

    // Update summary
    var allThreads = getCommunityThreads();
    var totalReplies = allThreads.reduce(function(sum, t) { return sum + (t.replies ? t.replies.length : 0); }, 0);
    var lockedCount = allThreads.filter(function(t) { return t.locked; }).length;
    var summary = document.getElementById('modSummary');
    if (summary) {
        summary.textContent = allThreads.length + ' threads \u00b7 ' + totalReplies + ' replies \u00b7 ' + lockedCount + ' locked';
    }

    if (threads.length === 0) {
        container.innerHTML = '<div class="empty-state">No threads match this filter</div>';
        return;
    }

    container.innerHTML = threads.map(function(thread) {
        var replyCount = thread.replies ? thread.replies.length : 0;
        var repliesHtml = '';

        if (replyCount > 0) {
            var replyItems = thread.replies.map(function(r, i) {
                return '<div class="mod-reply">' +
                    '<div class="mod-reply-content">' +
                        '<div class="mod-reply-author">' + escapeHtml(r.author || 'Anonymous') + '</div>' +
                        '<div class="mod-reply-text">' + escapeHtml(r.content || '') + '</div>' +
                        '<div class="mod-reply-time">' + formatDate(r.timestamp) + '</div>' +
                    '</div>' +
                    '<button class="btn-icon danger" onclick="deleteReply(\'' + thread.id + '\',' + i + ')" title="Delete reply" style="flex-shrink:0;">' +
                        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
                    '</button>' +
                '</div>';
            }).join('');

            repliesHtml = '<div class="mod-replies">' +
                '<div class="mod-replies-header" onclick="toggleReplies(\'' + thread.id + '\')">' +
                    '<h5><svg class="toggle-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg> ' +
                    replyCount + ' ' + (replyCount === 1 ? 'Reply' : 'Replies') + '</h5>' +
                '</div>' +
                '<div class="replies-collapsed" id="replies-' + thread.id + '">' + replyItems + '</div>' +
            '</div>';
        }

        var lockIcon = thread.locked
            ? '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>'
            : '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>';

        return '<div class="moderation-thread ' + (thread.locked ? 'locked' : '') + '">' +
            '<div class="mod-thread-header">' +
                '<div class="mod-thread-info">' +
                    '<h4>' + escapeHtml(thread.title || 'Untitled Thread') + (thread.locked ? ' <span class="lock-badge">Locked</span>' : '') + '</h4>' +
                    '<div class="mod-thread-meta">By ' + escapeHtml(thread.author || 'Anonymous') + ' &middot; ' + formatDate(thread.timestamp) + (replyCount > 0 ? ' &middot; ' + replyCount + ' replies' : '') + '</div>' +
                '</div>' +
            '</div>' +
            '<div class="mod-thread-content">' + escapeHtml(thread.content || '') + '</div>' +
            repliesHtml +
            '<div class="thread-actions">' +
                '<button class="btn-icon ' + (thread.locked ? 'active-toggle' : '') + '" onclick="toggleLock(\'' + thread.id + '\')" title="' + (thread.locked ? 'Unlock' : 'Lock') + ' thread">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + lockIcon + '</svg>' +
                '</button>' +
                '<button class="btn-icon danger" onclick="deleteThread(\'' + thread.id + '\')" title="Delete thread">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>' +
                '</button>' +
            '</div>' +
        '</div>';
    }).join('');
}

window.toggleReplies = function(threadId) {
    var container = document.getElementById('replies-' + threadId);
    var header = container ? container.previousElementSibling : null;
    if (container) {
        var isCollapsed = container.classList.contains('replies-collapsed');
        if (isCollapsed) {
            container.classList.remove('replies-collapsed');
            container.style.display = 'block';
            if (header) header.classList.add('expanded');
        } else {
            container.classList.add('replies-collapsed');
            container.style.display = 'none';
            if (header) header.classList.remove('expanded');
        }
    }
};

window.toggleLock = function(threadId) {
    var threads = getCommunityThreads();
    var thread = threads.find(function(t) { return t.id === threadId; });
    if (thread) {
        thread.locked = !thread.locked;
        saveCommunityThreads(threads);
        loadModerationThreads();
        updateModBadge();
        showNotification(thread.locked ? 'Thread locked' : 'Thread unlocked', 'success');
    }
};

window.deleteThread = function(threadId) {
    if (confirm('Delete this thread and all its replies? This cannot be undone.')) {
        var threads = getCommunityThreads().filter(function(t) { return t.id !== threadId; });
        saveCommunityThreads(threads);
        loadModerationThreads();
        loadDashboardStats();
        loadActivityFeed();
        updateModBadge();
        showNotification('Thread deleted', 'success');
    }
};

window.deleteReply = function(threadId, replyIndex) {
    if (confirm('Delete this reply?')) {
        var threads = getCommunityThreads();
        var thread = threads.find(function(t) { return t.id === threadId; });
        if (thread && thread.replies) {
            thread.replies.splice(replyIndex, 1);
            saveCommunityThreads(threads);
            loadModerationThreads();
            loadDashboardStats();
            loadActivityFeed();
            showNotification('Reply deleted', 'success');
        }
    }
};

// ==================== USERS ====================
function loadUsers() {
    var users = getAllUsers();
    var container = document.getElementById('usersList');
    if (!container) return;

    if (users.length === 0) {
        container.innerHTML = '<div class="empty-state">No registered users yet</div>';
        return;
    }

    container.innerHTML = users.map(function(user) {
        return '<div class="user-item">' +
            '<div class="user-info">' +
                '<div class="admin-avatar" style="width:36px;height:36px;font-size:0.75rem;">' + getInitials(user.name) + '</div>' +
                '<div>' +
                    '<div style="font-weight: 600;">' + escapeHtml(user.name) + '</div>' +
                    '<div style="font-size: 0.8rem; color: var(--text-muted);">' + escapeHtml(user.email || '') + '</div>' +
                '</div>' +
            '</div>' +
            '<div style="font-size: 0.8rem; color: var(--text-muted);">Joined ' + formatDate(user.createdAt) + '</div>' +
        '</div>';
    }).join('');
}

function getAllUsers() {
    var usersMap = new Map();
    var currentUser = getCurrentUser();
    if (currentUser) usersMap.set(currentUser.email, currentUser);

    getCommunityThreads().forEach(function(thread) {
        if (thread.authorId && thread.authorId !== 'founder') {
            usersMap.set(thread.authorId, {
                id: thread.authorId, name: thread.author,
                email: '', createdAt: thread.timestamp
            });
        }
        (thread.replies || []).forEach(function(r) {
            if (r.authorId && r.authorId !== 'founder') {
                usersMap.set(r.authorId, {
                    id: r.authorId, name: r.author,
                    email: '', createdAt: r.timestamp
                });
            }
        });
    });

    return Array.from(usersMap.values());
}

// ==================== STORAGE ====================
function getMainThreadPosts() {
    try { return JSON.parse(localStorage.getItem('mainThreadPosts') || '[]'); }
    catch(e) { return []; }
}
function saveMainThreadPosts(posts) {
    localStorage.setItem('mainThreadPosts', JSON.stringify(posts));
}
function getCommunityThreads() {
    try { return JSON.parse(localStorage.getItem('communityThreads') || '[]'); }
    catch(e) { return []; }
}
function saveCommunityThreads(threads) {
    localStorage.setItem('communityThreads', JSON.stringify(threads));
}
function getCurrentUser() {
    try { return JSON.parse(localStorage.getItem('currentUser') || 'null'); }
    catch(e) { return null; }
}

function loadAllAdminData() {
    loadDashboardStats();
    loadActivityFeed();
    loadAdminPosts();
    updateModBadge();
}

// ==================== UTILITIES ====================
function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
}

function getInitials(name) {
    return (name || 'U').split(' ').map(function(w) { return w[0]; }).join('').toUpperCase().substring(0, 2);
}

function formatDate(timestamp) {
    if (!timestamp) return '';
    var date = new Date(timestamp);
    var now = new Date();
    var diffMs = now - date;
    var diffMins = Math.floor(diffMs / 60000);
    var diffHours = Math.floor(diffMs / 3600000);
    var diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return diffMins + 'm ago';
    if (diffHours < 24) return diffHours + 'h ago';
    if (diffDays < 7) return diffDays + 'd ago';

    return date.toLocaleDateString('en-US', {
        month: 'short', day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
}

function showNotification(message, type) {
    var notification = document.createElement('div');
    var bg = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1';
    notification.style.cssText = 'position:fixed;top:20px;right:20px;padding:0.875rem 1.5rem;background:' + bg + ';color:white;border-radius:0.5rem;box-shadow:0 10px 25px rgba(0,0,0,0.15);z-index:10000;font-weight:500;font-size:0.9rem;font-family:Inter,sans-serif;transform:translateX(120%);transition:transform 0.3s ease;';
    notification.textContent = message;
    document.body.appendChild(notification);
    requestAnimationFrame(function() { notification.style.transform = 'translateX(0)'; });
    setTimeout(function() {
        notification.style.transform = 'translateX(120%)';
        setTimeout(function() { notification.remove(); }, 300);
    }, 3000);
}
