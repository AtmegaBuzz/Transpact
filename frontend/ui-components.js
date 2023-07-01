import React from "react";
import { Link } from "react-router-dom";

export function SignInPrompt({ greeting, onClick }) {
  return (
    <main>
      <h1>
        The contract says: <span className="greeting">{greeting}</span>
      </h1>
      <h3>Welcome to NEAR!</h3>
      <p>
        Your contract is storing a greeting message in the NEAR blockchain. To
        change it you need to sign in using the NEAR Wallet. It is very simple,
        just use the button below.
      </p>
      <p>
        Do not worry, this app runs in the test network ("testnet"). It works
        just like the main network ("mainnet"), but using NEAR Tokens that are
        only for testing!
      </p>
      <br />
      <p style={{ textAlign: "center" }}>
        <button onClick={onClick}>Sign in with NEAR Wallet</button>
      </p>
    </main>
  );
}

export function SignOutButton({ accountId, onClick }) {
  return (
    <button style={{ float: "right" }} onClick={onClick}>
      Sign out {accountId}
    </button>
  );
}

export function EducationalText() {
  return (
    <>
      <p>
        Look at that! A Hello World app! This greeting is stored on the NEAR
        blockchain. Check it out:
      </p>
      <ol>
        <li>
          Look in <code>frontend/App.js</code> - you'll see{" "}
          <code>getGreeting</code> and <code>setGreeting</code> being called on{" "}
          <code>contract</code>. What's this?
        </li>
        <li>
          Ultimately, this <code>contract</code> code is defined in{" "}
          <code>./contract</code> – this is the source code for your{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            to="https://docs.near.org/docs/develop/contracts/overview"
          >
            smart contract
          </Link>
          .
        </li>
        <li>
          When you run <code>npm run deploy</code>, the code in{" "}
          <code>./contract</code> gets deployed to the NEAR testnet. You can see
          how this happens by looking in <code>package.json</code>.
        </li>
      </ol>
      <hr />
      <p>
        To keep learning, check out{" "}
        <Link target="_blank" rel="noreferrer" href="https://docs.near.org">
          the NEAR docs
        </Link>{" "}
        or look through some{" "}
        <Link target="_blank" rel="noreferrer" href="https://examples.near.org">
          example apps
        </Link>
        .
      </p>
    </>
  );
}

// function changeGreeting(e) {
//   e.preventDefault();
//   setUiPleaseWait(true);
//   const { greetingInput } = e.target.elements;

//   // use the wallet to send the greeting to the contract
//   wallet
//     .callMethod({
//       method: "set_greeting",
//       args: { message: greetingInput.value },
//       contractId,
//     })
//     .then(async () => {
//       return getGreeting();
//     })
//     .then(setValueFromBlockchain)
//     .finally(() => {
//       setUiPleaseWait(false);
//     });
// }

// function getGreeting() {
//   // use the wallet to query the contract's greeting
//   return wallet.viewMethod({ method: "get_greeting", contractId });
// }
