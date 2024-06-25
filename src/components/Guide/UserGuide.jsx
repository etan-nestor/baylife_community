import React, { useState } from 'react';
import Tour from 'reactour';

const UserGuide = () => {
    const [isTourOpen, setIsTourOpen] = useState(true);

    const steps = [
        {
            selector: '.dark-mode-button',
            content: 'Cliquez ici pour basculer entre le mode clair et le mode sombre.',
        },
    ];
    return (
        <Tour
            steps={steps}
            isOpen={isTourOpen}
            onRequestClose={() => setIsTourOpen(false)}
            className="text-sm font-semibold"
            accentColor="#008800"
            rounded={10}
            arrowColor="#008800"
        />
    )
}

export default UserGuide
