# NourishConnect

## Project Overview
NourishConnect is a digital platform designed to combat food waste and hunger by connecting food donors with those in need. Every day, tons of food go to waste in restaurants, hotels, and events, while millions of people struggle with hunger. NourishConnect bridges this gap by facilitating seamless food donation and distribution.

### Problem It Solves:
- **Food Waste Reduction:** Ensures surplus food is efficiently redistributed instead of discarded.
- **Hunger Alleviation:** Helps NGOs and individuals access food in real-time.
- **Seamless Connection:** Provides an easy-to-use platform for donors and recipients to interact.

### Key Features & Benefits:
- **Easy Sign-Up** for Individuals, NGOs, and Restaurants
- **Food Donation Tracking** to monitor donated items
- **Real-Time Food Requests** for on-demand access
- **Impact Reports & Statistics** to measure contributions
- **Seamless Food Collection & Distribution** via NGO partnerships

## Dependencies
To run NourishConnect, you need the following software and libraries:

- **Backend:** Node.js (v16.x), Express.js
- **Frontend:** React.js, Tailwind CSS
- **Database:** MongoDB (v5.x)
- **Authentication:** JWT (JSON Web Token)
- **Other Libraries:**
  - axios (v0.27.x)
  - dotenv (v16.x)
  - mongoose (v6.x)
  - nodemon (for development)
  
## Setup Instructions

### Prerequisites:
- Install **Node.js** (v16.x or later) and **MongoDB** (v5.x or later)
- Clone this repository:
  ```bash
  git clone https://github.com/priyanshu1804/CODE_FORGE.git
  ```

### Backend Setup:
1. Navigate to the backend folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure environment variables:
   ```plaintext
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup:
1. Navigate to the frontend folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

### Usage Guide:
- **Donors** can sign up, list available surplus food, and track donations.
- **NGOs/Individuals** can request food in real time and receive donations.
- **Admins** can monitor impact reports and oversee transactions.

## Team Members
- **[Avni Singh]** - Project Lead & Backend Developer
- **[Priyanshu Kumar]** - Frontend Developer & Backend Developer
- **[Radhey Verma]** -Frontend Developer & Backend Developer 
- **[Jiya Singh]** -Frontend Developer & UI/UX Designer
## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## Contribution Guidelines
We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push the branch and submit a Pull Request.

## Future Plans
- Implement AI-driven food demand prediction.
- Introduce a mobile app for seamless access.
- Expand to more regions to enhance food security globally.

Join us in making a difference! 🚀
