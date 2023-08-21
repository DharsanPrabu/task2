import {Button,TextField,Text,Dialog,Flex,Checkbox} from '@radix-ui/themes'
import react from 'react'
import Components from '../components/components'
import {FaUsers} from "react-icons/fa"
import {MdVerifiedUser} from "react-icons/md"
import {RxSlash} from "react-icons/rx"

function Pages(){
    return(
        <Components>
           <p className="flex mb-4 cursor-pointer font-medium    px-5">
           
                          <MdVerifiedUser className='mt-1 mr-2'/>
                           <p className='text-gray-400 text-xs  '>User&authentication</p>
                           <p className='pl-4 pt-1'> <RxSlash/></p>
                           <p className='pl-2 font-medium text-xs '> Email, Phone, Username</p>
                        </p>
       
 <div className='flex css-xbxdis'>
 <FaUsers className='mt-1 mr-2'/>
    <p className='flex chakra-text css-711x80'>Users</p>
   </div>
   <div>
      <p className='text-4xl'>USERS</p>
      <p className='text-sm font-normal text-gray-400'>View and manage users</p>
   </div>

   <div className='pt-20 manage'>
    <p className='text-lg'>Manage Users</p>
    <div className= 'float-right pb-15 btn'>
    <Dialog.Root>
  <Dialog.Trigger>
    <Button>Edit profile</Button>
  </Dialog.Trigger>

  <Dialog.Content style={{ maxWidth: 500 }}>
    <Dialog.Title>Create User </Dialog.Title>
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
    <label>
      <Checkbox mr="1" defaultChecked /> <h5>Ignore Password Policies</h5>If checked, password policies will not be enforced on this password.
    </label>
  </Text>
</Flex>

    <Flex gap="3" mt="2" justify="">
      <Dialog.Close>
        <Button variant="" color="gray">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Create</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
      </div>
    <p className='text-sm font-normal text-gray-400'>Create and manage users, their settings and profiles.</p>
    </div>

  <div>
  <div class=""><table class="">
<thead class="">
<tr class="flex p-20 ">
<th class="">
<div class="pl-20 ">User</div></th>
<th class=""><div class="pl-20 ">Joined<div class="">
<svg  width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20" fill="currentColor" aria-hidden="true" focusable="false" class="chakra-icon css-7te9d6" aria-label="Sort by created_at"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
</div></th>
<th class=""><div class="pl-20 ">Last signed in</div></th>
<th class=""></th></tr></thead>
<tbody class=""><tr class=""><td colspan="4" class=""><div class="s"><div class=""><span className='text-sm font-normal text-gray-400'>No users to display</span></div></div></td></tr></tbody></table></div>
  </div>
       </Components>
        
    )
}
export default Pages