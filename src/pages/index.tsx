import type { NextPage } from "next";
import Homepage from "../screens/Home";

const Home: NextPage = () => {
  return <Homepage />;
  // <div></div>;
};

export default Home;

// The below is to be pasted in an auth.tsx file localted in the same folder as this file

// import React from "react";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebase from "../../firebase/clientApp";

// // Configure FirebaseUI.
// const uiConfig = {
//   // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: "/",
//   // We will display GitHub as auth providers.
//   signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
// };

// function SignInScreen() {
//   return (
//     <div
//       style={{
//         maxWidth: "320px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <h1>Welcome to Amazon</h1>
//       <p>Please sign-in:</p>
//       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//     </div>
//   );
// }

// export default SignInScreen;
