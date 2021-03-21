
import DetailComponent from './detail'

function DashboardComponent(props) {

    return (
        <DetailComponent firstname={props.firstname} lastname={props.lastname} email={props.email}
        dateofbirth={props.dateofbirth} mobile={props.mobile}/>
    
        )
}

export default DashboardComponent;