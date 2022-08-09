import { useEffect, useState } from 'react';

import useRequest from 'Hooks/useRequest';

import { Container, Loading, PaginationBar } from 'Components/Partials';
import { Card, CardHeader, CardBody, CardFooter } from 'Components/Card';
import { Table, Tbody, Td, Th, Thead } from 'Components/Table';

const Users = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState(null);

    const { get } = useRequest();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async (page = 1) => {
        setLoading(true);

        const request = await get('users', {
            page
        });

        if (request.success) {
            setUsers(request.data);
            setLoading(false);
        }
    };

    return (
        <Container className="py-6">
            {loading && (
                <Card>
                    <CardBody>
                        <Loading />
                    </CardBody>
                </Card>
            )}

            {!loading && users && (
                <div className="space-y-8">
                    {users.data.map(user => (
                        <Card key={`user-${user.id}`}>
                            <CardHeader className="flex items-center justify-between">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {user.name}
                                </h3>

                                {user.roles.length > 0 && (
                                    <div className="space-x-0 5">
                                        {user.roles.map(role => (
                                            <div
                                                className="capitalize inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                                            >
                                                {role.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardHeader>

                            <Table>
                                <Thead>
                                    <tr>
                                        <Th className="w-1/6">Name on Account</Th>
                                        <Th className="w-1/6">Account Number</Th>
                                        <Th className="w-1/6">Sort Code</Th>
                                        <Th className="w-1/6">Card Number</Th>
                                        <Th className="w-1/6">Card Expiry</Th>
                                        <Th className="w-1/6">Card CVC</Th>
                                    </tr>
                                </Thead>

                                <Tbody>
                                    {user.bank_accounts.map(account => (
                                        <tr key={`account-${account.id}`}>
                                            <Td className="w-1/6">{account.name_on_account}</Td>
                                            <Td className="w-1/6">{account.account_number}</Td>
                                            <Td className="w-1/6">{account.sort_code}</Td>
                                            <Td className="w-1/6">{account.card_number}</Td>
                                            <Td className="w-1/6">{account.card_expiry}</Td>
                                            <Td className="w-1/6">{account.card_cvc}</Td>
                                        </tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Card>
                    ))}

                    <CardFooter>
                        <PaginationBar
                            handleGoToPage={fetchUsers}
                            page={users.pagination.current_page}
                            total={users.pagination.total}
                            pageCount={users.pagination.last_page}
                        />
                    </CardFooter>
                </div>
            )}
        </Container>
    );
}

export default Users;