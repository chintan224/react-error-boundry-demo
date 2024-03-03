import {useState} from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({error, resetErrorBounday}) {
    return (
        <div rolerole="alert">
            <p>SOmething went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBounday}>Try Again</button>
        </div>
    )
}

function Bomb() {
    throw new Error('Bum Fatta !!!');
}

export default function ErrorRecoveryComp() {

    const [explode, setExplode] = useState(false);

    return (
        <div> 
            <button onClick={() => setExplode(e=>!e)}>Toggle Explode</button>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => setExplode(false)}
                resetKeys={[explode]}></ErrorBoundary>
                {explode ? <Bomb/> : null}
        </div>
    )

}