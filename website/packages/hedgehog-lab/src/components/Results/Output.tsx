import React from 'react';
import ReactECharts from 'echarts-for-react'; 
import Plot from 'react-plotly.js';
import MathJax from 'react-mathjax';
import Markdown from 'react-markdown';
import TableComponent from './OutputItemCompoments/TableComponent';
import {isDrawingItem, isFormulaItem, isMarkdownItem, isTableItem, isTeXItem, isEChartItem, OutputItem, isTextItem} from '@hedgehog/core';
import type {CodeComponent} from 'react-markdown/src/ast-to-react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {useRecoilValue} from "recoil";
import {themeModState} from "../../themes/RThemeStates";
import {atomOneDark, atomOneLight} from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextareaAutosize from '@mui/material/TextareaAutosize'

type CodeProps = Parameters<CodeComponent>[0]

const Output = ({outputItemList}: { outputItemList: OutputItem[] }): React.ReactElement => {
    const themeMode = useRecoilValue(themeModState)

    const items = outputItemList.map((item) => {
        if (isDrawingItem(item)) {
              const actualLayout = item.layout === undefined? {}: item.layout;
              //@ts-ignore
            return <Plot
            data={JSON.parse(JSON.stringify(item.data))}
            layout={JSON.parse(JSON.stringify(actualLayout))}
           />
        } else if (isTeXItem(item)) {
            return (
                //@ts-ignore
                <MathJax.Provider>
                    <div>
                        <MathJax.Node inline formula={item.text}/>
                    </div>
                </MathJax.Provider>
            );
        } else if (isFormulaItem(item)) {
            return (
                //@ts-ignore
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={item.text}/>
                    </div>
                </MathJax.Provider>
            );
        } else if (isMarkdownItem(item)) {
            return <Markdown components={{
                code({node, inline, className, children, ...props}: CodeProps): React.ReactElement {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        //@ts-ignore
                        <SyntaxHighlighter style={themeMode === 'light' ? atomOneLight : atomOneDark}
                                           language={match[1]}
                                           customStyle={{backgroundColor: 'transparent'}}
                                           PreTag="div" {...props as any} >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}>{item.text}</Markdown>;
        } else if (isTableItem(item)) {
            return <TableComponent tableItem={item}/>;
        } else if (isEChartItem(item)){
            return <ReactECharts option={item.option}/>
        } else if (isTextItem(item)){
            return <TextareaAutosize
            maxRows={20}
            aria-label="maximum height"
            placeholder=" "
            defaultValue={item.text}
            style={{ width: "100%", 
            'border': 'none', 
            'outline':'none' }}
          />
        } else {
            return <TextareaAutosize
            maxRows={20}
            aria-label="maximum height"
            placeholder=" "
            defaultValue={item}
            style={{ width: "100%", 
            'border': 'none', 
            'outline':'none' }}
          />
        }
    });

    return (
        <>
            {items.map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
            ))}
        </>
    );
};

export default Output;
