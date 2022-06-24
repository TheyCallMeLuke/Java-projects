export function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
            style={{ backgroundColor: props.squareBackgroundColor }}
        >
            {props.value}
        </button>
    );
}