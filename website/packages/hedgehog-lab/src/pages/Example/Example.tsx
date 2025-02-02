import React from "react";
import Editor from "../../components/Base/Editor/Editor";
import {tutorials} from "../../tutorials";
import {useEditor} from "../../hooks/useEditor";
import {useMatch} from "react-router-dom";
import {useEffectOnce} from "react-use";

const Example = () => {
    const {setEditorCode} = useEditor();
    const mathExamplePage = useMatch('/e/example/:exampleName')

    useEffectOnce(() => {
        const title = mathExamplePage?.params.exampleName
        const currentObj = tutorials.find(o => o.description === title) ?? {
            'description': 'Empty',
            'source': ''
        }

        setEditorCode(currentObj?.source)
    })

    return (
        <>
            <Editor/>
        </>
    );
}

export default Example;
