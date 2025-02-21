"use client";
import React from "react";
import { Label } from "@/components/aceui/label";
import { Input } from "@/components/aceui/input";

import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandLinkedin,
} from "@tabler/icons-react";
import CustomButton from "@/components/CustomButton";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function SignUpPage() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [userEmail, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!firstName || !lastName || !userEmail || !message) {
            alert("Please fill out all fields.");
            return;
        }

        const userName = `${firstName} ${lastName}`;
        
        fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName,
                userEmail,
                message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });



        alert("Your message has been sent!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    };
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black shadow-white z-10">
            <h2 className="font-bold text-xl text-white-800">
                <TypingAnimation>Get in Touch!</TypingAnimation>
            </h2>
            <p className="text-neutral-200 text-sm max-w-sm mt-2">
                Send me a message or connect with me on LinkedIn or GitHub.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input
                            id="firstname"
                            placeholder="Tyler"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input
                            id="lastname"
                            placeholder="Durden"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="aerodynamic@dapunk.com"
                        type="email"
                        value={userEmail}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>
                    <Input
                        id="message"
                        placeholder="Your message here"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </LabelInputContainer>

                <CustomButton className="w-full center rounded-xl">
                    Send <span className="ml-2">→</span>
                </CustomButton>
                </form>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <div className="flex flex-col space-y-4">
                    <button
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        onClick={() => window.open("https://github.com/mykalbayouk", "_blank", "noopener,noreferrer")}
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            GitHub
                        </span>
                        <BottomGradient />
                    </button>
                    <button
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        onClick={() => window.open("https://www.linkedin.com/in/michaelbayouk/", "_blank", "noopener,noreferrer")}
                    >
                        <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Linkedin
                        </span>
                        <BottomGradient />
                    </button>
                </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
