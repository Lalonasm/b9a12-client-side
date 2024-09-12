
import { useEffect, useState } from 'react'
import Heading from '../../Shared/Heading'
import Container from '../../Shared/Container'
import LoadingSpinner from '../../Shared/LoadingSpinner'
import Card from './Card'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async'
// import Card from './Card'
// import Container from '../Shared/Container'
// import Heading from '../Shared/Heading'
// import LoadingSpinner from '../Shared/LoadingSpinner'

const Apartments = () => {
    const axiosSecure = useAxiosSecure();
    const [apartments, setApartments] = useState([])
    const [loading, setLoading] = useState(false)

    const query = useQuery(
        {
            queryKey: ['apartments'],
            queryFn: async () => {
                const { data } = await axiosSecure.get('/apartments');
                console.log(data);
                return data
            }
        }
    )

    console.log(query);


    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8000/apartments`)
            .then(res => res.json())
            .then(data => {
                setApartments(data)
                setLoading(false)
                console.log(data)
            })
    }, [])

    if (loading) return <LoadingSpinner />

    return (
        <Container>
            <div>
                <Helmet>
                    <title>Safoon Estate | apartments </title>
                </Helmet>
            </div>
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