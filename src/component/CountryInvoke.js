import City from "./country"
import { Country } from "./country"
import {ErrorBoundary} from 'react-error-boundary'

export default function CountryInvoke() {
    return (
        <ErrorBoundary FallbackComponent={ErrorHandler} >
            <div>
                <City />
                <Country />
            </div>
        </ErrorBoundary>
    )
}


function ErrorHandler({error}) {
    return (
        <div role="alert">
            <p>An error occured:</p>
            <pre>{error.message}</pre>
        </div>
    )
}