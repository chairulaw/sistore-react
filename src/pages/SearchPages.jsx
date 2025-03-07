import { useState, useEffect, useCallback } from "react"
import {debounce, set} from "lodash"

const SearchPages = () => {
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    const searchProduct = useCallback(async (searchQuery) => {
        if (searchQuery.trim()) {
            setProduct([])
            setIsSearching(false)
            return
    }

    setLoading(true)
    setError(null)
    setIsSearching(false)

    try {
        const response = await fetch(`https://fakestoreapi.com/products?search=${searchQuery}`)
        const data = await response.json()
        setProduct(data)
        setIsSearching(true)
    } catch (error) {
        setError(error)
    } finally {
        setLoading(false)
    }
    }, [])

    const debounceSearch = useCallback(
    debounce((query) => searchProduct(query),
    [],
    )  
) 

    useEffect(() => {
        debounceSearch(query)
        return() => {
            debounceSearch.cancel()
        }, [query, debounceSearch]}


  return (
    <div>
        <section>
            <input type="text" />
            <label htmlFor="">SEARCH YOUR PRODUCT
                CONST YOUR PRODUVT
            </label>
        </section>
    </div>
  )
}

export default SearchPages