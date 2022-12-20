// import React, { useState } from "react"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom"
// import "./Login.css"

// export const Login = () => {
//     const [email, set] = useState("")
//     const navigate = useNavigate()

//         return fetch(`http://localhost:8088/users?email=${email}`)
//             .then(res => res.json())
//             .then(foundUsers => {
//                 if (foundUsers.length === 1) {
//                     const user = foundUsers[0]
//                     localStorage.setItem("project_user", JSON.stringify({
//                         id: user.id,
//                         staff: user.isStaff
//                     }));

//                     navigate("/");
//                 }
//                 else {
//                     window.alert("Invalid login");
//                 }
//             });
//     };

//     return (<>
//         <main className="container--login">
//             <section >
//                 <form className="form--login" onSubmit={handleLogin}>
//                     <h1>Magic Cakes</h1>
//                     <h2>Please sign in</h2>
//                     <fieldset>
//                         <label htmlFor="inputEmail"> Email address </label>
//                         <input type="email"
//                             value={email}
//                             onChange={evt => set(evt.target.value)}
//                             className="form-control"
//                             placeholder="Email address"
//                             required autoFocus />
//                     </fieldset>
//                     <fieldset>
//                         <button type="submit">
//                             Sign in
//                         </button>
//                     </fieldset>
//                 </form>
//             </section>
//             <section className="link--register">
//                 <Link to="/register">Not a member yet?</Link>
//             </section>
//         </main>

//     </>)
//     }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [email, set] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(`http://localhost:8088/users?email=${email}`)
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "project_user",
            JSON.stringify({
              id: user.id,
              isStaff: user.isStaff,
            })
          );

          navigate("/");
        } else {
          window.alert("Invalid login");
        }
      });
  };

  return (
    <div className="background-Image">
    <main className="container--login">
      <div className="projectName">
        <h1>Magic Cakes</h1>
      </div>
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input
              type="email"
              value={email}
              onChange={(evt) => set(evt.target.value)}
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset className="sign-in">
            <button type="submit">Sign in</button>
          </fieldset>
          <section className="link--register">
            <Link to="/register">Not a member yet?</Link>
          </section>
        </form>
      </section>
    </main>
    </div>
  );
};