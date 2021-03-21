

import NotificationComponent from './notification'

function DetailComponent(props) {

    return (
        <NotificationComponent firstname={props.firstname} lastname={props.lastname} email={props.email}
        dateofbirth={props.dateofbirth} mobile={props.mobile}/>
    
        )
}

export default DetailComponent;