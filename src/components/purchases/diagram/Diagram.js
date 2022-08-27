import DiagramBar from "./DiagramBar";
import './Diagram.css'

const Diagram = (props) => {

    const dataSetsValues = props.diagramDataSets.map(dataSet =>dataSet.value)
    const maxMonthAmount = Math.max(...dataSetsValues)

    return <div className='diagram'>
        {props.diagramDataSets.map(data => {
            return <DiagramBar
                key={data.label}
                value={data.value}
                maxValue={maxMonthAmount}
                label={data.label}
            />
        })}
    </div>
}

export default Diagram