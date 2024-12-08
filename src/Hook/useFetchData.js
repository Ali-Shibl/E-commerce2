import axios from 'axios';
import  { useEffect, useState } from 'react'

export default function useFetchData(ApiData) {

    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(false)

    async function getData(api) {
        setisLoading(true)
        try {
            let { data } = await axios.get(api)
            setdata(data)
            console.log(data);

        } catch (error) {
            console.log(error);


        }

        setisLoading(false)


    }

    useEffect(() => {
        getData(ApiData)
    }, [])





  return {data,isLoading}
}
