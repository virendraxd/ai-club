document.addEventListener('DOMContentLoaded', () => {
    const sidebarList = document.getElementById('sidebar-list');
    const sections = document.querySelectorAll('.content-section');

    /**
     * Generate Sidebar Navigation dynamically from HTML sections
     */
    function generateSidebar() {
        sidebarList.innerHTML = '';

        sections.forEach((section) => {
            const sectionId = section.id;
            const titleElement = section.querySelector('h2');
            const titleText = titleElement ? titleElement.textContent : capitalizeFirstLetter(sectionId);

            // Special handling for About section (Mission, Vision, Values)
            if (sectionId === 'about') {
                const li = document.createElement('li');
                li.className = 'sidebar-item-container';

                const mainButton = document.createElement('button');
                mainButton.className = 'sidebar-main-btn';
                mainButton.textContent = titleText;
                mainButton.setAttribute('data-section', sectionId);
                mainButton.onclick = () => scrollToElement(sectionId);

                li.appendChild(mainButton);

                const subUl = document.createElement('ul');
                subUl.className = 'sidebar-sub-list';
                
                const tabs = [
                    { id: 'mission-tab', text: 'Our Mission' },
                    { id: 'vision-tab', text: 'Our Vision' },
                    { id: 'values-tab', text: 'Our Values' }
                ];

                tabs.forEach(tab => {
                    const subLi = document.createElement('li');
                    const subButton = document.createElement('button');
                    subButton.className = 'sidebar-sub-btn';
                    subButton.textContent = tab.text;
                    subButton.setAttribute('data-section', tab.id);
                    
                    subButton.onclick = () => {
                        showTab(tab.id, document.querySelector(`.tab-btn[onclick*="${tab.id}"]`));
                        scrollToElement(sectionId);
                    };
                    
                    subLi.appendChild(subButton);
                    subUl.appendChild(subLi);
                });
                li.appendChild(subUl);
                sidebarList.appendChild(li);
                return;
            }

            // Skip our-core in sidebar
            if (sectionId === 'our-core') return;

            const li = document.createElement('li');
            li.className = 'sidebar-item-container';

            const mainButton = document.createElement('button');
            mainButton.className = 'sidebar-main-btn';
            mainButton.textContent = titleText;
            mainButton.setAttribute('data-section', sectionId);
            mainButton.onclick = () => scrollToElement(sectionId);

            li.appendChild(mainButton);

            // Standard handling for other sections with h3 subheadings
            const subheadings = section.querySelectorAll('h3');
            if (subheadings.length > 0) {
                const subUl = document.createElement('ul');
                subUl.className = 'sidebar-sub-list';

                subheadings.forEach((sub, index) => {
                    if (!sub.id) sub.id = `${sectionId}-sub-${index}`;
                    const subLi = document.createElement('li');
                    const subButton = document.createElement('button');
                    subButton.className = 'sidebar-sub-btn';
                    subButton.textContent = sub.textContent;
                    subButton.setAttribute('data-section', sub.id);
                    subButton.onclick = () => scrollToElement(sub.id);

                    subLi.appendChild(subButton);
                    subUl.appendChild(subLi);
                });
                li.appendChild(subUl);
            }

            sidebarList.appendChild(li);
        });
    }

    function scrollToElement(id) {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * Setup Scroll Spy to highlight sidebar items
     */
    function setupScrollSpy() {
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -85% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    document.querySelectorAll('.sidebar button').forEach(btn => {
                        btn.classList.toggle('active', btn.getAttribute('data-section') === id);
                    });
                }
            });
        }, observerOptions);

        // Observe main sections and subheadings
        document.querySelectorAll('.content-section, .section-body h3').forEach(el => {
            observer.observe(el);
        });
    }

    // Initialize
    generateSidebar();
    setupScrollSpy();
    setupScrollHandlers();
    setupSidebarToggle();
});

/**
 * Handle Sidebar Toggle
 */
function setupSidebarToggle() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content-container');

    if (toggleBtn && sidebar && content) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            content.classList.toggle('full-width');
            toggleBtn.classList.toggle('active');
            
            // Change icon based on state
            toggleBtn.textContent = sidebar.classList.contains('hidden') ? '☰' : '✕';
        });
    }
}

/**
 * Handle window scroll for progress bar and back-to-top button
 */
function setupScrollHandlers() {
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    window.onscroll = function() {
        // Scroll Progress Bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = scrolled + "%";

        // Back to Top Button
        if (backToTopBtn) {
            if (winScroll > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        }
    };

    if (backToTopBtn) {
        backToTopBtn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
}

/**
 * Tab switching logic
 */
function showTab(tabId, btn) {
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.add('hidden');
        pane.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });

    // Show selected pane
    const selectedPane = document.getElementById(tabId);
    if (selectedPane) {
        selectedPane.classList.remove('hidden');
        selectedPane.classList.add('active');
    }

    // Set active button
    if (btn) btn.classList.add('active');
}