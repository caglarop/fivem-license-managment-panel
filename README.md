# License Management Panel - Next.js/React

This robust panel simplifies the management of script licenses for script vendors, enabling customers to tailor their licenses and configure IP addresses for FiveM servers.

## Features

- **Discord Login**: Streamlined authentication through Discord.
- **API Endpoints**: Comprehensive API endpoints for various functionalities.
- **License Update**: Enable customers to update their IP addresses.
- **Secure and Structured**: Built with Typescript for robustness and clarity.

## API Endpoints

Explore the various API endpoints that drive the License Management Panel and integrate seamlessly with your scripts:

- **GET /api/license/[id]**: Retrieve license details and settings for a specific ID.
- **GET /api/license/list**: List all available licenses.
- **POST /api/license/update/ip/[id]**: Update the IP address associated with a license.
- **GET /api/license-check/[productName]/[licenseKey]**: Verify the validity of a license key for a specific product.
- **GET /api/session**: Check the authenticity of a user session.
- **GET /api/user/[id]**: Retrieve user information, including ID, email, super admin status, name, and image.

## Getting Started

Before you begin, ensure that you have Node.js and npm installed on your system.

### Installation

1. Download the License Management Panel.
2. Navigate to the directory and run `npm install`.

### Configuration

1. Create a `.env.local` file and fill it with the provided settings.
2. Run `prisma generate` and `prisma migrate dev` to migrate the database.

### Starting

Run `npm run dev` to start the panel. Access it at http://localhost:3000.

## License

This project is licensed under the MIT License. Refer to the "LICENSE" file for more information.

For contribution and support, feel free to create issues or pull requests on GitHub. We're excited to support you on your journey to efficient script development and management!
