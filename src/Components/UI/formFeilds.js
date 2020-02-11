import React from 'react';

export default function FormFeilds({ formData, id }) {
    const renderTemplate = () => {
        let formTemplate = null;
        switch (formData.element) {
            case 'input':
                formTemplate = (
                    <div>
                        <input
                            {...formData.config}
                            value={formData.value}
                            onChange={(event) => change} />
                    </div>
                );
                break;
            default: formTemplate = null;
        }
        return formTemplate;
    }
    return (
        <div>
            {renderTemplate()}
        </div>
    )
}