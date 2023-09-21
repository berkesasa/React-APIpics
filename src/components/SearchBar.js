import { useState } from "react"

function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div className="rounded-2xl shadow-xl p-5 max-md:max-w-[70vw] md:max-w-[60vw] mx-auto mb-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-40% to-emerald-500 to-90% text-center">
            <form className="flex flex-col space-y-5" onSubmit={handleFormSubmit}>
                <label className="md:text-xl text-white">Enter Search Term</label>
                <input className="max-md:placeholder:text-xs md:max-lg:placeholder:text-sm rounded-lg py-1 px-3 transition duration-300 focus:ring-0 focus:outline-none" value={term} onChange={handleChange} placeholder="Search Anything (Like a car)" />
            </form>
        </div>
    )
}

export default SearchBar;