import { Typography, Grid } from "@mui/material";
import Freeshipping from "../../assets/svg/free-shipping.svg";
import Moneyshipping from "../../assets/svg/money-shipping.svg";
import SecurePayments from "../../assets/svg/secure-payments.svg";
import Support from "../../assets/svg/support.svg";

const ServicesCard = () => {
  const ServicesCardData = [
    {
      title: "Free Shipping",
      logo: Freeshipping,
      description: "Order above $200",
    },
    {
      title: "Money-back",
      logo: Moneyshipping,
      description: "30 days guarantee",
    },
    {
      title: "Secure Payments",
      logo: SecurePayments,
      description: "Secured by Stripe",
    },
    {
      title: "24/7 Support",
      logo: Support,
      description: "Phone and email support",
    },
  ];

  return (
    <Grid container justifyContent="center" sx={{ padding: "0 2rem" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {ServicesCardData.map((item, i) => (
          <Grid item xs={6} sm={6} md={3} key={i}>
            <Grid
              container
              alignItems="flex-start"
              justifyContent="center"
              sx={{
                minHeight: "200px",
                background: "#F3F5F7",
                flexDirection: "column",
                padding: "1rem",
              }}
            >
              <img src={item.logo} alt={item.title} />
              <Typography
                variant="h6"
                sx={{
                  color: "#141718",
                  fontFamily: "Poppins",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "1.75rem",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: "#6C7275",
                  fontFamily: "Poppins",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.5rem",
                }}
              >
                {item.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ServicesCard;
