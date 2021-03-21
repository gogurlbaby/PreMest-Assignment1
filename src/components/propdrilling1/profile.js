

function ProfileComponent(props) {

    return (
          <div>
              <h3>Firstname:{props.firstname}</h3>
              <h3>Lastname:{props.lastname}</h3>
              <h3>Email:{props.email}</h3>
              <h3>Date of Birth:{props.dateofbirth}</h3>
              <h3>Mobile:{props.mobile}</h3>
          </div>
)
}

export default ProfileComponent;