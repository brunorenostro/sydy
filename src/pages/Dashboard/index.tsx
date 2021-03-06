import React, { useEffect, useState } from 'react';
import { Container, Card, CardContainer } from './styles';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
}));


const Dashboard: React.FC = () => {
    const classes = useStyles();

    const [bitcoinBRL, setBitcoinBRL] = useState([]);
    const [bitcoinGBP, setBitcoinGBP] = useState([]);
    const [bitcoinEUR, setBitcoinEUR] = useState([]);


    useEffect(() => {

        async function getData(): Promise<void> {
            const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BRL.json').then(response => {
                setBitcoinBRL(response.data.bpi.USD.rate);
            });



            const responseGBP = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/GBP.json').then(response => {
                setBitcoinGBP(response.data.bpi.GBP.rate);
            });

            const responseEUR = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/EUR.json').then(response => {
                setBitcoinEUR(response.data.bpi.EUR.rate);
            });
        }
        getData();


    }, []);

    return (<>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    SYDY BITCOIN PRICE
          </Typography>
                {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
        <Container>
            <CardContainer>

                <Link style={{ textDecoration: 'none' }} to="/history/USD"><Card><h1>$ {bitcoinBRL}</h1><p>Dólar</p></Card></Link>
                <Link style={{ textDecoration: 'none' }} to="/history/GBP"><Card><h1>£ {bitcoinGBP}</h1><p>Libra</p></Card></Link>
                <Link style={{ textDecoration: 'none' }} to="/history/EUR"> <Card><h1>€ {bitcoinEUR}</h1><p>Euro</p></Card></Link>
            </CardContainer>
        </Container>

    </>);
}

export default Dashboard;