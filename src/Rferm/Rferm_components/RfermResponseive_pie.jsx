
import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import { Flex, Grid, Group, useMantineTheme,Center } from '@mantine/core';
import { light } from "@mui/material/styles/createPalette";
import { IconSquareRounded } from '@tabler/icons-react';
import { Text, } from '@mantine/core';
import { gray } from "d3";

function RfermResponseive_pie({ data }) {
    const theme = useMantineTheme();
    // Extract values and labels from data
    const values = data.map(item => item.value);
    const labels = data.map(item => item.label);
    console.log("chartdata123", values);
    console.log("chartdata13", labels);
    const colors = data.map(item => item.color);
   


    // Destructure colors array
    const [color1, color2, color3] = colors; // Assuming there are only three colors in the array
 console.log("chartdatacolor",  color1, "color2:", color2, "color3:", color3);

    const [value1, value2, value3]= values;
    console.log("chartdata value",  value1, "value2:", value2, "value3:", value3);


    const [label1, label2, label3]= labels;

     // Sum up the values and store the result in a variable
     const totalValue = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

     console.log("Total Value:", totalValue);




    // const [contryname, setCountryname]= useState([]);
    // const [medal, setMedal]= useState([]);

    // useEffect( ()=>{
    //  const getdata= async()=>{
    //       const countryname=[];
    //       const getmedal=[];

    //     const reqData= await fetch("http://localhost/reactgraphtutorial/medals"); 
    //     const resData= await reqData.json();
    //     for(let i=0; i<resData.length; i++)
    //     {
    //         countryname.push(resData[i].country);
    //         getmedal.push(parseInt(resData[i].medals));
    //     }
    //     setCountryname(countryname);
    //     setMedal(getmedal);


    //  }
    //  getdata();
    // },[]);

    return (
        <React.Fragment>
           <Grid >
            <Grid.Col md={12} lg={12}>
             
            <Flex
      
      gap="sm"
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
    >
                <Chart
                    type="donut"
                    width={'auto'}
                    height={'327'}
                    series={values}
                    options={{
                        theme: {
                            mode: theme.colorScheme === 'dark' ? 'dark' : 'light',


                        },
                   
                        labels: labels,
                        plotOptions: {
                            pie: {
                                donut: {
                                    size:"50%",
                                    labels: {
                                        show: true,
                                        total: {
                                            show: true,
                                            showAlways: false,
                                            fontSize: 20,
                                            color: '#1968aa',

                                        }
                                    }
                                }
                            }
                        },
                        dataLabels: {
                            enabled: true,


                        },
                        fill: {
                            colors: colors
                        },
                  

                        colors: colors,

                        legend: {
                            show:false,
                            fontSize: '20px',
                            position: "right",
                            labels: {
                                colors: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black
                            },

                        },

                    }}
                />
              
                <Text fw={600}>
                <IconSquareRounded stroke={20} size={15} color={color3}/> {label3}:  <br/>
                <IconSquareRounded stroke={20} size={15} color={color2}/>  {label2}:  <br/>
                <IconSquareRounded stroke={20} size={15} color={color1}/>  {label1}:    <br/>
                <Text fw={800}>
                Total:     <br/>
                </Text>
                </Text>
               
                    <Text fw={700} color="blue" align="right">
                    {value3} <br/>
                    {value2} <br/>
                    {value1} <br/>
                    <Text fw={800}>
                    {totalValue}
                    </Text>
                    </Text>
                    </Flex>   
                   
            </Grid.Col>
            
            </Grid>
        </React.Fragment>
    );
}
export default RfermResponseive_pie;