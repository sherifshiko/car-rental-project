import axios from "axios";
import { useEffect } from "react"

export default function Booking() {

  useEffect(() => {


    axios.post('https://demo.tourcode.online/api/auth/register', {
      name:'test6',
      email: 'test6@test.com',
      password: 'password123'
    }, {
      headers: {
        'Accept': 'application/json',
      }
    })
      .then(response => {
        console.log(response.data.token)        
        const token = response.data.token;
        axios.get('https://demo.tourcode.online/api/cars', {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
      })
      .then(response => console.log(response)      )
      .catch(error => console.error(error));

  }, [])

  //





  // useEffect(() => {
  //   axios.post('https://demo.tourcode.online/api/auth/login', {
  //     email: 'tome2@tome2.com',
  //     password: 'password123'
  //   }, {
  //     headers: {
  //       'Accept': 'application/json',
  //     }
  //   })
  //     .then(response => console.log(response.data))
  //     .catch(error => console.error(error));
  // }, [])


  // useEffect(() => {
  //   axios.post('https://demo.tourcode.online/api/auth/logout', {
  //     email: 'tome2@tome2.com',
  //     password: 'password123'
  //   }, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RlbW8udG91cmNvZGUub25saW5lL2FwaS9hdXRoL3JlZ2lzdGVyIiwiaWF0IjoxNzY3OTI2OTMzLCJleHAiOjE3Njc5MzA1MzMsIm5iZiI6MTc2NzkyNjkzMywianRpIjoiZVdoeUtHOEViUVZmdEFKeCIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3Iiwicm9sZSI6bnVsbH0.xD6XA7yJ4eRxXZTdtUHhfJkwYT0whUQNxtZQrn5lcnk'
  //     }
  //   })
  //     .then(response => console.log(response.data))
  //     .catch(error => console.error(error));
  // }, [])









  return <>


    <section className={`h-screen bg-light-car dark:bg-dark-car bg-cover`}>
      <h1 className="text-center font-bold m-4 text-capitalize"> test page</h1>
    </section>



  </>
}

