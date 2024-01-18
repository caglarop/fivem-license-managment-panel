## Table of Contents

- [FiveM License Management Panel - Next.js/React](#fivem-license-management-panel---nextjsreact)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Starting](#starting)
- [Setting Up Super Admin](#setting-up-super-admin)
- [License](#license)
- [Contribution](#contribution)

<h1 id="fivem-license-management-panel---nextjsreact">🎮 FiveM License Management Panel - Next.js/React</h1>

This robust panel simplifies the management of script licenses for FiveM script vendors, enabling customers to tailor their licenses and configure IP addresses for FiveM servers.

<h2 id="features">🌟 Features</h2>

- **🔐 Discord Login**: Streamlined authentication through Discord.
- **🔧 API Endpoints**: Comprehensive API endpoints for various functionalities.
- **🔄 License Update**: Enable customers to update their IP addresses with 24h lock.
- **🔒 Secure and Structured**: Built with Typescript for robustness and clarity.

<h2 id="api-endpoints">📡 API Endpoints</h2>

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/license/[id] | Retrieve license details and settings for a specific ID. |
| GET | /api/license/list | List all available licenses. |
| POST | /api/license/update/ip/[id] | Update the IP address associated with a license. |
| GET | /api/session | Check the authenticity of a user session. |
| GET | /api/user/[id] | Retrieve user information, including ID, email, super admin status, name, and image. |
| GET | /api/license-check/[productName]/[licenseKey] | Verify the validity of a license key for a specific product. |

<h2 id="getting-started">Getting Started 🚀</h2>

Before you begin, ensure that you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
* You have installed [Git](https://git-scm.com/downloads) on your machine.

<h3 id="installation">Installation 🛠️</h3>

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

<h3 id="configuration">Configuration ⚙️</h3>

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

<h3 id="starting">Starting 🎬</h3>

To start the panel, run the following command:
```bash
npm run dev
```
or if you prefer using Yarn:
```bash
yarn dev
```
Then, access the panel at [http://localhost:3000](http://localhost:3000).

<h2 id="setting-up-super-admin">Setting Up Super Admin 🛡️</h2>

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

<h2 id="api-usage-examples">API Usage Examples</h2>

<h3 id="lua-usage">Lua Usage (FiveM)</h3>

To verify the validity of a license key in a FiveM script, here's an example using a callback function:

```lua
function checkLicense(licenseKey, callback)
    local productName = GetCurrentResourceName()
    local url = "http://yourdomain.com/api/license-check/" .. productName .. "/" .. licenseKey

    PerformHttpRequest(url, function(statusCode, responseText, headers)
        if statusCode == 200 then
            local responseData = json.decode(responseText)
            if responseData and responseData.allowed then
                if responseData.allowed == true then
                    callback(true)
                else
                    callback(false)
                end
            else
                callback(false)
            end
        else
            callback(false)
        end
    end, 'GET', '')
end

-- Check license
checkLicense(function(isAllowed)
    if isAllowed then
        print("License is valid!")
    else
        print("License is not valid!")
        StopResource(GetCurrentResourceName())
    end
end)
```

Ensure you replace `"your_license_key_here"` with actual values relevant to your use case.

<h3 id="javascript-usage">JavaScript Usage</h3>

For general web applications or server-side scripts, here's how you can use the API in JavaScript:

```javascript
function checkLicense(licenseKey, callback) {
    const productName = GetCurrentResourceName();
    const url = `http://yourdomain.com/api/license-check/${productName}/${licenseKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.allowed) {
                callback(true);
            } else {
                callback(false);
            }
        })
        .catch(error => {
            console.error("Error during API call:", error);
            callback(false);
        });
}

// Example usage
checkLicense("your_license_key_here", function(isAllowed) {
    if (isAllowed) {
        console.log("License is valid!");
        // Continue your script logic here
    } else {
        console.log("License is not valid.");
        StopResource(GetCurrentResourceName());
    }
});
```

Ensure you replace `"your_license_key_here"` with actual values relevant to your use case.

<h2 id="license">License 📜</h2>

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

<h2 id="contribution">Contribution 🤝</h2>
Contributions are welcome! If you have a feature request, bug report, or proposal for code improvement, please feel free to open an issue or submit a pull request.
