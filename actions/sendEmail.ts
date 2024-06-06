"use server";
import { error } from "console";
import { Resend } from "resend";
import ContactForm from "@/email/contact-form";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const senderEmail = FormData.get("email");
  const message = FormData.get("textArea");
  if (!FormData.get("email") || !FormData.get("textArea")) {
    return error("Please fill out all fields");
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form<onboarding@resend.dev>",
      to: "turkyilmaz.bediz@gmail.com",
      subject: "Message from contact form",
      reply_to: FormData.get("email")?.toString() || "",
      react: React.createElement(ContactForm, {
        message: message as string,
        email: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error
    };
  }
  return data;
};
