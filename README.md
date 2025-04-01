# GitHub User Activity CLI

**[roadmap.sh](https://roadmap.sh/)** backend project - https://roadmap.sh/projects/github-user-activity

A simple command-line interface (CLI) to fetch and display recent public activity of any GitHub user.

## ✅ Features

- Fetches recent activity using the GitHub public Events API
- Supports events like:
  - Pushes
  - Issues
  - Pull Requests
  - Stars
- Displays actions in a readable format in the terminal
- Handles invalid usernames or empty responses gracefully
- Built with TypeScript using only Node.js native modules

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-user-activity-cli.git
cd github-user-activity-cli
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the project

```bash
npx tsc
```

### 4. Link the CLI locally

```bash
npm link
```

This will allow you to use `github-activity` as a system-wide command.

---

## 📘 Usage

```bash
github-activity <github-username>
```

### Example:

```bash
github-activity torvalds
```

### Sample Output:

```text
- Pushed 20 commits in torvalds/linux
- Starred someone/repo
- Opened a pull request in someone/repo
```

---

## 🛠 Tech Stack

- TypeScript
- Node.js (native `https` module)

---

## ⚠ Notes

- The CLI only shows **public activity** (GitHub does not expose private events).
- Commits or events in private repos will **not appear**.

---

## 📄 License

This project is for educational purposes only. Free to use and modify.
