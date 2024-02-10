import {
    initializeFaro as coreInit,
    getWebInstrumentations,
    ReactIntegration
} from '@grafana/faro-react'

import { TracingInstrumentation } from '@grafana/faro-web-tracing'

export function initializeFaro() {
    const faro = coreInit({
        url: process.env.REACT_APP_URL,
        instrumentations: [
            ...getWebInstrumentations({
                captureConsole: true
            }),
            new TracingInstrumentation(),
            new ReactIntegration()
        ],
        app: {
            name:  process.env.REACT_APP_NAME,
            version: '1.0.0',
            environment: 'production'
        },
    })
    console.log('from initializeFaro')
    console.log(process.env.REACT_APP_NAME)
    faro.api.pushLog(['Faro was initialized'])

    return faro
}
