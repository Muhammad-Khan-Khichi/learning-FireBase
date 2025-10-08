import { getDatabase, ref, set } from 'firebase/database';
import { app } from './Firebase/firebase'
import './App.css'

function App() {
  const db = getDatabase(app);
  const putData = async () => {
  try {
    await set(ref(db, "users/"), {
      id: 1,
      name: "Muhammad Khan",
      age: 19
    });
    console.log("Data written successfully");
  } catch (error) {
    console.error("Error writing to database:", error);
  }
};

  return (
    <>
    <h1 className='bg-amber-950 text-white text-center'>Hello, </h1>
    <button onClick={putData} className='bg-yellow-300 p-2 cursor-pointer '>Put Data</button>
    </>
  )
}

export default App
