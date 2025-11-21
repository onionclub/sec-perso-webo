// --- ASHER_OS CONTENT CARTRIDGE ---
// Edit this file to change text, services, or skills.

const modules = {
    identity: `
        <div class="grid-layout">
            <div class="bento-box area-header">
                <h2>OPERATOR: NESS ASHER</h2>
                <span class="highlight">STATUS: ONLINE</span>
            </div>
            <div class="bento-box area-bio">
                <h3>// ABOUT_ME</h3>
                
                <img src="https://media.gettyimages.com/id/1158240131/photo/duck-butts.jpg?s=612x612&w=0&k=20&c=_y54oohOjJ8qiFKUW9lTaf-80fHlU_KkIgFDqJIjanI=" class="pet-frame" alt="Security Dog">
                
                <p>Operating globally under the handle 'Ness Asher'. My approach to security is different: I believe digital safety should be accessible, not scary.</p>
                <p>Valedictorian and Mathematician (UT Austin) turned Cybersecurity Specialist. I don't just write code; I help families and small businesses sleep easier at night.</p>
            </div>
            <div class="bento-box area-specs">
                <h3>// QUALIFICATIONS</h3>
                <ul>
                    <li>> B.A. Mathematics (3.96 GPA)</li>
                    <li>> M.S. Cybersecurity (WGU)</li>
                    <li>> CompTIA CySA+ Certified</li>
                    <li>> System ID: 012435531</li>
                </ul>
            </div>
            <div class="bento-box area-philo">
                <p>"Privacy is not about hiding. It is about peace of mind. I offer families the same level of protection used by institutions."</p>
            </div>
        </div>
    `,

    arsenal: `
        <div class="modules-container">
            <p style="color:#666; font-size:0.8rem; margin-bottom:10px;">root@asher_core:~/skills# list_capabilities</p>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">SECURITY & INFRASTRUCTURE</span>
                    <span class="module-status">[ CLOSED ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="sub-section-title">// ACTIVE CAPABILITIES</span>
                        <ul class="tech-list">
                            <li>Network Forensics & Incident Response</li>
                            <li>Cloud Infrastructure & Security (Azure)</li>
                        </ul>
                        <br>
                        <span class="sub-section-title">// VERIFIED CREDENTIALS</span>
                        <ul class="tech-list">
                            <li>CompTIA CySA+ (Cybersecurity Analyst) <span class="highlight">[Jan 2025]</span></li>
                            <li>ISC² CC (Certified in Cybersecurity) <span class="highlight">[Dec 2024]</span></li>
                            <li>Microsoft Azure Fundamentals (AZ-900) <span class="highlight">[Jun 2024]</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">STRATEGY & ANALYSIS</span>
                    <span class="module-status">[ CLOSED ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="sub-section-title">// ACTIVE CAPABILITIES</span>
                        <ul class="tech-list">
                            <li>Mathematical Modeling & Risk Analysis</li>
                            <li>Market Intelligence & OSINT</li>
                            <li>Technical Writing & Research</li>
                        </ul>
                        <br>
                        <span class="sub-section-title">// BACKGROUND</span>
                        <ul class="tech-list">
                            <li>
                                <strong>Proprietary Capital Trader</strong>
                                <span class="desc-text">Managed strict risk parameters on six-figure accounts.</span>
                            </li>
                            <li>
                                <strong>Actuarial Exam P (Probability)</strong>
                                <span class="desc-text">Certified by Society of Actuaries.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">CREATIVE & AUTOMATION</span>
                    <span class="module-status">[ CLOSED ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="sub-section-title">// TOOLS</span>
                        <ul class="tech-list">
                            <li>Workflow Automation (n8n)</li>
                            <li>Social Media Strategy</li>
                            <li>Video Production (Premiere Pro, CapCut)</li>
                            <li>Visual Branding (Photoshop, Canva)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    services: `
         <div class="modules-container">
            <p style="color:#666; font-size:0.8rem; margin-bottom:10px; text-align:center;">root@asher_core:~/services# load_offerings</p>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">RESIDENTIAL SECURITY</span>
                    <span class="module-status">[ HARDWARE ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="target-text">For Families & Private Residences</span>
                        <ul class="tech-list service-list">
                            <li><strong>>> Smart Home Protection</strong><br>Separating your smart fridge/cameras from your banking devices.</li>
                            <li><strong>>> Wi-Fi Strengthening</strong><br>Enterprise-grade setup for home routers to stop hackers.</li>
                            <li><strong>>> Device Encryption</strong><br>Ensuring your phones and laptops are uncrackable if stolen.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">PERSONAL PRIVACY</span>
                    <span class="module-status">[ PRIVACY ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="target-text">For High Net-Worth Individuals & Seniors</span>
                        <ul class="tech-list service-list">
                            <li><strong>>> Digital Legacy</strong><br>Setting up "Digital Wills" so your family can access accounts in emergencies.</li>
                            <li><strong>>> Identity Scrub</strong><br>Removing your home address and phone number from public search sites.</li>
                            <li><strong>>> Scam Protection</strong><br>Private hotline to verify if a text or email is a scam before you click.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">SMALL BUSINESS DEFENSE</span>
                    <span class="module-status">[ ORG_DEFENSE ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="target-text">For Private Practices & Local Shops</span>
                        <ul class="tech-list service-list">
                            <li><strong>>> Compliance Check</strong><br>Basic HIPAA/Data handling review to prevent fines.</li>
                            <li><strong>>> Email Trust</strong><br>Fixing your email settings so you don't end up in client Spam folders.</li>
                            <li><strong>>> Guest Wi-Fi Safety</strong><br>Ensuring customers can't access your Point-of-Sale system via Wi-Fi.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    uplink: `
        <h2 class="highlight">SEND A MESSAGE</h2>
        <p style="border-bottom: 1px dashed #333; padding-bottom:10px;">Fill out the form below. I usually respond within 24 hours.</p>
        
        <form class="cli-form" id="contact-form">
            <input type="text" name="_gotcha" style="display:none !important" tabindex="-1" autocomplete="off">
            <div class="input-group">
                <label>YOUR EMAIL:</label>
                <input type="email" name="email" class="cli-input" required autofocus>
            </div>
            <div class="input-group">
                <label>MESSAGE:</label>
                <input type="text" name="message" class="cli-input" required>
            </div>
            <button class="cli-btn" type="submit">[ SEND MESSAGE ]</button>
        </form>
        <div id="form-status" style="margin-top:10px; color: var(--terminal-green);"></div>
        <p style="font-size: 0.7rem; margin-top: 20px; color: #555;">Your data is kept strictly confidential.</p>
    `
};

