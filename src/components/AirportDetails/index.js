import React from 'react';
import {Button, View, Text, Heading,Divider,TextField,Flex,Picker } from '@adobe/react-spectrum';


// import { useParams } from 'react-router-dom';
import { Switch,Item, TabList, TabPanels, Tabs } from '@adobe/react-spectrum'
import { DialogTrigger, ActionButton, AlertDialog } from '@adobe/react-spectrum';
import "./index.css"


let options = [
    { name: 'Option 1' },
    { name: 'Option 2' },
    { name: 'Option 3' },
    { name: 'Option 4' },
    { name: 'Option 5' },
    { name: 'Option 6' }
];


const AirportDetails = () => {
    // const { id } = useParams();
    let [animal, setAnimal] = React.useState("Option 1");
    return (
        <View>
            <Text>International Airport</Text>
            <Tabs aria-label="History of Ancient Rome">
                <TabList>
                    <Item key="FoR">Terminal</Item>
                    <Item key="MaR">Transports</Item>
                    <Item key="Emp">Contact details</Item>
                </TabList>
                <TabPanels>
                    <Item key="FoR">
                        <div className='card-cont'>
                            <div className='card'>
                                <img alt='image2' src='https://res.cloudinary.com/dnmcjyigq/image/upload/v1720170454/Image_tfosx5.png'/>
                                <div className='card-desc'>
                                    <h1>Terminal 1</h1>
                                    <p>Optional data</p>
                                </div>
                            </div>
                            <div className='card'>
                                <img alt='image1' src='https://res.cloudinary.com/dnmcjyigq/image/upload/v1720170454/Image_tfosx5.png' />
                                <div className='card-desc'>
                                    <h1>Terminal 2</h1>
                                    <p>Optional data</p>
                                </div>
                            </div>
                            <div className='terminal-cont'>
                                <DialogTrigger>
                                    <ActionButton>+ Add terminal</ActionButton>
                                    <AlertDialog
                                        variant="confirmation"
                                        title="Save file"
                                        primaryActionLabel="Save"
                                        cancelLabel="Cancel"
                                        autoFocusButton="primary">
                                        A file with the same name already exists. Overwrite?
                                    </AlertDialog>
                                </DialogTrigger>

                            </div>


                        </div>

                        <div className='services-cont'>
                            <Heading>Services</Heading>
                            <Text marginBottom={20}>Lost & Found</Text>
                            <Divider marginBottom={20} size="M" />


                            <Flex alignItems="center" gap="size-700" wrap>
                                <TextField defaultValue='Lost & Found' label="Service Name" />
                                <Picker
                                    label="Category"
                                    items={options}
                                    selectedKey={animal}
                                    defaultSelectedKey="Bison">
                                    {item => <Item key={item.name}>{item.name}</Item>}
                                </Picker>

                                <Picker
                                    label="Sub Category"
                                    items={options}
                                    selectedKey={animal}
                                    onSelectionChange={selected => setAnimal(selected)}>
                                    {item => <Item key={item.name}>{item.name}</Item>}
                                </Picker>
                                <Button marginTop={25} variant="primary">
                                    <Text>+ upload image</Text>
                                </Button>
                                <Switch marginTop={25} name="power" value="low">Show image</Switch>
                                <TextField
                                    label="Description" minWidth={400}
                                    defaultValue='type here'/>
                            </Flex>


                            <Flex marginTop={50} direction="column">
                                <Text marginBottom={20}>Longue</Text>
                                <Divider marginBottom={20} size="M" />

                                <Text>Money Exchange</Text>
                                <Divider marginTop={20} size="M" />
                            </Flex>


                        </div>
       

                    </Item>
                </TabPanels>
            </Tabs>

           

        </View>
    );
};

export default AirportDetails;
