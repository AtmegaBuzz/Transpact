<<<<<<< HEAD
![Screenshot from 2023-07-02 19-01-58](https://github.com/HackArchive/Transpact/assets/81790585/0ff44ded-efc4-4457-9a32-55ea6c8f567e)

## 💡 Inspiration
Are you tired of the challenges and risks associated with managing contracts and funding in traditional business setups? Have you experienced corruption or misuse of funds in your previous contract-based ventures? If so, we have a solution for you!
Introducing our innovative business contract management platform that leverages Web3 technology to offer secure contract creation and transparent monitoring of funded money flow. With our platform, you can have peace of mind knowing that your contracts are secure and funds are being utilized as intended.
The core problem we aim to address is the inefficiency and lack of transparency in contract management and fund allocation. In traditional business models, contracts often involve multiple parties and financial transactions, making it challenging to ensure fair and secure execution. Corruption and misuse of funds can occur due to lack of oversight and accountability.

## ⚙ What it does
- Our platform utilizes the power of the Near blockchain to create smart contracts, which serve as tamper-proof and transparent records of contractual agreements. By leveraging the blockchain, we can ensure the integrity and immutability of contracts, reducing the risks associated with fraud and corruption.
- One of the key features of our platform is the implementation of a multisig wallet between the contractor and the lister. This wallet acts as a secure repository for funds allocated to the contract. Both parties have visibility into the flow of funds, and the lister has the authority to accept or decline fund usage if it appears suspicious. This ensures that the lister maintains control over the funded money and can actively monitor its utilization.
- With our platform, contract participants can enjoy increased trust and transparency in their business dealings. Contractors can have confidence that their work will be compensated appropriately, while listers can have peace of mind knowing that funds will be used responsibly. By combining the security and transparency of blockchain technology with contract management, we aim to revolutionize the way business contracts are created and managed.

## 🛠  How we built it
For building Frontend we use React.js and TailwindCSS for animation. For storing data we use NEAR protocol. For writing Smart Contact we use Rust. Here the contractor registry smart contract implements a contract verification system using the NEAR blockchain platform. It allows for verifying contractors by checking their license numbers with a government database. The system maintains a HashMap to store contractor information, including their license numbers and verification status. When verifying a contractor, the system checks if the contractor is already verified and then validates the license number. If the license number is valid, the contractor is marked as verified and added to the HashMap. If the license number is invalid, an error is thrown.

## 💪Challenges we ran into
- It is our first time building a complete Dapp on NEAR Protocol as well as working with Rust and Smart Contract writing at first we are unable to understand the working on the same. But we are able to do it after reading documentation or searching more about it.

- Thinking about the project as per the perspective of startup is initially hard for us, but after talking to real user we will be able to do that.

It was hard to make a fully responsive and beautiful UI of Transpact. But we are able to do it because of teamwork.

## 📌 Accomplishments that we're proud of
- Well, we built a whole social platform that solves a real world problem in 16 hours!! That's the biggest achievement of this hackathon.
- Able to build the platform on Near protocol that really solves the issue.

## 📚 What we learned
- Learned more about NEAR Protocol and writing the revenue model for the platform . Learned a lot more about Rust, Near protocol and team Building.

## 🛠 What's next for Transpact
Adding some amazing features like :- 
- **Platform Licensing:**     Offer different licensing options for businesses and enterprises to use your contract management platform. Charge a licensing fee based on the number of users, contracts, or specific features included in the license.
 - **Enterprise Integration:** Provide integration services with existing enterprise systems such as CRM, ERP, or project management software. Charge a fee for seamless integration and data synchronization between your platform and their systems.
- **Customization and Consulting:** Offer customization services to tailor your platform to the unique requirements of individual businesses. Provide consulting services to help businesses optimize their contract management processes. 
- **Premium Support:**   Offer enhanced support services such as dedicated account managers, priority assistance, and extended support hours. Charge a subscription fee or premium support package for access to these services.
- **White-label Solutions:**  Provide white-label versions of your contract management platform for businesses to rebrand and offer to their own clients. Charge a licensing fee or revenue share based on the usage or number of clients acquired by the white-label users.
- **Data Security and Compliance:** Highlight the robust security measures and compliance features of your platform. Offer additional security and compliance audits, certifications, or services to businesses that require high levels of data protection. Charge a fee for these security and compliance-focused offerings.
=======
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
>>>>>>> 84e24d2 (Updated the landing page)
