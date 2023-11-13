import { Box, Container, Grid, Typography } from "@mui/material";
import loveseat_sofa from '../../assets/images/Shop Page/Loveseat Sofa.png'
import CustomButton from "../../Components/CustomButton";
import { Link } from "react-router-dom";

const ShopPageProduct = (props) => {
    const { src, alt, name, discountPrice, price } = props;
    const styles = {
        container: { position: "relative", width: "fit-content", marginBottom: '0.5rem' },
        btnBox: { width: '100%', position: 'absolute', bottom: '5%', left: '9%' },
        descriptionBox: { width: '55%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
        newText: { position: 'absolute', top: '9%', left: "5%", fontFamily: 'inter', fontWeight: '700', fontSize: '16px', color: '#121212', background: '#FFFFFF', padding: '.1rem', borderRadius: '4px', width: '25%', textAlign: 'center' },
        discountText: { position: 'absolute', top: '20%', left: "5%", fontFamily: 'inter', fontWeight: '700', fontSize: '16px', color: '#FEFEFE', background: '#38CB89', padding: '.1rem', borderRadius: '4px', width: '25%', textAlign: 'center' },
        nameText: { fontFamily: 'inter', fontWeight: '600', fontSize: '16px', color: '#141718' }
    }
    return (
        <Grid item mb={3}>
            <Grid item sx={styles.container}>
                <Typography sx={styles.newText}> NEW</Typography>
                <Typography sx={styles.discountText}>-50%</Typography>
                <img src={src} alt="" style={{ width: '100%', height: '100%' }} />
                <Box sx={styles.btnBox}>
                    <CustomButton type="button" wdth='80%'>Add to cart</CustomButton>
                </Box>
            </Grid>
            <Link to='/product-details' style={{ textDecoration: 'none' }}>
                <Grid>
                    <Typography mb={1} sx={styles.nameText}>{name}</Typography>
                    <Box sx={styles.descriptionBox} >
                        <Typography sx={{ ...styles.nametext, fontSize: '14px', color: '#121212' }} > ${discountPrice}</Typography>
                        {
                            price &&
                            <Typography sx={{ fontFamily: 'inter', fontWeight: '400', fontSize: "14px", color: "#6C7275" }}> <strike>${price}</strike></Typography>}
                    </Box>

                </Grid>
            </Link>


        </Grid >
    )
}

export default ShopPageProduct