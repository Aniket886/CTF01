# Mini CTF Challenge - Educational Cybersecurity Game

## Overview
This is a beginner-friendly Capture The Flag (CTF) challenge designed to teach basic cybersecurity concepts through hands-on practice. Players will hunt for 5 hidden flags across different challenge types.

## Challenge Types
1. **HTML Comments** - Hidden information in page source
2. **Robots.txt** - Web reconnaissance and directory discovery
3. **Base64 Encoding** - Understanding encoding vs encryption
4. **Caesar Cipher** - Classical cryptography
5. **Trivia** - Cybersecurity knowledge test

## How to Run

### Option 1: Python HTTP Server (Recommended)
```bash
cd mini-ctf
python -m http.server 8000
```
Then visit: http://localhost:8000

### Option 2: Node.js HTTP Server
```bash
cd mini-ctf
npx http-server -p 8000
```

### Option 3: Live Server (VS Code)
If you have VS Code with Live Server extension:
- Right-click on `index.html`
- Select "Open with Live Server"

## Files Structure
```
mini-ctf/
├── index.html                    # Starting page (Challenge 1)
├── robots.txt                    # Challenge 2
├── secret_base64_challenge.html  # Challenge 3 (hidden page)
├── caesar_challenge.html         # Challenge 4
├── trivia_challenge.html         # Challenge 5
├── congratulations.html          # Final completion page
├── styles.css                    # Styling for all pages
└── README.md                     # This file
```

## Flags to Find
Players need to find 5 flags in the format: `FLAG{some_text_here}`

### Challenge Walkthrough (SPOILERS!)
<details>
<summary>Click to reveal hints</summary>

1. **HTML Comment Flag**: View page source of index.html
2. **Robots.txt Flag**: Check /robots.txt file
3. **Base64 Flag**: Decode the message on the secret page
4. **Caesar Flag**: Use ROT13 to decode the message
5. **Trivia Flag**: Answer all questions correctly

</details>

<details>
<summary>Click to reveal all flags (MAJOR SPOILERS!)</summary>

1. FLAG{html_c0mments_r3v3al_s3cr3ts}
2. FLAG{r0b0ts_txt_h1d3s_s3cr3ts}
3. FLAG{base64_is_n0t_encrypti0n}
4. FLAG{caesar_cipher_is_2000_years_old}
5. FLAG{m4st3r_0f_cyb3rs3cur1ty_tr1v1a}

</details>

## Educational Objectives
- **Web Basics**: Understanding HTML, viewing source code
- **Web Reconnaissance**: Learning about robots.txt and hidden directories
- **Encoding vs Encryption**: Understanding the difference through Base64
- **Classical Cryptography**: Introduction to substitution ciphers
- **Security Knowledge**: Basic cybersecurity concepts and terminology

## Customization
You can easily customize this CTF by:
- Changing the flag values in each file
- Adding more challenges
- Modifying the difficulty of existing challenges
- Updating the trivia questions
- Changing the styling in `styles.css`

## Target Audience
- Beginners in cybersecurity
- Students learning about web security
- Programming clubs and workshops
- CTF training sessions

## Features
- Interactive tools for Base64 and Caesar cipher
- Progressive difficulty
- Hints and educational content
- Mobile-responsive design
- Celebration animation on completion

## Learning Resources
After completing this CTF, participants can continue learning at:
- [PicoCTF](https://picoctf.org/)
- [OverTheWire](https://overthewire.org/wargames/)
- [TryHackMe](https://tryhackme.com/)
- [HackTheBox](https://www.hackthebox.eu/)

## License
This educational CTF is free to use and modify for learning purposes.

## Safety Note
This CTF is designed for educational purposes only. Always practice ethical hacking and never attempt to hack systems without explicit permission.

---
**Created for educational purposes - Happy hacking! 🎯**