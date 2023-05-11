import { useParams } from 'react-router-dom'

export function Repositorie(){
    const { repo } = useParams()
    return <h1>Repositorie id:{repo} </h1>
}