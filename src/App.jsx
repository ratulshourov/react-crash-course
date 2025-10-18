import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import Player from './Player'
import User from './User'
import Posts from './Posts'
import Countries from './components/Countries';
import { add } from './utils/math'

const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
                  .then(res =>res.json());
const allfriends=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const allpost=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}
const countries=async()=>{
  const res=await fetch('https://api.sampleapis.com/countries/countries');
  return res.json();
}
console.log(add(3,2));

function App() {
  const friends =allfriends();
  const postPromise=allpost();
  const countryPromise=countries();
  
  
  return (
    <>
      <div>
        <Suspense fallback={<h1>All Countries...</h1>}>
          <Countries countries={countryPromise}></Countries>
        </Suspense>
       {/* <Suspense fallback={<h1>Loading ...</h1>}>
        <User fetchUsers={fetchUsers}></User>
       </Suspense>
       <Suspense fallback={<h2>Loading all posts ...</h2>}>
        <Posts postPromise={postPromise}></Posts>
       </Suspense> */}
        <Counter/>
        <Player/>
        </div>
    </>
  )
}

export default App
