import {Button, TextField, Text, Dialog, Flex, Checkbox, Table} from '@radix-ui/themes'
import react from 'react'
import Components from '../components/components'
import {FaUsers} from "react-icons/fa"
import {BsArrowDownUp, BsThreeDotsVertical} from "react-icons/bs"
import {RxSlash} from "react-icons/rx"

function Pages(){
    return(
        <Components> 
          <div className='flex css-xbxdis p-10 pl-16'>
            <FaUsers className='mt-1 mr-2'/>
            <p className='flex chakra-text css-711x80'>Users</p>
          </div>

          <div className='pb-10 pl-16'>
              <p className='text-4xl font-medium'>Users</p>
              <p className='text-sm font-normal text-gray-400'>View and manage users</p>
          </div>

          <div className='px-16 manage pb-5 flex justify-between'>
            <div>
              <p className='text-lg font-semibold'>Manage Users</p>
              <p className='text-sm font-normal text-gray-400'>Create and manage users, their settings and profiles.</p>
            </div>
            <div className='float-right btn '>
            <Dialog.Root>
              <Dialog.Trigger>
                <Button>Create User</Button>
              </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 500 }}>
            <Dialog.Title>Create User</Dialog.Title>
              <Dialog.Description size="15" mb="4">
                
              </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold" htmlFor="email">
                  Email
                </Text>
                <TextField.Input 
                  defaultValue=""
                  placeholder="name@gmail.com"
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Password
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="password"
                />
              </label>
            </Flex>
            <Flex>
          
          <Text size="2">
            <label className='flex mt-4 mb-6'>
              <Checkbox defaultChecked className=' mr-4' /> 
              <p>
                <p className='font-medium mb-1'>Ignore Password Policies</p>
                If checked, password policies will not be enforced on this password.
              </p>
            </label>
          </Text>
        </Flex>

            <div className='flex justify-between'>
              <Dialog.Close>
                <Button variant="" color="blue">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>CREATE</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
              </div>
            </div>
            <hr/>

          <div className='flex justify-between m-5 pl-10'>
            <input className='border rounded-lg px-2 py-1 w-60' placeholder='search' type='search' />
            <div className='border rounded-lg px-4 py-1 mr-11 flex'>
              <BsArrowDownUp className='mt-1 mr-3' />
              <p className='font-medium'>Sort</p>
            </div>
          </div>
          <hr/>

        <div>
          <div className='px-16'>
            <Table.Root >
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Joined</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Last Signed In</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                  <Table.Cell>danilo@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                  <Table.Cell><BsThreeDotsVertical className='cursor-pointer' /></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                  <Table.Cell>zahra@example.com</Table.Cell>
                  <Table.Cell>Admin</Table.Cell>
                  <Table.Cell><BsThreeDotsVertical className='cursor-pointer' /></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                  <Table.Cell>jasper@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                  <Table.Cell><BsThreeDotsVertical className='cursor-pointer' /></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </div>
        </div>
       </Components>
        
    )
}
export default Pages