"use server";
import { Resend } from "resend";
import ContactForm from "@/email/contact-form";
import React from "react";
import { validateString,getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (FormData: FormData) => {
  const senderEmail = FormData.get("email");
  const message = FormData.get("textArea");
  if (!validateString(senderEmail, 500) ) {
    return {
      error: "Invalid email address",
    };
  }
    if(!validateString(message, 5000))
      return {
    error: "Invalid message",
  }
  
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "turkyilmaz.bediz@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactForm, {
        message: message ,
        email: senderEmail ,
      }),
    });
    return {
      data,
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
   
  }
  
};
