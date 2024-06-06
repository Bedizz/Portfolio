import React from 'react'
import {Html,Body,Head,Heading,Hr,Container,Preview,Section,Text} from "@react-email/components"
import { Tailwind } from '@react-email/components'
import { sendEmail } from '@/actions/sendEmail';



type ContactFormProps = {
    message: string,
    email: string
    }
export default function ContactForm({message,email}: ContactFormProps) {
    
  return (
    <Html>
        <Head/>
        <Preview>New Message From Your Portfolio Site</Preview>
        <Tailwind>
            <Body className='bg-gray-100'>
            <Container>
                <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                    <Heading className='leading-tight'>You have received the following message from the contact form</Heading>
                    <Text>{message}</Text>
                    <Hr/>
                    <Text>The Sender' Email is : {email}</Text>
                </Section>
            </Container>    
            </Body>
        </Tailwind>
    </Html>
  )
}
