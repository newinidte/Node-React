const users = 
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: 'Admin' }
    
export default function authenticate( req, res ) {

   const user =  req.query.username;
   const pwd = req.query.password

   // return 400 status if username/password is not exist
   if (!user || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Username or Password is required."
    });
  }
 console.log('users.username '+users.username+'sers.password '+ users.password)
  // return 401 status if the credential is not match.
  if (user !== users.username || pwd !== users.password) {
    return res.status(401).json({
      error: true,
      message: "Username or Password is wrong."
    });
  }
  return true;
}

