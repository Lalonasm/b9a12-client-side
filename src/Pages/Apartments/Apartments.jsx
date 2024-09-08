
import { useEffect, useState } from 'react'
import Heading from '../../Shared/Heading'
import Container from '../../Shared/Container'
import LoadingSpinner from '../../Shared/LoadingSpinner'
import Card from './Card'
// import Card from './Card'
// import Container from '../Shared/Container'
// import Heading from '../Shared/Heading'
// import LoadingSpinner from '../Shared/LoadingSpinner'

const Apartments = () => {
    const [apartments, setApartments] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8000/apartments`)
            .then(res => res.json())
            .then(data => {
                setApartments(data)
                setLoading(false)
            })
    }, [])

    if (loading) return <LoadingSpinner />

    return (
        <Container>
            {apartments && apartments.length > 0 ? (
                <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                    {apartments.map(apartment => (
                        <Card key={apartment._id} apartment={apartment} />
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
                    <Heading
                        center={true}
                        title='No Apartment Available In This Category!'
                        subtitle='Please Select Other Categories.'
                    />
                </div>
            )}
        </Container>
    )
}

export default Apartments