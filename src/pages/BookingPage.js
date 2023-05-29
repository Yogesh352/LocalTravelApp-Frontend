import { Box, Text, Stack, Group, Grid, Input, Table } from "@mantine/core";
import React, { useState, useEffect } from "react";

const BookingPage = () => {
    const [bookingData, setBookingData] = useState(null);
    const [tourData, setTourData] = useState({});
    const userId = localStorage.getItem('user_id')

    useEffect(() => {
        fetch(`http://localhost:5000/api/bookings/user/${userId}`)
            .then((response) => response.json())
            .then((data) => setBookingData(data));
    }, [userId]);

    useEffect(() => {
        const fetchTourData = async () => {
          for (const booking of bookingData) {
            const response = await fetch(`http://localhost:5000/api/tours/${booking.tour_id}`);
            const tour = await response.json();
            setTourData((prevData) => ({
              ...prevData,
              [booking.tour_id]: tour.name
            }));
          }
        };
    
        if (bookingData) {
          fetchTourData();
        }
      }, [bookingData]);

    if (!bookingData) {
        return <Text>Loading...</Text>;
    }

    const rows = bookingData.map((booking) => (
        <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.pax}</td>
            <td>{new Date(booking.booking_date).toLocaleDateString()}</td>
            <td>{tourData[booking.tour_id]}</td>
        </tr>
    ));

    
    return (
        
        <Table style={{ maxWidth: '80%', margin: '50px auto 0', justifyContent: 'center' }}>
            <thead>
                <tr>
                    <th>Booking ID:</th>
                    <th>Pax:</th>
                    <th>Booking Date:</th>
                    <th>Tour Name:</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );

    // return (
    //     <>
    //     <Box padding="xl">
    //         <Text variant="h1" align="center" style={{ marginBottom: "2rem" }}>
    //             My Bookings
    //         </Text>
    //         <Stack spacing="lg">
    //             {bookingData.map((booking) => (
    //                 <Box
    //                     key={booking.id}
    //                     padding="lg"
    //                     shadow="sm"
    //                     radius="md"
    //                     background="white"
    //                 >
    //                     <Grid columns={2} gap="lg">
    //                         <Group direction="column" spacing="sm">
    //                             <Text size="lg">Booking ID:</Text>
    //                             <Text size="lg">Pax:</Text>
    //                             <Text size="lg">Booking Date:</Text>
    //                             <Text size="lg">Tour ID:</Text>
    //                         </Group>
    //                         <Group direction="column" spacing="sm">
    //                             <Text size="lg">{booking.id}</Text>
    //                             <Text size="lg">{booking.pax}</Text>
    //                             <Text size="lg">{new Date(booking.booking_date).toLocaleDateString()}</Text>
    //                             <Text size="lg">{booking.tour_id}</Text>
    //                         </Group>
    //                     </Grid>
    //                 </Box>
    //             ))}
    //         </Stack>
    //     </Box>
    //     </>
    // );
};

export default BookingPage;
