import React from 'react';
import Layout from '../../components/Layouts/Layout'; // ✅ properly closed
import Section from './Section';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
function Home() {
  return ( <>
    <Layout>
       <Section/>
       <Section1/>
       <Section6/> 
       <Section2/> 
       <Section3/> 
       <Section5/>
       <Section4/> 
    </Layout>
    </>
  );
}

export default Home;
