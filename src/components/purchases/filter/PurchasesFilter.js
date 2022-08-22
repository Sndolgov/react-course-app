import "./PurchasesFilter.css";

const PurchasesFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onChangeYear(event.target.value);
    };

    return (
        <div className="purchases-filter">
            <div className="purchases-filter__control">
                <label>Select year</label>
                <select value={props.selectedYear} onChange={yearChangeHandler}>
                    {
                        props.years.map((value, index) => {
                            return <option value={value} key={index}>{value}</option>
                        })
                    }
                    {/*<option value="2022">2022</option>*/}
                    {/*<option value="2021">2021</option>*/}
                    {/*<option value="2020">2020</option>*/}
                    {/*<option value="2019">2019</option>*/}
                </select>
            </div>
            {props.children}
        </div>
    );
};

export default PurchasesFilter;