import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import { Link, useParams } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import Chart from "react-apexcharts";
import axios from 'axios';

interface dates {
    [date: number]: string;
}

interface Value {
    [key: string]: any;
    value: number;
}
const History: React.FC = () => {
    const [bitcoinBRL, setBitcoinBRL] = useState({});
    const [date, setDate] = useState<dates>([]);
    const [value, setValue] = useState([]);
    const chart = () => {

    }

    const test = useParams();
    console.log(test);
    const id = Object.values(test);

    useEffect(() => {

        async function getData(): Promise<void> {
            const response = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?index={id}`).then(response => {

                setBitcoinBRL(response.data.bpi);
                console.log(bitcoinBRL);
                const data = Object.entries(bitcoinBRL);
                console.log(data);
            });
        }
        getData();
    });



    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },

        button: {
            color: '#fff',
        }
    }));

    const classes = useStyles();

    const state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {

            }
        },
        series: [
            {

                data: [Object.entries(bitcoinBRL)]
            }
        ]
    }


    return (

        <>
            <Header><Link to="/" >

                <IconButton className={classes.button} aria-label="upload picture" component="span" >
                    <ArrowBackIcon />
                </IconButton>

            </Link></Header>
            <Container>

                {id}
                <Chart
                    options={state.options}
                    series={state.series}
                    type="line"
                    width="100%"
                />


            </Container>
        </>

    );
}

export default History;