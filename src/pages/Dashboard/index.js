import React from 'react';

import { Container } from './styles';

import Navbar from '~/components/navbar';
import TableClients from '~/components/tableClients';

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <Container>
                <TableClients />
            </Container>
        </>
    );
}
