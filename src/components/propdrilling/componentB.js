import ComponentC from './componentC'

function ComponentB (props){
    return(
        <div>
            <p>this is component B</p>
            <ComponentC 
            compCitem1 ={props.compBitem1}
            compCitem2 ={props.compBitem2}
            />
        </div>

    )
}

export default ComponentB