import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from "../Firebase/firebase"

function Auth() {
    const auth = getAuth(app)

    const signupUser = () => {
        createUserWithEmailAndPassword(auth, "khan@gmail.com", "khan1234")
        .then((value) => console.log(value))
    }
  return (
    <div>
      <button onClick={signupUser} className="bg-orange-500 p-2 cursor-pointer">Create User</button>
    </div>
  )
}

export default Auth
 