
export default function City({name}) {
    return (<div> Hello, Visit {name.toUpperCase()}</div>);
}

export function Country({capital}) {
    return (<div> Hello, Visit {capital.toUpperCase()}</div>);
}
