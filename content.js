// --- MINH_OS CONTENT CARTRIDGE ---
// Edit this file to change text, services, or skills.
// Do not touch the backticks (`) at the start and end of sections.

const modules = {
    identity: `
        <div class="grid-layout">
            <div class="bento-box area-header">
                <h2>OPERATOR: MINH NGUYEN</h2>
                <span class="highlight">STATUS: ONLINE [HOUSTON, TX]</span>
            </div>
            <div class="bento-box area-bio">
                <h3>// BIO_METRICS</h3>
                <p>A digital guardian operating in the space between rigid logic and intuitive defense. Valedictorian and High-Honors Mathematician (UT Austin), initially on a pre-medical trajectory, now a Cybersecurity Specialist.</p>
                <p>This path, rooted in analytical rigor and a deep commitment to well-being, has evolved from human health to digital security, where I do not just patch vulnerabilities; I secure legacies.</p>
            </div>
            <div class="bento-box area-specs">
                <h3>// SYS_SPECS</h3>
                <ul>
                    <li>> B.A. Mathematics (3.96 GPA)</li>
                    <li>> M.S. Cybersecurity (WGU)</li>
                    <li>> Archetype: INFJ // Architect</li>
                    <li>> System ID: 012435531</li>
                </ul>
            </div>
            <div class="bento-box area-philo">
                <p>"Privacy is not about hiding. It is about sovereignty. I offer families the same level of protection used by institutions."</p>
            </div>
        </div>
    `,

    arsenal: `
        <div class="modules-container">
            <p style="color:#666; font-size:0.8rem; margin-bottom:10px;">root@minh_os:~/profile# select_module_to_mount</p>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">SECURITY & INFRASTRUCTURE</span>
                    <span class="module-status">[ CLOSED ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="sub-section-title">// ACTIVE CAPABILITIES</span>
                        <ul class="tech-list">
                            <li>Network Forensics & Incident Response (Nmap, Volatility)</li>
                            <li>Cloud Infrastructure & Security (Azure, GRC Frameworks)</li>
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
                    <span class="module-title">STRATEGY, RISK & ANALYSIS</span>
                    <span class="module-status">[ CLOSED ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="sub-section-title">// ACTIVE CAPABILITIES</span>
                        <ul class="tech-list">
                            <li>Mathematical Modeling & Risk Analysis</li>
                            <li>Market Intelligence & OSINT</li>
                            <li>Technical Writing & Advanced Research</li>
                        </ul>
                        <br>
                        <span class="sub-section-title">// ACHIEVEMENT LOG</span>
                        <ul class="tech-list">
                            <li>
                                <strong>Proprietary Capital Trader (Top 1%)</strong>
                                <span class="desc-text">Maintained six-figure capital allocations under strict statistical drawdown parameters.</span>
                            </li>
                            <li>
                                <strong>Actuarial Exam P (Probability)</strong>
                                <span class="desc-text">Passed Dec 2019 (Society of Actuaries).</span>
                            </li>
                            <li>
                                <strong>MCAT (Academic Standard)</strong>
                                <span class="desc-text">Scored 513 (90th Percentile). High-level aptitude in physical foundations of biological systems.</span>
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
                        <span class="sub-section-title">// ACTIVE CAPABILITIES</span>
                        <ul class="tech-list">
                            <li>Workflow Automation & Integration (n8n)</li>
                            <li>End-to-End Social Media Management (Strategy to Publish)</li>
                            <li>High-Fidelity Video Production (Adobe Premiere Pro, CapCut)</li>
                            <li>Visual Branding & Content Strategy (Adobe Photoshop, Canva)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    services: `
         <div class="modules-container">
            <p style="color:#666; font-size:0.8rem; margin-bottom:10px; text-align:center;">root@minh_os:~/services# initiate_protocol_sequence</p>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">SECURE_DWELLING</span>
                    <span class="module-status">[ HARDWARE ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="target-text">Target: Families & Private Residences</span>
                        <ul class="tech-list service-list">
                            <li><strong>>> Network_Segmentation</strong><br>Air-gapping smart home IoT from banking data.</li>
                            <li><strong>>> Wi-Fi_Hardening</strong><br>Enterprise-grade config for residential routers.</li>
                            <li><strong>>> Device_Encryption</strong><br>BitLocker/FileVault verification for mobile assets.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">GHOST_PROTOCOL</span>
                    <span class="module-status">[ PRIVACY ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="target-text">Target: HNWIs, Seniors & Public Figures</span>
                        <ul class="tech-list service-list">
                            <li><strong>>> Digital_Legacy</strong><br>"Digital Wills" and emergency access for heirs.</li>
                            <li><strong>>> Identity_Cloaking</strong><br>OSINT scrub of home address & Passkey migration.</li>
                            <li><strong>>> Threat_Nullification</strong><br>DNS filtering & Private Hotline for latest scam intel.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="skill-module">
                <div class="module-header" onclick="toggleModule(this)">
                    <span class="module-title">SECTOR_LOCKDOWN</span>
                    <span class="module-status">[ ORG_DEFENSE ]</span>
                </div>
                <div class="module-body">
                    <div class="module-content">
                        <span class="target-text">Target: Private Practice & Local Organizations</span>
                        <ul class="tech-list service-list">
                            <li><strong>>> Compliance_Lite</strong><br>HIPAA/Data handling audit to prevent fines & liability.</li>
                            <li><strong>>> Domain_Trust_Guard</strong><br>SPF/DMARC setup to stop spoofing & fix "Spam Folder" issues.</li>
                            <li><strong>>> Infra_Segmentation</strong><br>Air-gap guest traffic & IoT devices to kill lateral attack vectors.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    uplink: `
        <h2 class="highlight">ENCRYPTED TRANSMISSION DETECTED</h2>
        <p style="border-bottom: 1px dashed #333; padding-bottom:10px;">Secure tunnel established. Encryption: AES-256.</p>
        
        <!-- Notice the ID added to the form and NAME attributes added to inputs -->
        <form class="cli-form" id="contact-form">
            <div class="input-group">
                <label>source_ip (Your Email):</label>
                <input type="email" name="email" class="cli-input" required autofocus>
            </div>
            <div class="input-group">
                <label>payload (Message):</label>
                <input type="text" name="message" class="cli-input" required>
            </div>
            <button class="cli-btn" type="submit">[ EXECUTE TRANSMISSION ]</button>
        </form>
        <div id="form-status" style="margin-top:10px; color: var(--terminal-green);"></div>
        <p style="font-size: 0.7rem; margin-top: 20px; color: #555;">Zero-log policy enforced. I respect the sanctity of your data.</p>
    `
};