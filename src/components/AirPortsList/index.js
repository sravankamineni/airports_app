import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, defaultTheme, Provider } from '@adobe/react-spectrum';
import { Cell, Column, Row, TableView, TableBody,TableHeader } from '@adobe/react-spectrum'
import { Flex } from '@adobe/react-spectrum';
// import { Breadcrumbs, Item } from '@adobe/react-spectrum'

// import Draw from '@spectrum-icons/workflow/Draw';
// import Copy from '@spectrum-icons/workflow/Copy';
// import Delete from '@spectrum-icons/workflow/Delete';
// import Edit from '@spectrum-icons/workflow/Edit';

import './index.css';

const initialAirports = [
    { id: 1, name: 'Los Angeles International', country: 'USA', countryCode: 'US', terminals: 9 },
    { id: 2, name: 'London Heathrow', country: 'UK', countryCode: 'GB', terminals: 4 },
    { id: 3, name: 'Tokyo Haneda', country: 'Japan', countryCode: 'JP', terminals: 5 },
];

const AirPortsList = () => {
    const [airports, setAirports] = useState(initialAirports);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newAirport, setNewAirport] = useState({ name: '', country: '', countryCode: '', terminals: '' });
    const navigate = useNavigate();


    // const handleEdit = (id) => {
    //     console.log(`Edit airport with id ${id}`);
    //     // Implement edit logic here
    // };

    // const handleDelete = (id) => {
    //     setAirports(airports.filter(airport => airport.id !== id));
    // };

    const handleAddNewClick = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAirport(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setAirports(prev => [
            ...prev,
            { ...newAirport, id: Date.now(), terminals: parseInt(newAirport.terminals) }
        ]);
        setNewAirport({ name: '', country: '', countryCode: '', terminals: '' });
        setIsFormVisible(false);
    };

    return (
        <div className="table-container">
           
            <div className="actions">
                <Provider theme={defaultTheme}>
                    <Button
                        variant="primary"
                        onClick={handleAddNewClick}
                        // eslint-disable-next-line
                        style='fill'
                    >
                        {isFormVisible ? 'Cancel' : '+ Add New'}
                    </Button>
                </Provider>
            </div>
            {isFormVisible && (
                <form className="add-form" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Airport Name"
                        value={newAirport.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={newAirport.country}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="countryCode"
                        placeholder="Country Code"
                        value={newAirport.countryCode}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="terminals"
                        placeholder="Terminals"
                        value={newAirport.terminals}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Add Airport</button>
                </form>
            )}


            <Flex direction="column">
                <Provider theme={defaultTheme}>
                    <TableView
                        aria-label="Example table with static contents"
                        selectionMode="multiple"
                        onAction={(key) => navigate(`/airport/${key}`)}
                    >
                        <TableHeader>
                            <Column align='start' allowsResizing maxWidth={700}>All Airports</Column>
                            <Column>Country</Column>
                            <Column>Code</Column>
                            <Column>Terminals</Column>
                        </TableHeader>
                        <TableBody>
                            {airports.map(each => (
                                <Row key={each.id}>
                                    <Cell>{each.name}</Cell>
                                    <Cell>{each.country}</Cell>
                                    <Cell>{each.countryCode}</Cell>
                                    <Cell>{each.terminals}</Cell>
                                </Row>
                            ))}
                        </TableBody>
                    </TableView>
                </Provider>
            </Flex>
        </div>
    );
};


export default AirPortsList;
