import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        activeTab: "photos",
        results: [],
        loading: false,
        error: null,
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setActiveTabs(state, action) {
            state.activeTab = action.payload
        },
        setResults(state, action) {
            state.results = action.payload
            state.loading = false
        },
        setLoading(state) {
            state.loading = true
            state.error = null
        },

        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearResults(state) {
            state.results = []
        }

    }
})

export const { setQuery, setActiveTabs, setLoading, setResults, setError,clearResults } = searchSlice.actions
export const searchReducer = searchSlice.reducer // export by the name so need tot call it with the same name in the import 
// export default searchSlice.reducer  //default export call with any name when import 
