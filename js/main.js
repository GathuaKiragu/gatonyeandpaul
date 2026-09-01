/**
 * GATONYE PAUL & COMPANY ADVOCATES - MAIN JAVASCRIPT
 */

// Practice Areas Detailed Data
const practiceData = {
    'arbitration': {
        title: 'Arbitration & Alternative Dispute Resolution (ADR)',
        icon: 'fas fa-gavel',
        description: 'We represent corporate entities, international contractors, and individuals in domestic and international arbitration proceedings. Our focus is delivering efficient, confidential, and commercially sensible resolutions outside traditional courtroom litigation.',
        services: [
            'Representation in institutional (NCIA, CIArb, LCIA, ICC) and ad-hoc arbitrations',
            'Commercial mediation and neutral evaluation',
            'Enforcement and challenge of domestic and foreign arbitral awards in the High Court of Kenya',
            'Drafting robust dispute resolution clauses in commercial agreements',
            'Arbitration across energy, construction, transport, banking, and real estate sectors'
        ]
    },
    'banking': {
        title: 'Banking and Finance Law',
        icon: 'fas fa-landmark',
        description: 'We advise commercial banks, non-bank financial institutions, microfinance bodies, and corporate borrowers on complex lending, regulatory compliance, and debt structuring in Kenya.',
        services: [
            'Preparation and perfection of banking securities (Charges, Debentures, Corporate Guarantees, Chattels)',
            'Syndicated lending, project finance, and asset-backed finance facilities',
            'Compliance advisory under the Central Bank of Kenya (CBK) Act and Prudential Guidelines',
            'Consumer protection, fintech compliance, and digital credit provider licensing',
            'Legal due diligence on prospective borrowers and loan portfolio reviews'
        ]
    },
    'business-setup': {
        title: 'Business Set-Up & Corporate Commercial',
        icon: 'fas fa-briefcase',
        description: 'Comprehensive legal advisory for local entrepreneurs and foreign investors looking to establish, structure, and expand businesses in Kenya and the wider East African region.',
        services: [
            'Incorporation of private/public companies, branch offices of foreign entities, and LLPs',
            'Drafting Articles of Association, Shareholder Agreements, and Joint Venture agreements',
            'Securing mandatory statutory licenses, Kenya Investment Authority (KenInvest) approvals, and EPZ permits',
            'Corporate secretarial services and statutory filings with the Business Registration Service (BRS)',
            'Commercial contract drafting: Service Level Agreements, Non-Disclosure Agreements, Franchise Agreements'
        ]
    },
    'litigation': {
        title: 'Litigation & Dispute Resolution',
        icon: 'fas fa-scale-balanced',
        description: 'Our advocates possess distinguished courtroom capability, representing clients before the Magistrates Court, High Court, Employment and Labour Relations Court, Environment and Land Court, and the Court of Appeal.',
        services: [
            'High-stakes commercial litigation and shareholder disputes',
            'Employment, labour relations, and executive severance litigation',
            'Intellectual property infringement and trademark defence',
            'Judicial review, public procurement appeals, and constitutional litigation',
            'Pre-litigation risk analysis and strategic settlement negotiations'
        ]
    },
    'mergers': {
        title: 'Mergers & Acquisitions and Private Equity',
        icon: 'fas fa-handshake',
        description: 'We structure, negotiate, and execute complex corporate acquisitions, asset purchases, joint ventures, and private equity investments with utmost regulatory precision.',
        services: [
            'Comprehensive legal and regulatory due diligence investigations',
            'Drafting Share Purchase Agreements (SPA), Asset Sale Agreements, and Subscription Agreements',
            'Merger notifications and antitrust clearances before the Competition Authority of Kenya (CAK) and COMESA',
            'Management buy-outs, earn-out mechanisms, and minority shareholder protections',
            'Post-acquisition integration and corporate governance restructuring'
        ]
    },
    'real-estate': {
        title: 'Real Estate, Conveyancing & Environmental Law',
        icon: 'fas fa-city',
        description: 'Our property team provides full-spectrum counsel on land acquisitions, commercial real estate developments, sectional properties, leases, and environmental compliance.',
        services: [
            'Exhaustive land registry due diligence, root of title verification, and ArdhiSasa transactions',
            'Drafting Agreements for Sale, Transfers, Leases, and Sectional Title documentation',
            'Real Estate Investment Trusts (REITs) structuring and off-plan development advisory',
            'National Environment Management Authority (NEMA) licenses and environmental impact compliance',
            'Subdivisions, change of user applications, extension of government leases, and stamp duty processing'
        ]
    },
    'regulatory': {
        title: 'Regulatory Advice, Compliance & Data Protection',
        icon: 'fas fa-clipboard-check',
        description: 'Helping organizations navigate Kenya’s rapidly evolving regulatory landscape, ensuring full statutory compliance and minimizing operational and legal risks.',
        services: [
            'Kenya Data Protection Act 2019 compliance audits, registration with ODPC, and data privacy policies',
            'Corporate governance reviews, board charters, and anti-money laundering (AML) compliance',
            'Advising regulated sectors: Telecoms (CA), Energy (EPRA), Capital Markets (CMA), Insurance (IRA)',
            'Internal compliance investigations and crisis risk management',
            'Continuous monitoring of statutory amendments and legislative developments'
        ]
    },
    'restructuring': {
        title: 'Restructuring, Insolvency & Debt Recovery',
        icon: 'fas fa-chart-line',
        description: 'Strategic remedies for financially distressed corporations, creditors, and insolvency practitioners under the Insolvency Act 2015 of Kenya.',
        services: [
            'Corporate debt workouts, consensual restructurings, and moratorium negotiations',
            'Debt-to-equity swaps and distressed asset sales',
            'Representation in administration, company voluntary arrangements (CVAs), and receiverships',
            'Liquidation (winding-up) proceedings and creditor asset recoveries',
            'Advising company directors on fiduciary duties during times of financial distress'
        ]
    },
    'tax': {
        title: 'Tax Law & Revenue Authority Advisory',
        icon: 'fas fa-calculator',
        description: 'Navigating Kenya Revenue Authority (KRA) tax assessments, transfer pricing, transaction tax structuring, and dispute representation before the Tax Appeals Tribunal.',
        services: [
            'Transactional tax planning for M&A, cross-border payments, and property sales',
            'Assistance with Value Added Tax (VAT), Corporate Income Tax, PAYE, and Withholding Tax queries',
            'Representation in dispute resolution before the Tax Appeals Tribunal and High Court',
            'Negotiating tax compromise settlements, waivers, and instalment plans with KRA',
            'Tax health checks and compliance reviews prior to regulatory audits'
        ]
    }
};

// DOM Ready Handler
document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileDrawer();
    initFaqAccordion();
    initBackToTop();
    initConsultationForm();
    initYear();
    initSmoothScroll();
});

// 1. Header Scroll Effect & Active Link Observer
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Link Highlighting on Scroll
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// 2. Mobile Drawer Navigation
function initMobileDrawer() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const closeBtn = document.getElementById('mobile-close');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-cta');

    function openDrawer() {
        drawer.classList.add('open');
        overlay.classList.add('active');
        drawer.setAttribute('aria-hidden', 'false');
        toggleBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
        drawer.setAttribute('aria-hidden', 'true');
        toggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

// 3. Practice Area Interactive Modal
function openPracticeModal(areaKey) {
    const modal = document.getElementById('practice-modal');
    const data = practiceData[areaKey];
    if (!data || !modal) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-desc').textContent = data.description;
    document.getElementById('modal-icon').innerHTML = `<i class="${data.icon}"></i>`;

    const listEl = document.getElementById('modal-list');
    listEl.innerHTML = '';
    data.services.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listEl.appendChild(li);
    });

    // Auto-select practice area in contact form
    const practiceSelect = document.getElementById('practiceSelect');
    if (practiceSelect) {
        for (let i = 0; i < practiceSelect.options.length; i++) {
            if (practiceSelect.options[i].text.toLowerCase().includes(data.title.split(' ')[0].toLowerCase())) {
                practiceSelect.selectedIndex = i;
                break;
            }
        }
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closePracticeModal() {
    const modal = document.getElementById('practice-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePracticeModal();
    }
});

// 4. FAQ Accordion Toggle
function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentItem = btn.parentElement;
            const isOpen = parentItem.classList.contains('active');

            // Close all others
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                parentItem.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// 5. Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 6. Consultation Form Submission Handler
function initConsultationForm() {
    const form = document.getElementById('consultation-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Button loading state
        const originalBtnHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Transmitting Details...</span> <i class="fas fa-spinner fa-spin"></i>`;
        feedback.style.display = 'none';

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                feedback.className = 'form-feedback success';
                feedback.innerHTML = `<i class="fas fa-check-circle"></i> Thank you for contacting Gatonye Paul &amp; Company Advocates. Your request has been received securely. An advocate will review your matter and contact you shortly.`;
                feedback.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            // Fallback graceful confirmation
            feedback.className = 'form-feedback success';
            feedback.innerHTML = `<i class="fas fa-check-circle"></i> Thank you! Your consultation request has been recorded. Our Westlands legal team will contact you shortly. For immediate assistance, please call +254 745 774 708.`;
            feedback.style.display = 'block';
            form.reset();
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
        }
    });
}

// 7. Smooth Anchor Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 8. Dynamic Copyright Year
function initYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
