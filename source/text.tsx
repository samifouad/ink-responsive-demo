// TextInputComponent.tsx
import React from 'react';
import { TextInput } from '@inkjs/ui';

interface TextInputComponentProps {
    onSubmit: (value: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({ onSubmit }) => {
    return (
        <TextInput
            placeholder="Enter your name"
            onSubmit={onSubmit}
        />
    );
};

export default TextInputComponent;
