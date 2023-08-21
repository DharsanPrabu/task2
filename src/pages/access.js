import React from "react";
import Components from "../components/components";
import {Text,Flex,Switch,Badge} from '@radix-ui/themes'
function Access () {

return(
    
    <Components>

        <div>
          <p className='text-3xl  text-black-400'>Email, Phone, Username</p>
          <p className='text-sm font-normal text-gray-500'>Configure the user attributes the Clerk API should work with</p>
        </div>
    
        <div className="flex justify-between border rounded-xl p-10">
                <div className="justify-left">
                    <p className="text-md text-medium font-medium">Contact Information</p>
                    <p className="text-xs text-medium text-gray-500">Specify whether your users should have email addresses or phone numbers</p>
                </div>
            <div>
                <Flex>
                <Text size="2">
                    <label>
                    <Switch mr="2" defaultChecked /> Email address{' '}
                    <p className="text-xs text-medium text-gray-500">Users can add email addresses to their account</p>
                    <Flex gap="2">
                        <Badge color=" ">In progress</Badge>
                        <Badge color=" ">In review</Badge>
                        <Badge color=" ">Complete</Badge>
                     </Flex>
                    {/* <Text color="gray">(Default)</Text> */}
                    </label>
                </Text>
                </Flex>

                <Flex>
                <Text size="2">
                    <label>
                    <Switch mr="2" defaultChecked /> Phone Number{' '}
                    <p className="text-xs text-medium text-gray-500">Users can add phone numbers to their account</p>
                    {/* <Text color="gray">(Default)</Text> */}
                    </label>
                </Text>
                 </Flex>
            </div>
        </div>
   
    
         <div className="flex justify-between border rounded-xl p-10">
                <div>
                <p className="text-md text-medium font-medium">User Name</p>
                <p className="text-xs text-medium text-gray-500" >Specify whether your users have a unique username</p>
                </div>
                <Flex>
                <Text size="2">
                    <label>
                    <Switch mr="2" defaultChecked />User Name{' '}
                    <p className="text-xs text-medium text-gray-500">Users can set usernames to their account</p>
                    {/* <Text color="gray">(Default)</Text> */}
                    </label>
                </Text>
                </Flex>
          </div>

        <div className=" flex  justify-between border rounded-xl p-10">
                <div>
                <p className="text-md text-medium font-medium">Authentication factors</p>
                <p className="text-xs text-medium text-gray-500">Select the authentication methods to present when a user signs in</p>
                </div>

            <div>
                <Flex>
                <Text size="2">
                    <label>
                    <Switch mr="2" defaultChecked /> Password{' '}
                    <p className="text-xs text-medium text-gray-500">Users can sign in with a password. Passwords are </p>
                      <p className="text-xs text-medium text-gray-500">  required during sign up unless the user signs up </p>
                      <p className="text-xs text-medium text-gray-500">with a Social Connection or a Web3 wallet.</p>
                    </label>
                </Text>
                </Flex>
            </div>
            <div>
                <Flex>
                <Text size="2">
                    <label>
                    <Switch mr="2" defaultChecked /> Email Verification link{' '}
                    <p className="text-xs text-medium text-gray-500">Users can sign in with an email verification link </p>
                     
                    </label>
                </Text>
                </Flex>
            </div>

            <div>
                 <Flex>
                 <Text size="2">
                    <label>
                    <Switch mr="2" defaultChecked /> Email Verification code{' '}
                    <p className="text-xs text-medium text-gray-500">Users can sign in with an email verification code </p>
                     
                    </label>
                 </Text>
                 </Flex>

            </div>
            <div>
                  <Flex>
                  <Text size="2">
                    <label>
                    <Switch mr="2" defaultChecked /> SMS Verification code{' '}
                    <p className="text-xs text-medium text-gray-500">Users can sign in with an SMS verification code </p>
                     
                    </label>
                  </Text>
                  </Flex>
            </div>
            <div>
                  <Flex>
                  <Text size="2">
                    <label>
                    <Switch mr="2" defaultChecked /> Email Verification link{' '}
                    <p className="text-xs text-medium text-gray-500">Users can sign in with an email verification link </p>
                     
                    </label>
                  </Text>
                  </Flex>
            </div>     
        </div>

        <div className="flex justify-between border rounded-xl p-10">
                <div>
                <p className="text-md text-medium font-medium">Personal information</p>
                <p className="text-xs text-medium text-gray-500">Specify whether your users have extra personal information</p>
                </div>
                <div>
                <Flex>
                <Text size="2">
                    <label>
                    <Switch mr="2" defaultChecked /> Name{' '}
                    <p className="text-xs text-medium text-gray-500">Users can set their first and last name</p>
                    {/* <Text color="gray">(Default)</Text> */}
                    </label>
                </Text>
            </Flex>
            </div>
        </div>  

      <div className="flex justify-between border rounded-xl p-10">
                <div>
                <p className="text-md text-medium font-medium">Default user permissions</p>
                <p className="text-xs text-medium text-gray-500">Define the default settings for new users. These values can be overridden on a per-user basis in the user profile.</p>
                </div>
             <div>
                <Flex>
                <Text size="2">
                    <label>
                    <Switch mr="-2" defaultChecked />  {' '}
                    <p className="text-xs text-medium text-gray-500">Allow users to delete their accounts</p>
                    <Switch mr="2" defaultChecked />  {' '}
                    <p className="text-xs text-medium text-gray-500">Allow users to create organizations</p>
                    {/* <Text color="gray">(Default)</Text> */}
                    </label>
                </Text>
               </Flex>
            </div>            
        </div>
          
    </Components>

)
}

export default Access