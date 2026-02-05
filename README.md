# My Digital Showcase

A premium, interactive personal portfolio website built with modern web technologies. This project showcases professional experience, skills, and projects in a polished, responsive interface designed to provide an "elite scholar" aesthetic.

## 🌟 Key Features

-   **Modern & Responsive Design**: Built with Tailwind CSS and Shadcn UI for a sleek, accessible, and mobile-friendly experience.
-   **Interactive UI**: Smooth animations and transitions powered by Framer Motion.
-   **Dynamic Contact Form**: Integrated with Supabase Edge Functions for secure and reliable email delivery.
-   **Project Showcase**: A dedicated section to display portfolio projects with rich details.
-   **Skills & Experience**: Visual representation of professional skills and career timeline.
-   **Theme Support**: Built-in support for light and dark modes (via `next-themes`).

## 🛠️ Tech Stack

-   **Frontend Framework**: React 18 + Vite
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **UI Components**: Shadcn UI, Radix UI
-   **Animations**: Framer Motion
-   **State Management**: TanStack Query (React Query)
-   **Backend Integration**: Supabase (Client & Edge Functions)
-   **Form Handling**: React Hook Form + Zod
-   **Icons**: Lucide React

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm, yarn, or bun

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/SheikhMohsin9311/my-digital-showcase-237.git
    cd my-digital-showcase-237
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

To make the contact form work, you need to configure Supabase. Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Note**: The contact form expects a Supabase Edge Function named `send-contact-email`. Ensure this is deployed in your Supabase project.

### Development

Start the development server:

```bash
npm run dev
```

Access the application at `http://localhost:8080` (or the port shown in your terminal).

## 📜 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run preview`: Locally preview the production build.
-   `npm run lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Hero, About, Contact, etc.)
├── hooks/          # Custom React hooks (use-toast)
├── integrations/   # Supabase client configuration
├── pages/          # Main application pages (Index, NotFound)
├── lib/            # Utility functions and class mergers
└── App.tsx         # Root component application setup
```

## 📬 Contact

For inquiries or collaboration, please use the contact form on the website or reach out directly:

-   **Email**: [sheikhmohsin9311@gmail.com](mailto:sheikhmohsin9311@gmail.com)
-   **LinkedIn**: [Sheikh Mohsin](https://www.linkedin.com/in/sheikh-mohsin-213653254/)
-   **GitHub**: [SheikhMohsin9311](https://github.com/SheikhMohsin9311)
 