# License Management Panel - Next.js/React

This panel facilitates the straightforward management of script licenses for script vendors. Customers can customize their licenses and set IP addresses for FiveM servers.

## Before You Begin

Ensure that you have Node.js and npm installed on your system.

### Installation

1. Download the License Management Panel.
2. Navigate to the directory and run `npm install`.

### Configuration

1. Create a `.env.local` file and fill it with the following:

```plaintext
DATABASE_URL=postgresql://postgres:pass@host:5432/postgres

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=change_me_to_a_random_string

DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""
```

### Migrate the Database

1. Run `prisma generate` and `prisma migrate dev` to migrate the database.

### Starting

Run `npm run dev` to start the panel. You can access it at http://localhost:3000.
