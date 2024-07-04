import React from 'react';
import PageLayoutComponent from '../components/page-layout';
import PageHeader from '../components/header';

const Contact: React.FC<{}> = ({}) =>{
    return (
        <PageLayoutComponent>
            <PageHeader headerText="Contact Us"/>
        </PageLayoutComponent>
    )
}

export default Contact;