import {useState, useEffect} from 'react';

export default function useFetch(url) {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => setError(err))
    .finally( _ => setLoading(false))
  }, [url])

  return {
    data, loading, error
  }
}