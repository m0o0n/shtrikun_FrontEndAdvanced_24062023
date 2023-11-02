export const handleFulfilled = (state, _) => {
    state.isLoading = false
}

export const handlePending = (state, _) => {
    state.isLoading = true
} 

export const handleRejected = (state, {payload}) => {
    state.isLoading = false
    state.err = payload
} 