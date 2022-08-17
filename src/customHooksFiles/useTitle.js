import {useEffect} from 'react'

function useTitle(count) {
    useEffect(() => {
        document.title = `Count : ${count}`
    }, [count])
}

export default useTitle