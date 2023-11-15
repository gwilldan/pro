export async function verify_token( dispatch: { (value: any): void; (arg0: { type: string; payload: { email: any; uid: any; }; }): any; }) {
  console.log('fvfhgfh')

  const token = localStorage.getItem("token");
  if(token) {
      try {
          const res = await fetch("https://projexa.onrender.com/api/auth/verify_token", {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
              },
          });
          const data = await res.json();
          if (res.ok) {
              console.log(data);
               dispatch({ type: "VERIFY-USER", payload:{ email:data.data.user.email, uid:data.data.user.uid } })
              console.log(data.data.user.uid)
              console.log(token)
              return data;
          }
          else {
              console.log(data.message)
          }
      }
      catch (error) {
          console.log(error);
      }
  }
}