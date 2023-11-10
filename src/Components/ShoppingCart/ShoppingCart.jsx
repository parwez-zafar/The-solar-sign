import {
    Box,
    Container,
    Divider,
    Grid,
    Paper,
    Radio,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import PercentIcon from '@mui/icons-material/Percent';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import OrderHistoryData from "../../Data/OrderHistoryData";
import ShoppingCartData from "../../Data/ShoppingCartData";
import { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
const styles = {
    headingStyle: {
        fontFamily: "inter",
        fontWeight: "600",
        fontSize: "16px",
        color: "#121212",
        borderBottom: "1px solid black",
    },
    innerText: { fontFamily: "inter", fontWeight: "400", fontSize: "16px" },
    radioBox: {
        display: "flex",
        border: "1px solid #6C7275",
        borderRadius: "5px",
        margin: "2%",
        marginLeft: "0",
        cursor: "pointer",
    },
};

const ShoppingCart = ({ onCheckoutClick }) => {
    const matches = useMediaQuery("(min-width:1200px)");


    // State for quantities
    const [quantities, setQuantities] = useState(
        ShoppingCartData.map((item) => item.quantity)
    );

    const handleDecrease = (index) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = Math.max(1, updatedQuantities[index] - 1);
        setQuantities(updatedQuantities);

        // Update individual subtotal for the item
        const updatedIndividualSubtotals = [...individualSubtotals];
        updatedIndividualSubtotals[index] = updatedQuantities[index] * ShoppingCartData[index].price;
        setIndividualSubtotals(updatedIndividualSubtotals);
    };

    const handleIncrease = (index) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = updatedQuantities[index] + 1;
        setQuantities(updatedQuantities);


        // Update individual subtotal for the item
        const updatedIndividualSubtotals = [...individualSubtotals];
        updatedIndividualSubtotals[index] = updatedQuantities[index] * ShoppingCartData[index].price;
        setIndividualSubtotals(updatedIndividualSubtotals);


    };


    // State for individual Subtotal
    const [individualSubtotals, setIndividualSubtotals] = useState(
        ShoppingCartData.map((item) => item.price * item.quantity)
    );


    // Calculate the overall total
    const overallTotal = individualSubtotals.reduce((total, subtotal) => total + subtotal, 0);


    // state for total price
    const [totalPrice, setTotalPrice] = useState(overallTotal);

    useEffect(() => {
        setTotalPrice(overallTotal)
    }, [overallTotal])

    // State for Radio
    const [selectedValue, setSelectedValue] = useState("free");
    console.log("select value", selectedValue);
    const handleChange = (event) => {
        setSelectedValue(event.target.value);


    };



    // radio props
    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: "color-radio-button-demo",
        inputProps: { "aria-label": item },
    });

    return (
        <Container>
            <Box my={8}>
                <Grid container spacing={5}>
                    <Grid item sm={12} xs={12} md={7} lg={8} xl={8}>
                        <Box>
                            {matches ? (
                                <TableContainer
                                    component={Paper}
                                    elevation={0}
                                    style={{
                                        borderBottom: "1.5px solid rgb(207 210 213)",
                                        borderRadius: "0",
                                    }}
                                >
                                    <Table
                                        sx={{ minWidth: 650 }}
                                        size="large"
                                        aria-label="a dense table"
                                    >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell style={styles.headingStyle}>
                                                    Product
                                                </TableCell>
                                                <TableCell style={styles.headingStyle}>
                                                    Quantity
                                                </TableCell>
                                                <TableCell style={styles.headingStyle}>Price</TableCell>
                                                <TableCell style={styles.headingStyle}>
                                                    Subtotal
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {ShoppingCartData.map((row, index) => (
                                                <TableRow
                                                    key={index}
                                                    style={{ padding: "1rem" }}
                                                    sx={{
                                                        "&:last-child td, &:last-child th": { border: 0 },
                                                    }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {/* {row.product} */}
                                                        <Box sx={{ display: "flex" }}>
                                                            <Grid>
                                                                <img src={row.product.src} alt="" />
                                                            </Grid>
                                                            <Grid>
                                                                <Typography
                                                                    sx={{
                                                                        fontFamily: "inter",
                                                                        fontWeight: "600",
                                                                        fontSize: "14px",
                                                                        color: "#141718",
                                                                    }}
                                                                >
                                                                    {row.product.name}
                                                                </Typography>
                                                                <Typography
                                                                    sx={{
                                                                        fontFamily: "inter",
                                                                        fontWeight: "400",
                                                                        fontSize: "12px",
                                                                        color: "#6C7275",
                                                                    }}
                                                                >
                                                                    Color : {row.product.color}
                                                                </Typography>
                                                                <Box
                                                                    sx={{
                                                                        color: "#6C7275",
                                                                        width: "105%",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "space-between",
                                                                        cursor: "pointer",

                                                                        // border: 'solid'
                                                                    }}
                                                                >
                                                                    <ClearIcon fontSize="small" />
                                                                    <Typography
                                                                        sx={{
                                                                            fontFamily: "inter",
                                                                            fontWeight: "600",
                                                                            fontSize: "14px",
                                                                        }}
                                                                    >
                                                                        Remove
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Box
                                                            sx={{
                                                                border: "1px solid #6C7275",
                                                                borderRadius: "4px",
                                                                height: "3%",
                                                                width: "67%",
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                alignItems: "center",
                                                            }}
                                                        >
                                                            <Typography
                                                                ml={1}
                                                                onClick={() => handleDecrease(index)}
                                                            >
                                                                -
                                                            </Typography>

                                                            {quantities[index]}
                                                            <Typography
                                                                mr={1}
                                                                onClick={() => handleIncrease(index)}
                                                            >
                                                                +
                                                            </Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            fontFamily: "inter",
                                                            fontWeight: "400",
                                                            fontSize: "18px",
                                                            color: "#121212",
                                                        }}
                                                    >
                                                        ${row.price}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            fontFamily: "inter",
                                                            fontWeight: "600",
                                                            fontSize: "18px",
                                                            color: "#121212",
                                                        }}
                                                    >
                                                        {/* ${row.subtotal} */}
                                                        ${individualSubtotals[index]}.00
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            ) : (
                                ShoppingCartData.map((item, i) => (
                                    <Grid
                                        key={i}
                                        container
                                        spacing={2}
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <Grid item>
                                            <Box sx={{ display: "flex" }}>
                                                <Grid>
                                                    <img src={item.product.src} alt="" />
                                                </Grid>
                                                <Grid>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: "inter",
                                                            fontWeight: "600",
                                                            fontSize: "14px",
                                                            color: "#141718",
                                                        }}
                                                    >
                                                        {item.product.name}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: "inter",
                                                            fontWeight: "400",
                                                            fontSize: "12px",
                                                            color: "#6C7275",
                                                        }}
                                                    >
                                                        Color : {item.product.color}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            border: "1px solid #6C7275",
                                                            borderRadius: "4px",
                                                            height: "30%",
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography
                                                            ml={1}
                                                            onClick={() => handleDecrease(i)}
                                                        >
                                                            -
                                                        </Typography>

                                                        {quantities[i]}
                                                        <Typography
                                                            mr={1}
                                                            onClick={() => handleIncrease(i)}
                                                        >
                                                            +
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                // py={1}
                                                sx={{
                                                    fontFamily: "inter",
                                                    fontWeight: "600",
                                                    fontSize: "18px",
                                                    color: "#121212",
                                                }}
                                            >
                                                {item.price}
                                            </Typography>
                                            <Box display="flex" justifyContent="flex-end">
                                                <ClearIcon fontSize="medium" />
                                            </Box>
                                        </Grid>

                                        <Divider style={{ width: "100%", margin: "1rem  0rem" }} />
                                    </Grid>
                                ))
                            )}


                            <Box sx={{ width: { xs: '100%', sm: '60%' }, mt: '5%' }}>
                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '20px' }}>Have a coupon?</Typography>
                                <Typography sx={{ fontFamily: 'inter', fontWeight: '400', fontSize: '16px', color: '#6C7275', mb: '1rem', mt: '0.5rem' }}>Add your code for an instant cart discount</Typography>
                                <Box style={{ display: 'flex', alignItems: 'center', border: '1px solid #6C7275', p: '0.5rem', mt: '2rem', borderRadius: '3px', height: '3rem' }}>
                                    <PercentIcon sx={{ marginLeft: '.4rem', color: '#6C7275' }} />
                                    <TextField variant="standard" InputProps={{ disableUnderline: true }}
                                        placeholder="Coupon Code"
                                        type="text"
                                        name="coupon"
                                        sx={{ marginLeft: '.3rem' }}
                                    />
                                    <Typography style={{ marginLeft: 'auto', marginRight: '1rem', fontFamily: 'inter', fontWeight: '500', fontSize: '16px' }}>Apply</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item sm={12} xs={12} md={5} lg={4} xl={4}>
                        <Paper
                            elevation={0}
                            style={{
                                // background: "#F3F5F7",
                                border: "1px solid #6C7275",
                                padding: "1rem ",
                                borderRadius: "0.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: "500",
                                    fontSize: "20px",
                                    lineHeight: "28px",
                                }}
                            >
                                {" "}
                                Cart Summary{" "}
                            </Typography>

                            <Box
                                sx={{
                                    ...styles.radioBox,
                                    backgroundColor:
                                        selectedValue === "free" ? "#F3F5F7" : "transparent",
                                    "&:hover": {
                                        backgroundColor: "#F3F5F7",
                                    },
                                }}
                                onClick={() => setSelectedValue("free")}
                            >
                                {" "}
                                <Radio
                                    {...controlProps("free")}
                                    sx={{
                                        color: "black",
                                        "&.Mui-checked": {
                                            color: "black",
                                        },
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        padding: "5%",
                                        paddingLeft: "0",
                                    }}
                                >
                                    <Typography sx={styles.innerText}>Free Shipping</Typography>
                                    <Typography sx={styles.innerText}>%0.00</Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    ...styles.radioBox,
                                    backgroundColor:
                                        selectedValue === "express" ? "#F3F5F7" : "transparent",
                                    "&:hover": {
                                        backgroundColor: "#F3F5F7",
                                    },
                                }}
                                onClick={() => setSelectedValue("express")}
                            >
                                {" "}
                                <Radio
                                    {...controlProps("express")}
                                    sx={{
                                        color: "black",
                                        "&.Mui-checked": {
                                            color: "black",
                                        },
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        padding: "5%",
                                        paddingLeft: "0",
                                    }}
                                >
                                    <Typography sx={styles.innerText}>
                                        Express Shipping
                                    </Typography>
                                    <Typography sx={styles.innerText}>+15.00</Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    ...styles.radioBox,
                                    backgroundColor:
                                        selectedValue === "pick" ? "#F3F5F7" : "transparent",
                                    "&:hover": {
                                        backgroundColor: "#F3F5F7",
                                    },
                                }}
                                onClick={() => setSelectedValue("pick")}
                            >
                                {" "}
                                <Radio
                                    {...controlProps("pick")}
                                    sx={{
                                        color: "black",
                                        "&.Mui-checked": {
                                            color: "black",
                                        },
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        padding: "5%",
                                        paddingLeft: "0",
                                    }}
                                >
                                    <Typography sx={styles.innerText}>Pick Up</Typography>
                                    <Typography sx={styles.innerText}>%21.00</Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "3%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "inter",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                    }}
                                >
                                    Subtotal
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "inter",
                                        fontWeight: "600",
                                        fontSize: "16px",
                                    }}
                                >
                                    ${overallTotal}.00
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    borderTop: "1px solid #d9d3d3",
                                }}
                                mb={4}
                                pt={2}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "inter",
                                        fontWeight: "600",
                                        fontSize: "20px",
                                    }}
                                >
                                    Total
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "inter",
                                        fontWeight: "600",
                                        fontSize: "20px",
                                    }}
                                >
                                    ${totalPrice}.00
                                </Typography>
                            </Box>
                            <Box onClick={onCheckoutClick}>

                                <CustomButton type="button" wdth="100%" >
                                    Check Out
                                </CustomButton>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ShoppingCart;
