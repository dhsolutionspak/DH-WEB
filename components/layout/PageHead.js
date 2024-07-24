import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "DH Solutions LLC - Custom Software Development Company in your region"}
                </title>
            </Head>
        </>
    )
}

export default PageHead