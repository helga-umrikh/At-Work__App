import React from 'react'
import EditorWidget from '../../components/EditorWidget/EditorWidget'
import ToHomePage from '../../components/ToHomePageComponent/ToHomePage'

const EditPage = () => {
    return (
        <div className="edit-page">
            <div className="page-wrapper">
                <ToHomePage />
                <EditorWidget />
            </div>
        </div>
    )
}

export default EditPage
