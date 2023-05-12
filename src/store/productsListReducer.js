import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProductList = createAsyncThunk(
  "productsList/fetchThem",
  async () => {
    return axios.get("https://fakerapi.it/api/v1/products?_quantity=20")
    .then(resp => resp.data.data)
  }
)

const productsListSlice = createSlice({
    name: "productsList",
    initialState: {
        products: [],
        loading: false,
        error: ""
    },
    reducers: {},
    extraReducers: builder => {
      builder.addCase(fetchProductList.pending, state => {
        state.loading = true,
        state.error = ""
        state.products = null
      })
      builder.addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = false,
        state.products = action.payload,
        state.error = ""
      })
      builder.addCase(fetchProductList.rejected, (state, action) => {
        state.loading = false,
        state.error = action.error.message,
        state.products = null
      })
    }
  }
)

export default productsListSlice.reducer