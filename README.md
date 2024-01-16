# 🎮 FiveM License Management Panel - Next.js/React

This robust panel simplifies the management of script licenses for FiveM script vendors, enabling customers to tailor their licenses and configure IP addresses for FiveM servers.

## 🌟 Features

- **🔐 Discord Login**: Streamlined authentication through Discord.
- **🔧 API Endpoints**: Comprehensive API endpoints for various functionalities.
- **🔄 License Update**: Enable customers to update their IP addresses with 24h lock.
- **🔒 Secure and Structured**: Built with Typescript for robustness and clarity.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/license/[id] | Retrieve license details and settings for a specific ID. |
| GET | /api/license/list | List all available licenses. |
| POST | /api/license/update/ip/[id] | Update the IP address associated with a license. |
| GET | /api/session | Check the authenticity of a user session. |
| GET | /api/user/[id] | Retrieve user information, including ID, email, super admin status, name, and image. |
| GET | /api/license-check/[productName]/[licenseKey] | Verify the validity of a license key for a specific product. |

## 🚀 Getting Started

Before you begin, ensure that you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
* You have installed [Git](https://git-scm.com/downloads) on your machine.

### 🛠️ Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/caglarop/fivem-license-managment-panel.git
   ```
2. Navigate to the directory:
   ```bash
   cd fivem-license-managment-panel
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or if you prefer using Yarn:
   ```bash
   yarn install
   ```

### ⚙️ Configuration

1. Copy the `.env.example` file and rename it to `.env`. Fill it with the necessary environment variables as per the provided settings.
2. Run the following commands to migrate the database:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```
   or if you prefer using Yarn:
   ```bash
   yarn prisma generate
   yarn prisma migrate dev
   ```

### 🎬 Starting

To start the panel, run the following command:
```bash
npm run dev
```
or if you prefer using Yarn:
```bash
yarn dev
```
Then, access the panel at [http://localhost:3000](http://localhost:3000).

## 🛡️ Setting Up Super Admin

To set yourself as a Super Admin, you can use Prisma Studio. Here are the steps:

1. Start Prisma Studio:
   ```bash
   npx prisma studio
   ```
   or if you prefer using Yarn:
   ```bash
   yarn prisma studio
   ```

2. Prisma Studio will open in your default web browser. Navigate to the `User` model.

3. Find your user entry in the list and click on it to edit.

4. Set the `isSuperAdmin` field to `true`.

5. Click `Save` to apply the changes.

Now, you have Super Admin privileges in the application.

Please note: Be careful when assigning Super Admin privileges, as users with this role have extensive control over the application.

## 📜 License

This project is licensed under the MIT License. Refer to the "LICENSE" file for more information.

## 🤝 Contribution
For contribution and support, feel free to create issues or pull requests on GitHub.
