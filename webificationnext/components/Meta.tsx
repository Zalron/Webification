import Head from 'next/head'
import React from "react";

export const Meta = ({ title, keywords, description }: IProps) => {
    return (
        <meta>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </meta>
    );
}

export interface IProps{
    title: string,
    keywords: string,
    button1: string,
    button2: string,
    description: string,
}

Meta.defaultProps = {
    title: 'Webification',
    keywords: 'web development, programming',
    description: 'Paving the way for a new chapter with the Web',
    button1: '',
    button2: '',
}

export default Meta