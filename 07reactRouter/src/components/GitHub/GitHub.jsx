// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function GitHub() {

    // const [data, setData] = useState([])
    const dataa = useLoaderData();

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])


    return (
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl' >
            GitHub Followers:{dataa.followers}
        </div>
    )
}

export default GitHub

export const GitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    return data
}  // This is a function that returns a promise that resolves to the data from the GitHub API

