import { useState } from "react";
import {StatusBar} from "./status-bar.tsx";
import type {KeyBinding} from "@opentui/core";

type Props={
    onSubmit : (text: string) => void;
    disabled?: boolean;
}

const PLACEHOLDERS = [
    "Fix a bug in the database",
    "Explain this TypeScript error",
    "Refactor this component",
    "Write tests for this function",
    "Optimize this SQL query",
    "Create a REST API endpoint",
];
export const TEXTAREA_KEY_BINDINGS: KeyBinding[] = [
    { name: "return", meta: true, action: "newline" },
    { name: "return", action: "submit" },
];

export function InputBar({ onSubmit, disabled = false }: Props) {
    const [placeholder] = useState(() => {
        return PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)];
    });

    return (
        <box width="100%" alignItems="center">
            <box border={["left"]} borderColor={"cyan"} >

                <box
                    position="relative"
                    justifyContent="center"
                    paddingX={2}
                    paddingY={1}
                    backgroundColor="#1A1A24"
                    width="100%"
                    gap={1}
                >
                    <textarea
                        focused={!disabled}
                        keyBindings={TEXTAREA_KEY_BINDINGS}
                        placeholder={`Ask anything... "${placeholder}"`}


                    />
                    <StatusBar/>
                </box>
            </box>
        </box>
    );
}