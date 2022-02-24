import './users.css';
import  '../index';

  function Users(){
 /*const name = {name}};
    fetch("/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          name,
          
      })

  })
  .then((resp) => console.log("yay"))
  .catch((err) => console.log("err"))*/

    return(
        <>
      
     
    
    <div className='userform'>
    <h2>Create user</h2>
      <form /*onSubmit={handleAddFormSubmit}*/>
      <label for="fname">Name:</label>
      <input type="text" id="name" name="name" /*onChange={<handleAddFormChange/>}*//>
      <label for="fname">Type:</label>
      <input type="text" id="type" name="type"/>
      </form>
   
      <div className="button">
       <button className='cancelbtn'>Cancel</button>
       <button className='ok'>Ok</button>
  </div>
    </div>
      </>
      
    )
   
}
export default Users;