import axios from 'axios';
import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import React from 'react'

export async function getStaticProps() {
    return {
        notFound: true,
    }

    // try {
    //     const res = await axios.post('https://script.xgoogle.com/macros/s/AKfycbzwXOyXO4v0L2Eb_py1xjQLTveV9u2s3HiY5pQAvswUNv0dM_b7tyy_SQRlX3Ym_dwOfQ/exec',
    //         {
    //             action: 'profile'
    //         },
    //     )
    //     if (!res) {
    //         return { notFound: true };
    //     }
    //     return { props: { res } };
    // } catch (e) {
    //     return { notFound: true };
    // }
}

const ini = ({ data }: any) => {
    return (
        <>
            {JSON.stringify(data)}
        </>
    )
}


export default ini;