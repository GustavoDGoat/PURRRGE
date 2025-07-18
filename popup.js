firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Copyright (c) 2025 [Your Name]. All rights reserved.
// This Chrome extension is licensed software. Unauthorized copying or distribution is prohibited.

// License keys (plain text to comply with Chrome's no-obfuscation policy)
const BASIC_LICENSE_KEYS = [
    "BASIC10-OPQRS-67890-TUVWX",
    "BASIC11-YZABC-54321-DEFHI",
    "BASIC12-JKLMN-98765-OPQRS",
    "BASIC13-TUVWX-12345-YZABC",
    "BASIC14-DEFHI-67890-JKLMN",
    "BASIC15-OPQRS-54321-TUVWX",
    "BASIC16-YZABC-98765-DEFHI",
    "BASIC17-JKLMN-12345-OPQRS",
    "BASIC18-TUVWX-67890-YZABC",
    "BASIC19-DEFHI-54321-JKLMN",
    "BASIC20-OPQRS-98765-TUVWX",
    "BASIC21-ABCDE-12345-ZABCD",
    "BASIC22-KLMNO-67890-JKLMN",
    "BASIC23-UVWXY-54321-TUVWX",
    "BASIC24-EFGHI-98765-DEFHI",
    "BASIC25-OPQRS-12345-OPQRS",
    "BASIC26-YZABC-67890-YZABC",
    "BASIC27-JKLMN-54321-DEFHI",
    "BASIC28-TUVWX-98765-JKLMN",
    "BASIC29-DEFHI-12345-OPQRS",
    "BASIC30-OPQRS-67890-TUVWX",
    "BASIC31-YZABC-54321-ZABCD",
    "BASIC32-JKLMN-98765-JKLMN",
    "BASIC33-TUVWX-12345-DEFHI",
    "BASIC34-DEFHI-67890-OPQRS",
    "BASIC35-OPQRS-54321-TUVWX",
    "BASIC36-YZABC-98765-ZABCD",
    "BASIC37-JKLMN-12345-JKLMN",
    "BASIC38-TUVWX-67890-DEFHI",
    "BASIC39-DEFHI-54321-OPQRS",
    "BASIC40-OPQRS-98765-TUVWX",
    "BASC1-ABCDE-12345-FGHIJ",
    "BASC2-KLMNO-67890-PQRST",
    "BASC3-UVWXY-54321-ZABCD",
    "BASC4-EFGHI-98765-JKLMN",
    "BASC5-OPQRS-12345-TUVWX",
    "BASC6-YZABC-67890-DEFHI",
    "BASC7-JKLMN-54321-OPQRS",
    "BASC8-TUVWX-98765-YZABC",
    "BASC9-DEFHI-12345-JKLMN",
    "BASIC41-ABCDE-12345-JKLMN",
    "BASIC42-KLMNO-67890-ZABCD",
    "BASIC43-UVWXY-54321-DEFHI",
    "BASIC44-EFGHI-98765-OPQRS",
    "BASIC45-OPQRS-12345-TUVWX",
    "BASIC46-YZABC-67890-JKLMN",
    "BASIC47-JKLMN-54321-ZABCD",
    "BASIC48-TUVWX-98765-DEFHI",
    "BASIC49-ABCDE-12345-OPQRS",
    "BASIC50-OPQRS-67890-TUVWX"
];

const PREMIUM_LICENSE_KEYS = [
    "PREM10-DEFHI-67890-JKLMN",
    "PREM11-OPQRS-54321-TUVWX",
    "PREM12-YZABC-98765-DEFHI",
    "PREM13-JKLMN-12345-OPQRS",
    "PREM14-TUVWX-67890-YZABC",
    "PREM15-DEFHI-54321-JKLMN",
    "PREM16-OPQRS-98765-TUVWX",
    "PREM17-ABCDE-12345-ZABCD",
    "PREM18-KLMNO-67890-JKLMN",
    "PREM19-UVWXY-54321-TUVWX",
    "PREM20-EFGHI-98765-DEFHI",
    "PREM21-OPQRS-12345-OPQRS",
    "PREM22-YZABC-67890-YZABC",
    "PREM23-JKLMN-54321-DEFHI",
    "PREM24-TUVWX-98765-JKLMN",
    "PREM25-DEFHI-12345-OPQRS",
    "PREM26-OPQRS-67890-TUVWX",
    "PREM27-YZABC-54321-ZABCD",
    "PREM28-JKLMN-98765-JKLMN",
    "PREM29-TUVWX-12345-DEFHI",
    "PREM30-DEFHI-67890-OPQRS",
    "PREM1-OPQRS-12345-TUVWX",
    "PREM2-YZABC-67890-DEFHI",
    "PREM3-JKLMN-54321-OPQRS",
    "PREM4-TUVWX-98765-YZABC",
    "PREM5-DEFHI-12345-JKLMN",
    "PREM6-OPQRS-67890-TUVWX",
    "PREM7-YZABC-54321-DEFHI",
    "PREM8-JKLMN-98765-OPQRS",
    "PREM9-TUVWX-12345-YZABC",
    "PREM31-OPQRS-54321-TUVWX",
    "PREM32-YZABC-98765-ZABCD",
    "PREM33-JKLMN-12345-JKLMN",
    "PREM34-TUVWX-67890-DEFHI",
    "PREM35-DEFHI-54321-OPQRS",
    "PREM36-OPQRS-98765-TUVWX",
    "PREM37-ABCDE-12345-JKLMN",
    "PREM38-KLMNO-67890-ZABCD",
    "PREM39-UVWXY-54321-DEFHI",
    "PREM40-EFGHI-98765-OPQRS",
    "PREM41-OPQRS-12345-TUVWX",
    "PREM42-YZABC-67890-JKLMN",
    "PREM43-JKLMN-54321-ZABCD",
    "PREM44-TUVWX-98765-DEFHI",
    "PREM45-DEFHI-12345-OPQRS",
    "PREM46-OPQRS-67890-TUVWX",
    "PREM47-YZABC-54321-JKLMN",
    "PREM48-TUVWX-98765-ZABCD",
    "PREM49-DEFHI-12345-DEFHI",
    "PREM50-OPQRS-67890-TUVWX"
];

// Normalize keys to ensure consistency
const normalizeKey = (key) => key.trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
const NORMALIZED_BASIC_KEYS = BASIC_LICENSE_KEYS.map(normalizeKey);
const NORMALIZED_PREMIUM_KEYS = PREMIUM_LICENSE_KEYS.map(normalizeKey);

// DOM elements
document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('loginContainer');
    const licenseContainer = document.getElementById('licenseContainer');
    const blockContainer = document.getElementById('blockContainer');
    const emailSignInButton = document.getElementById('emailSignInButton');
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const signInButton = document.getElementById('signInButton');
    const signUpButton = document.getElementById('signUpButton');
    const licenseInput = document.getElementById('licenseInput');
    const submitLicenseButton = document.getElementById('submitLicenseButton');
    const licenseStatus = document.getElementById('licenseStatus');
    const blockButton = document.getElementById('blockButton');
    const urlInput = document.getElementById('urlInput');
    const timeFrame = document.getElementById('timeFrame');
    const categoryInput = document.getElementById('categoryInput');
    const showBlockedSites = document.getElementById('showBlockedSites');
    const blockedSitesMenu = document.getElementById('blockedSitesMenu');
    const blockedSitesList = document.getElementById('blockedSitesList');
    const status = document.getElementById('status');
    const signOutButton = document.getElementById('signOutButton');
    const closeBlockedSites = document.getElementById('closeBlockedSites');
    const spinner = document.getElementById('spinner');
    const licenseInfo = document.getElementById('licenseInfo');

    // Debug: Verify elements exist
    if (!emailSignInButton) console.error('emailSignInButton not found');
    if (!emailForm) console.error('emailForm not found');

    // Check auth state and license key
    auth.onAuthStateChanged((user) => {
        if (user) {
            loginContainer.style.display = 'none';
            chrome.storage.local.get(['licenseKey', 'licenseTier'], (data) => {
                const normalizedStoredKey = data.licenseKey ? normalizeKey(data.licenseKey) : null;
                if (normalizedStoredKey && (NORMALIZED_BASIC_KEYS.includes(normalizedStoredKey) || NORMALIZED_PREMIUM_KEYS.includes(normalizedStoredKey))) {
                    blockContainer.style.display = 'block';
                    licenseContainer.style.display = 'none';
                    updateBlockedSitesList(data.licenseTier || 'basic');
                    updateLicenseInfo(data.licenseTier || 'basic');
                } else {
                    licenseContainer.style.display = 'block';
                    blockContainer.style.display = 'none';
                }
            });
            chrome.storage.local.set({ userId: user.uid });
        } else {
            loginContainer.style.display = 'block';
            blockContainer.style.display = 'none';
            licenseContainer.style.display = 'none';
            chrome.storage.local.remove('userId');
        }
    });

    // Auto-format license key input
    licenseInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/[^A-Z0-9-]/g, '').toUpperCase();
        value = value.replace(/-/g, '');
        if (value.length > 25) value = value.slice(0, 25); // Limit to 25 characters (5x5)
        if (value.length > 5) {
            const parts = value.match(/.{1,5}/g);
            value = parts.slice(0, 5).join('-'); // Format as XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
        }
        e.target.value = value;
    });

    // Enhanced key validation function
    const validateLicenseKey = (normalizedKey) => {
        // Check for 20-character (4x5) or 25-character (5x5) key formats
        const keyFormat20 = /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/;
        const keyFormat25 = /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/;

        if (!keyFormat20.test(normalizedKey) && !keyFormat25.test(normalizedKey)) {
            return { isValid: false, tier: null, error: 'Invalid key format (must be XXXXX-XXXXX-XXXXX-XXXXX or XXXXX-XXXXX-XXXXX-XXXXX-XXXXX)' };
        }

        // Check if it's a basic or premium key (frontend validation for 20-char keys)
        const isBasic = NORMALIZED_BASIC_KEYS.includes(normalizedKey);
        const isPremium = NORMALIZED_PREMIUM_KEYS.includes(normalizedKey);

        if (isBasic) {
            return { isValid: true, tier: 'basic', error: null };
        } else if (isPremium) {
            return { isValid: true, tier: 'premium', error: null };
        }

        // For 25-character keys, assume backend validation is needed
        if (keyFormat25.test(normalizedKey)) {
            // Placeholder for backend validation (replace with your backend API call)
            // Example: return fetch('https://your-backend-api/validate-key', { method: 'POST', body: JSON.stringify({ key: normalizedKey }) })
            //     .then(response => response.json())
            //     .then(data => ({ isValid: data.isValid, tier: data.tier, error: data.error }));
            // For now, assume 25-char keys are premium (adjust based on your backend logic)
            return { isValid: true, tier: 'premium', error: null };
        }

        return { isValid: false, tier: null, error: 'Invalid license key' };
    };

    // Submit license key
    submitLicenseButton.addEventListener('click', () => {
        submitLicenseButton.classList.add('loading');
        const enteredKey = licenseInput.value.trim();
        const normalizedKey = normalizeKey(enteredKey);
        
        const validationResult = validateLicenseKey(normalizedKey);
        
        if (!validationResult.isValid) {
            licenseStatus.textContent = validationResult.error;
            submitLicenseButton.classList.remove('loading');
            return;
        }

        // Store the validated license key
        chrome.storage.local.set({ 
            licenseKey: enteredKey, 
            licenseTier: validationResult.tier,
            activationDate: new Date().toISOString()
        }, () => {
            licenseStatus.textContent = `${validationResult.tier === 'basic' ? 'Basic' : 'Premium'} License validated! Enjoy Purge.`;
            licenseContainer.style.display = 'none';
            blockContainer.style.display = 'block';
            updateBlockedSitesList(validationResult.tier);
            updateLicenseInfo(validationResult.tier);
            submitLicenseButton.classList.remove('loading');
        });

        licenseInput.value = '';
    });

    // Toggle email form
    emailSignInButton.addEventListener('click', () => {
        console.log('Email Sign-In Button clicked');
        emailForm.style.display = emailForm.style.display === 'none' ? 'block' : 'none';
    });

    // Email sign-in
    signInButton.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (!email || !password) {
            status.textContent = 'Please enter email and password.';
            return;
        }
        spinner.style.display = 'block';
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                status.textContent = 'Signed in successfully!';
                spinner.style.display = 'none';
            })
            .catch((error) => {
                console.error('Email Sign-In Error:', error);
                status.textContent = `Error: ${getFriendlyError(error.code)}`;
                spinner.style.display = 'none';
            });
    });

    // Email sign-up
    signUpButton.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (!email || !password) {
            status.textContent = 'Please enter email and password.';
            return;
        }
        spinner.style.display = 'block';
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                status.textContent = 'Account created successfully!';
                spinner.style.display = 'none';
            })
            .catch((error) => {
                console.error('Email Sign-Up Error:', error);
                status.textContent = `Error: ${getFriendlyError(error.code)}`;
                spinner.style.display = 'none';
            });
    });

    // Sign out
    signOutButton.addEventListener('click', () => {
        spinner.style.display = 'block';
        auth.signOut().then(() => {
            status.textContent = 'Signed out successfully.';
            spinner.style.display = 'none';
        }).catch((error) => {
            console.error('Sign-Out Error:', error);
            status.textContent = `Error: ${getFriendlyError(error.code)}`;
            spinner.style.display = 'none';
        });
    });

    // Toggle blocked sites menu
    showBlockedSites.addEventListener('click', () => {
        blockedSitesMenu.style.display = blockedSitesMenu.style.display === 'none' ? 'block' : 'none';
    });

    // Close blocked sites menu
    closeBlockedSites.addEventListener('click', () => {
        blockedSitesMenu.style.display = 'none';
    });

    // Block site
    blockButton.addEventListener('click', () => {
        blockButton.classList.add('loading');
        const url = urlInput.value.trim();
        const timeFrameValue = parseInt(timeFrame.value);
        const category = categoryInput.value.trim() || 'General';
        if (!url) {
            status.textContent = 'Please enter a valid URL.';
            blockButton.classList.remove('loading');
            return;
        }
        if (!isValidUrl(url)) {
            status.textContent = 'Invalid URL format (e.g., example.com).';
            blockButton.classList.remove('loading');
            return;
        }
        chrome.storage.local.get(['blockedSites', 'licenseTier'], (data) => {
            const blockedSites = data.blockedSites || {};
            const licenseTier = data.licenseTier || 'basic';
            const maxSites = licenseTier === 'premium' ? 50 : 10; // Updated limits
            const currentCount = Object.keys(blockedSites).length;
            if (currentCount >= maxSites) {
                status.textContent = `Cannot block more sites. ${licenseTier === 'premium' ? 'Premium' : 'Basic'} limit of ${maxSites} reached.`;
                blockButton.classList.remove('loading');
                return;
            }
            const cleanUrl = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
            const expiration = timeFrameValue ? Date.now() + timeFrameValue : null;
            const blockData = {
                expiration,
                category
            };
            blockedSites[cleanUrl] = blockData;
            chrome.storage.local.set({ blockedSites }, () => {
                console.log(`Blocked ${cleanUrl} until ${expiration ? new Date(expiration).toLocaleString() : 'indefinite'}`);
                status.textContent = `${cleanUrl} blocked successfully.`;
                urlInput.value = '';
                categoryInput.value = '';
                updateBlockedSitesList(licenseTier);
                updateLicenseInfo(licenseTier);
                blockButton.classList.remove('loading');
            });
        });
    });

    // Update blocked sites list and license info
    function updateBlockedSitesList(licenseTier) {
        chrome.storage.local.get(['blockedSites'], (data) => {
            const blockedSites = data.blockedSites || {};
            const maxSites = licenseTier === 'premium' ? 100 : 20;
            blockedSitesList.innerHTML = '';
            if (Object.keys(blockedSites).length === 0) {
                const li = document.createElement('li');
                li.textContent = 'No sites blocked yet.';
                blockedSitesList.appendChild(li);
            } else {
                for (const [site, data] of Object.entries(blockedSites)) {
                    const li = document.createElement('li');
                    li.innerHTML = `${site} (${data.category}) - ${
                        data.expiration ? new Date(data.expiration).toLocaleString() : 'No expiration'
                    }`;
                    blockedSitesList.appendChild(li);
                }
            }
            blockedSitesMenu.style.display = 'none';
        });
    }

    // Display license tier and usage
    function updateLicenseInfo(licenseTier) {
        chrome.storage.local.get(['blockedSites'], (data) => {
            const blockedSites = data.blockedSites || {};
            const maxSites = licenseTier === 'premium' ? 100 : 20;
            const currentCount = Object.keys(blockedSites).length;
            licenseInfo.textContent = `${licenseTier === 'premium' ? 'Premium' : 'Basic'} License: ${currentCount}/${maxSites} sites blocked`;
        });
    }

    // Validate URL
    function isValidUrl(url) {
        try {
            const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
            return parsed.hostname.includes('.');
        } catch {
            return false;
        }
    }

    // Friendly error messages
    function getFriendlyError(code) {
        const errors = {
            'auth/invalid-email': 'Invalid email address.',
            'auth/user-not-found': 'No account found with this email.',
            'auth/wrong-password': 'Incorrect password.',
            'auth/email-already-in-use': 'Email already in use.',
            'auth/weak-password': 'Password is too weak.'
        };
        return errors[code] || 'An error occurred. Please try again.';
    }
});