// ===== MATRIX RAIN EFFECT =====
class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrix-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]|\\:;"\',.<>?/~`';
        this.fontSize = 12;
        this.drops = [];
        this.columns = 0;
        
        this.init();
        this.animate();
        this.handleResize();
    }

    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        
        // Initialize drops array
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.floor(Math.random() * -100);
        }
    }

    draw() {
        // Create trailing effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Set matrix green color with slight variations
        this.ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            // Random character
            const char = this.characters[Math.floor(Math.random() * this.characters.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;

            // Add some color variation to make it more interesting
            const brightness = Math.random() * 0.4 + 0.3;
            this.ctx.fillStyle = `rgba(0, 214, 58, ${brightness})`;
            
            // Add subtle glow effect to some characters
            if (Math.random() > 0.98) {
                this.ctx.shadowColor = '#00d63a';
                this.ctx.shadowBlur = 5;
            } else {
                this.ctx.shadowBlur = 0;
            }
            
            this.ctx.fillText(char, x, y);

            // Reset drop to top with some randomness
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }

            this.drops[i]++;
        }
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    handleResize() {
        window.addEventListener('resize', () => {
            this.init();
        });
    }
}

// ===== ENHANCED GLITCH WORD ROTATOR =====
class EnhancedGlitchRotator {
    constructor() {
        this.element = document.getElementById('glitch-word');
        this.words = [
            'CYBERSECURITY',
            'ETHICAL HACKING',
            'PENETRATION TESTING',
            'VULNERABILITY ASSESSMENT',
            'MALWARE ANALYSIS',
            'DIGITAL FORENSICS',
            'CRYPTOGRAPHY',
            'NETWORK SECURITY',
            'WEB EXPLOITATION',
            'BINARY ANALYSIS',
            'REVERSE ENGINEERING',
            'INCIDENT RESPONSE',
            'THREAT HUNTING',
            'SOCIAL ENGINEERING',
            'ZERO-DAY EXPLOITS',
            'BUFFER OVERFLOW',
            'SQL INJECTION',
            'XSS ATTACKS',
            'PRIVILEGE ESCALATION',
            'STEGANOGRAPHY',
            'PACKET SNIFFING',
            'ROOTKIT DETECTION',
            'FUZZING ATTACKS',
            'SIDE CHANNEL ATTACKS',
            'MEMORY CORRUPTION',
            'CODE INJECTION',
            'SESSION HIJACKING',
            'BRUTE FORCE ATTACKS',
            'PHISHING DETECTION',
            'DARK WEB ANALYSIS'
        ];
        
        this.currentIndex = 0;
        this.isReversing = false;
        this.currentText = '';
        this.targetText = '';
        this.glitchIntensity = 0;
        this.changeInterval = 5000; // 5 seconds
        this.glitchDuration = 600; // Duration of glitch effect
        
        this.startRotation();
    }

    generateGlitchText(text, intensity) {
        if (intensity === 0) return text;
        
        let glitched = '';
        const glitchChars = '!@#$%^&*(){}[]|\\:;"\',.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        for (let i = 0; i < text.length; i++) {
            if (Math.random() < intensity) {
                if (Math.random() > 0.5) {
                    glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                } else {
                    glitched += text[i].toUpperCase() === text[i] ? text[i].toLowerCase() : text[i].toUpperCase();
                }
            } else {
                glitched += text[i];
            }
        }
        
        return glitched;
    }

    async changeWord() {
        this.targetText = this.words[this.currentIndex];
        
        // Phase 1: Subtle glitch effect
        this.glitchIntensity = 0.4;
        for (let i = 0; i < 8; i++) {
            this.element.textContent = this.generateGlitchText(this.currentText, this.glitchIntensity);
            this.element.style.color = Math.random() > 0.7 ? '#00b331' : '#00d63a';
            await this.sleep(50);
        }
        
        // Phase 2: Transition effect (vice versa)
        if (this.isReversing) {
            // Reverse: Delete characters from end to start
            for (let i = this.currentText.length; i >= 0; i--) {
                this.currentText = this.targetText.substring(0, i);
                this.element.textContent = this.generateGlitchText(this.currentText, 0.15);
                await this.sleep(60);
            }
            // Then build the new word from start to end
            for (let i = 0; i <= this.targetText.length; i++) {
                this.currentText = this.targetText.substring(0, i);
                this.element.textContent = this.generateGlitchText(this.currentText, 0.1);
                await this.sleep(70);
            }
        } else {
            // Forward: Delete characters from start to end
            for (let i = 0; i <= this.currentText.length; i++) {
                this.currentText = this.currentText.substring(i);
                this.element.textContent = this.generateGlitchText(this.currentText, 0.15);
                await this.sleep(50);
            }
            // Then build the new word character by character
            this.currentText = '';
            for (let i = 0; i <= this.targetText.length; i++) {
                this.currentText = this.targetText.substring(0, i);
                this.element.textContent = this.generateGlitchText(this.currentText, 0.1);
                await this.sleep(70);
            }
        }
        
        // Phase 3: Final gentle effect
        for (let i = 0; i < 4; i++) {
            this.element.textContent = this.generateGlitchText(this.targetText, 0.2);
            this.element.style.color = '#00d63a';
            await this.sleep(80);
        }
        
        // Reset to normal
        this.element.textContent = this.targetText;
        this.element.style.color = '#00d63a';
        this.currentText = this.targetText;
        this.glitchIntensity = 0;
        
        // Move to next word and toggle direction
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        this.isReversing = !this.isReversing;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    startRotation() {
        this.currentText = this.words[0];
        this.element.textContent = this.currentText;
        
        // Start the rotation cycle
        setInterval(() => {
            this.changeWord();
        }, this.changeInterval);
    }
}

// ===== PARTICLE SYSTEM =====
class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles');
        this.particles = [];
        this.maxParticles = 25;
        
        this.init();
        this.animate();
    }

    init() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: #00d63a;
            border-radius: 50%;
            opacity: ${Math.random() * 0.3 + 0.1};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particle-float ${Math.random() * 25 + 15}s linear infinite;
            box-shadow: 0 0 ${Math.random() * 6 + 2}px #00d63a;
        `;
        
        this.container.appendChild(particle);
        this.particles.push(particle);
        
        // Remove and recreate after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                this.particles = this.particles.filter(p => p !== particle);
                this.createParticle();
            }
        }, (Math.random() * 20 + 10) * 1000);
    }

    animate() {
        // Add subtle random movement to some particles
        this.particles.forEach(particle => {
            if (Math.random() > 0.995) {
                const x = Math.random() * 2 - 1;
                const y = Math.random() * 2 - 1;
                particle.style.transform = `translate(${x}px, ${y}px)`;
                
                setTimeout(() => {
                    particle.style.transform = 'translate(0, 0)';
                }, 300);
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ===== ENHANCED GLITCH EFFECTS =====
class EnhancedGlitchEffects {
    constructor() {
        this.glitchElements = document.querySelectorAll('.glitch-text');
        this.bindEvents();
        this.randomGlitches();
    }

    bindEvents() {
        this.glitchElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.intensifyGlitch(element);
            });
            
            element.addEventListener('mouseleave', () => {
                this.normalizeGlitch(element);
            });
        });
    }

    intensifyGlitch(element) {
        element.style.animation = 'subtle-glow 0.5s infinite';
        
        // Add subtle color changes
        const colors = ['#00d63a', '#00b331', '#00ff41'];
        let colorChangeCount = 0;
        const colorInterval = setInterval(() => {
            element.style.color = colors[Math.floor(Math.random() * colors.length)];
            colorChangeCount++;
            
            if (colorChangeCount > 5) {
                element.style.color = '#00d63a';
                clearInterval(colorInterval);
            }
        }, 100);
    }

    normalizeGlitch(element) {
        element.style.animation = 'subtle-glow 4s infinite';
        element.style.color = '#00d63a';
    }

    randomGlitches() {
        setInterval(() => {
            if (Math.random() > 0.85) {
                const randomElement = this.glitchElements[Math.floor(Math.random() * this.glitchElements.length)];
                this.intensifyGlitch(randomElement);
                
                setTimeout(() => {
                    this.normalizeGlitch(randomElement);
                }, 500);
            }
        }, 5000);
    }
}

// ===== COUNTER ANIMATION =====
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number');
        this.animateCounters();
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment + Math.random() * 5;
                current = Math.min(current, target);
                element.textContent = Math.floor(current);
                
                // Add subtle color change occasionally
                if (Math.random() > 0.98) {
                    element.style.color = '#00b331';
                    setTimeout(() => {
                        element.style.color = '#00d63a';
                    }, 100);
                }
                
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }

    animateCounters() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }
}

// ===== MOBILE NAVIGATION =====
class MobileNavigation {
    constructor() {
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.bindEvents();
    }

    bindEvents() {
        this.navToggle.addEventListener('click', () => {
            this.toggleMenu();
        });

        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.cyber-nav')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.navToggle.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMenu() {
        this.navToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// ===== TERMINAL TYPING EFFECT =====
class TerminalTyping {
    constructor() {
        this.terminalLines = document.querySelectorAll('.terminal-line');
        this.typeDelay = 1000;
        this.charDelay = 50;
        
        this.startTyping();
    }

    typeText(element, text, callback) {
        let i = 0;
        element.textContent = '';
        
        const typing = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                
                // Add subtle glitch characters occasionally
                if (Math.random() > 0.98) {
                    const glitchChar = '_-'[Math.floor(Math.random() * 2)];
                    element.textContent = element.textContent.slice(0, -1) + glitchChar;
                    setTimeout(() => {
                        element.textContent = element.textContent.slice(0, -1) + text.charAt(i);
                    }, 80);
                }
                
                i++;
                setTimeout(typing, this.charDelay + Math.random() * 30);
            } else if (callback) {
                callback();
            }
        };
        
        typing();
    }

    startTyping() {
        let currentLine = 0;
        
        const typeNextLine = () => {
            if (currentLine < this.terminalLines.length) {
                const line = this.terminalLines[currentLine];
                const command = line.querySelector('.command');
                const output = line.querySelector('.output');
                
                line.style.opacity = '1';
                
                if (command && !command.classList.contains('typing-text')) {
                    const originalText = command.textContent;
                    this.typeText(command, originalText, () => {
                        if (output) {
                            setTimeout(() => {
                                output.style.opacity = '1';
                                const outputText = output.innerHTML;
                                output.innerHTML = '';
                                this.typeHTML(output, outputText);
                            }, 300);
                        }
                    });
                }
                
                currentLine++;
                setTimeout(typeNextLine, this.typeDelay);
            }
        };
        
        // Hide all lines initially except those with typing-text class
        this.terminalLines.forEach(line => {
            const command = line.querySelector('.command');
            if (!command || !command.classList.contains('typing-text')) {
                line.style.opacity = '0';
            }
            const output = line.querySelector('.output');
            if (output) output.style.opacity = '0';
        });
        
        setTimeout(typeNextLine, 1000);
    }

    typeHTML(element, html) {
        // Simple HTML typing - just set innerHTML after a delay
        setTimeout(() => {
            element.innerHTML = html;
        }, 500);
    }
}

// ===== LOADING SCREEN =====
class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.progressFill = document.querySelector('.progress-fill');
        this.loadingPercent = document.querySelector('.loading-percent');
        this.loadingStatus = document.querySelector('.loading-status');
        
        this.messages = [
            'Initializing neural pathways...',
            'Breaching firewall protocols...',
            'Decrypting quantum algorithms...',
            'Loading hacker arsenal...',
            'Establishing secure connection...',
            'Accessing dark web databases...',
            'Compiling exploit frameworks...',
            'Synchronizing with matrix...',
            'Ready for infiltration...'
        ];
        
        this.startLoading();
    }

    updateProgress(percent, message) {
        this.progressFill.style.width = percent + '%';
        this.loadingPercent.textContent = Math.floor(percent) + '%';
        this.loadingStatus.textContent = message;
    }

    startLoading() {
        let progress = 0;
        let messageIndex = 0;
        
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 3 + 1;
            progress = Math.min(progress, 100);
            
            // Change message occasionally
            if (Math.floor(progress) % 15 === 0 && messageIndex < this.messages.length - 1) {
                messageIndex++;
            }
            
            this.updateProgress(progress, this.messages[messageIndex]);
            
            // Add glitch effect to loading bar occasionally
            if (Math.random() > 0.9) {
                this.progressFill.style.background = 'linear-gradient(90deg, #ff0044, #00ff41)';
                setTimeout(() => {
                    this.progressFill.style.background = 'linear-gradient(90deg, #00ff41, #44ff77)';
                }, 100);
            }
            
            if (progress >= 100) {
                clearInterval(loadingInterval);
                this.updateProgress(100, this.messages[this.messages.length - 1]);
                
                setTimeout(() => {
                    this.hideLoadingScreen();
                }, 800);
            }
        }, 80);
    }

    hideLoadingScreen() {
        this.loadingScreen.style.opacity = '0';
        this.loadingScreen.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            this.loadingScreen.remove();
        }, 500);
    }
}

// ===== SMOOTH SCROLLING =====
class SmoothScrolling {
    constructor() {
        this.navLinks = document.querySelectorAll('a[href^="#"]');
        this.bindEvents();
    }

    bindEvents() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ===== KEYBOARD EASTER EGGS =====
class EasterEggs {
    constructor() {
        this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
        this.userInput = [];
        this.bindEvents();
        this.addConsoleArt();
    }

    bindEvents() {
        document.addEventListener('keydown', (e) => {
            this.userInput.push(e.keyCode);
            
            if (this.userInput.length > this.konamiCode.length) {
                this.userInput.shift();
            }
            
            if (this.arraysEqual(this.userInput, this.konamiCode)) {
                this.activateMatrixMode();
            }

            // ESC key to reset any active effects
            if (e.keyCode === 27) {
                this.resetEffects();
            }
        });
    }

    arraysEqual(a, b) {
        return a.length === b.length && a.every((val, i) => val === b[i]);
    }

    activateMatrixMode() {
        console.log('%c🎉 KONAMI CODE ACTIVATED! MATRIX MODE ENABLED! 🎉', 
            'color: #00ff41; font-size: 20px; font-weight: bold; background: #000; padding: 10px;');
        
        // Invert colors
        document.body.style.filter = 'hue-rotate(180deg) contrast(1.2)';
        
        // Create matrix particles explosion
        this.createMatrixExplosion();
        
        // Play sound effect if available
        this.playMatrixSound();
    }

    createMatrixExplosion() {
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #00ff41;
                border-radius: 50%;
                left: 50%;
                top: 50%;
                z-index: 10000;
                pointer-events: none;
                animation: matrix-explosion ${Math.random() * 3 + 1}s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 4000);
        }
    }

    playMatrixSound() {
        // Create a simple beep sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }

    resetEffects() {
        document.body.style.filter = '';
    }

    addConsoleArt() {
        console.log(`%c
        ╔══════════════════════════════════════════╗
        ║          🚀 CYBERMATRIX CTF 🚀          ║
        ║                                          ║
        ║  Welcome to the digital underground!     ║
        ║  Try the Konami Code for a surprise...   ║
        ║                                          ║
        ║  Commands:                               ║
        ║  • login('password') - Access system     ║
        ║  • matrix() - Enable matrix mode         ║
        ║  • hack() - Initiate hacking sequence    ║
        ║                                          ║
        ╚══════════════════════════════════════════╝
        `, 'color: #00ff41; font-family: monospace;');
    }
}

// ===== CONSOLE COMMANDS =====
window.matrix = () => {
    document.body.style.filter = 'hue-rotate(120deg) saturate(1.5)';
    console.log('%c🌈 Matrix mode activated!', 'color: #00ff41; font-size: 16px;');
};

window.hack = () => {
    let progress = 0;
    const hackInterval = setInterval(() => {
        progress += Math.random() * 10 + 5;
        progress = Math.min(progress, 100);
        console.log(`%c[${Math.floor(progress)}%] Hacking in progress... ${'█'.repeat(Math.floor(progress/5))}${'░'.repeat(20-Math.floor(progress/5))}`, 'color: #00ff41; font-family: monospace;');
        
        if (progress >= 100) {
            console.log('%c🎯 HACK SUCCESSFUL! Access granted to mainframe.', 'color: #00ff41; font-size: 18px; font-weight: bold;');
            clearInterval(hackInterval);
        }
    }, 200);
};

window.login = (password) => {
    if (password === 'matrix1337' || password === 'cyber2024') {
        console.log('%c🔓 LOGIN SUCCESSFUL! Welcome to the system, Agent.', 'color: #00ff41; font-size: 16px; font-weight: bold;');
        console.log('%c🎯 CTF Flag: CTF{gl1tch_m4tr1x_h4ck3r_3l1t3}', 'color: #ffff00; font-size: 14px; background: #000; padding: 5px;');
    } else {
        console.log('%c❌ ACCESS DENIED! Invalid credentials.', 'color: #ff0044; font-size: 14px;');
    }
};

// ===== ADD PARTICLE ANIMATION CSS =====
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes particle-float {
        0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes matrix-explosion {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 800 - 400}px, ${Math.random() * 800 - 400}px) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);

// ===== INITIALIZE ALL SYSTEMS =====
document.addEventListener('DOMContentLoaded', () => {
    // Show loading screen
    new LoadingScreen();
    
    // Initialize all systems after loading
    setTimeout(() => {
        new MatrixRain();
        new EnhancedGlitchRotator();
        new ParticleSystem();
        new EnhancedGlitchEffects();
        new CounterAnimation();
        new MobileNavigation();
        new TerminalTyping();
        new SmoothScrolling();
        new EasterEggs();
        
        console.log('%c⚡ All systems initialized. Welcome to the Matrix. ⚡', 'color: #00ff41; font-size: 16px; font-weight: bold;');
    }, 2000);
});

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle scroll events for performance
let ticking = false;
document.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            // Add any scroll-based animations here
            ticking = false;
        });
        ticking = true;
    }
});