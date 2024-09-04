

export const CustomInput = (props) => {
    return (
        <div style={{margin: "20px", alignContent: " center"}}>
            <label style={{fontSize : "20px", marginRight: "20px"}}>
                {props.props.label}
            </label>
            <input
                type = {props.props.type}
                style={{padding: 10}}
                onChange={props.props.onChangeInput}
                value={props.props.value ? props.props.value : undefined}
            />
            {props.props.isButton ?
            <button style={{marginLeft: 20, padding: 10, color: "white",background: "#058efb"}}
                    onClick={props.props.onButtonClick}
                    disabled={!props.props.valid}
            >
                Submit
            </button>
                : null}
        </div>

    );
}