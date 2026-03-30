# 🤖 Discord Auto-Drop Selfbot (Private Channel)

> **⚠️ Disclaimer:** This tool is created for educational purposes and for automated dropping in private channels. Using self‑bots is against Discord's Terms of Service. Your account may get **caught, reported, or blacklisted** by the bot developers. Use it at your own risk.

---

## 🛠️ Prerequisites & Installation

Make sure you have [Node.js](https://nodejs.org/) installed (v16 or newer). Then run these commands in your project folder:

### 1. Discord Selfbot Package
Powered by the **discord.js-selfbot-v13** library.

```bash
npm install discord.js-selfbot-v13

2. Chalk (for colorful console output)
npm install chalk@4.1.2

⚙️ Configuration
Create two text files in the same directory as your main script (index.js):

File	Purpose	Example Content
token.txt	Your Discord account token (one token, no quotes)	NDMyMT...
channel.txt	The ID of the target channel where the bot should auto‑drop	123456789012345678
Never share your token with anyone! It gives full access to your account.


🚀 How to Run
After installing packages and setting up the files, start the bot with:

bash
node index.js
(The main entry point is index.js – rename it if your file has a different name.)

📝 Technical Notes
Optimization: This code can handle 3–5 bots simultaneously (if you use multiple tokens).

Performance: Because it may run multiple self‑bot instances, it can consume high CPU and RAM.

Customization: You can extend the logic inside messageCreate to work with different bot IDs, button interactions, or custom commands.

👨‍💻 Credits
Made with ❤️ by [EPIC G]
Thanks for using this project! If you find it useful, feel free to star the repository.

👨‍💻 Credits
Made with ❤️ by [EPIC G]
Thanks for using this project! If you find it useful, feel free to star the repository.


---

**How to apply:**

1. Save the above content in a file named `README.md` in your project root.
2. If you have already a `README.md`, replace it with this.
3. Stage and push to GitHub:

```bash
git add README.md
git commit -m "Add clean README"
git push origin main   # or 'master'