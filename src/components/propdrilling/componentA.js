import ComponentB from './componentB'

function ComponentA(props) {
    return (
        <div>
            <p>this is component A</p>
            <ComponentB
                compBitem1={props.item1}
                compBitem2={props.item2}
            />
        </div>

    )
}

export default ComponentA