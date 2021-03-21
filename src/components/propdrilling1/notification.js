

import ProfileComponent from './profile'

function NotificationComponent(props) {

    return (
        <ProfileComponent firstname={props.firstname} lastname={props.lastname} email={props.email}
        dateofbirth={props.dateofbirth} mobile={props.mobile}/>
    
        )
}

export default NotificationComponent;